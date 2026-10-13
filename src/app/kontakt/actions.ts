"use server";

import { redirect } from "next/navigation";
import { services } from "@/content/services";
import { MAX_DATOTEK, MAX_MB, DOVOLJENI_TIPI, type PrilogaZVsebino } from "@/lib/priloge";
import { posljiPovprasevanje } from "@/lib/posta";

/**
 * Pobere priloge iz obrazca in zavrne, kar ne sodi vanje.
 *
 * Vrne null, kadar priloge kršijo omejitve — klicatelj to obravnava enako kot
 * neveljavno polje. Prazen seznam pomeni, da priponk preprosto ni.
 *
 * Bajte preberemo v pomnilnik, ker morajo v sporočilo; datoteka na disk ne gre.
 */
async function preberiPriloge(formData: FormData): Promise<PrilogaZVsebino[] | null> {
  const vse = formData.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  if (vse.length === 0) return [];
  if (vse.length > MAX_DATOTEK) return null;
  const skupaj = vse.reduce((n, f) => n + f.size, 0);
  if (skupaj > MAX_MB * 1024 * 1024) return null;
  if (vse.some((f) => !(DOVOLJENI_TIPI as readonly string[]).includes(f.type))) return null;

  return Promise.all(
    vse.map(async (f) => ({
      ime: f.name,
      tip: f.type,
      bajtov: f.size,
      base64: Buffer.from(await f.arrayBuffer()).toString("base64"),
    })),
  );
}

export async function submitInquiry(formData: FormData) {
  // Honeypot — boti izpolnijo skrito polje, ljudje ne. Bota ne obveščamo, da
  // smo ga prepoznali: dobi enak zaslon kot vsi drugi, poslano pa ni nič.
  if ((formData.get("company") as string)?.length) {
    redirect("/hvala");
  }

  const get = (k: string) => String(formData.get(k) ?? "").trim();

  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const service = get("service");
  const location = get("location");
  const message = get("message");
  const consent = formData.get("consent");

  const validService = services.some((s) => s.navLabel === service) || service === "Drugo";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  const priloge = await preberiPriloge(formData);

  if (!name || !validEmail || !message || !consent || !validService || priloge === null) {
    redirect("/kontakt?napaka=polja#obrazec");
  }

  const izid = await posljiPovprasevanje(
    { name, email, phone, service, location, message },
    priloge,
  );

  // Pri neuspehu stranke ne pošljemo na stran za zahvalo: povpraševanje ni
  // prišlo nikamor in mora to izvedeti, sicer bo čakala odgovor, ki ne pride.
  if (izid !== "poslano") {
    redirect("/kontakt?napaka=posta#obrazec");
  }

  redirect("/hvala");
}
