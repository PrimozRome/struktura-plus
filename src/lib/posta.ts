import { Resend } from "resend";
import { business } from "@/content/business";
import type { PrilogaZVsebino } from "@/lib/priloge";

/**
 * POŠILJANJE POVPRAŠEVANJ PREK RESENDA
 *
 * Ob vsaki oddaji obrazca odideta dve sporočili:
 *   1. lastniku — vsa polja obrazca in priponke; nanj se odgovarja stranki,
 *      ker je "reply-to" nastavljen na njen naslov;
 *   2. stranki — potrdilo, da je povpraševanje prišlo, s prepisom poslanega.
 *
 * Pošiljatelj mora biti na domeni, ki je v Resendu potrjena (SPF in DKIM).
 * Naslova stranke ni mogoče uporabiti kot pošiljatelja — sporočilo bi padlo
 * na preverjanju pristnosti — zato gre njen naslov v "reply-to".
 */

/** Odjemalca ustvarimo šele ob klicu: konstruktor brez ključa vrže napako,
 *  med gradnjo pa okoljskih spremenljivk ni nujno na voljo. */
function odjemalec(): Resend | null {
  const kljuc = process.env.RESEND_API_KEY;
  if (!kljuc) return null;
  return new Resend(kljuc);
}

const OD = process.env.POSTA_OD ?? `${business.name} <${business.email}>`;
const ZA = process.env.POSTA_ZA ?? business.email;

export type Povprasevanje = {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
};

/** Ubeži znakom, ki bi v HTML sporočilu spremenili zgradbo. Vsebina prihaja od
 *  neznanega pošiljatelja, zato ne sme nikoli pasti v HTML nepregledana. */
function u(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Prelomi vrstic iz polja za sporočilo v HTML. */
function odstavki(s: string): string {
  return u(s).replace(/\r?\n/g, "<br>");
}

function kb(bajtov: number): string {
  return bajtov < 1024 * 1024
    ? `${Math.round(bajtov / 1024)} kB`
    : `${(bajtov / (1024 * 1024)).toFixed(1)} MB`;
}

type Vrstica = [oznaka: string, vrednost: string];

function vrstice(p: Povprasevanje): Vrstica[] {
  return [
    ["Ime in priimek", p.name],
    ["E-naslov", p.email],
    ["Telefon", p.phone || "—"],
    ["Storitev", p.service],
    ["Lokacija objekta", p.location || "—"],
  ];
}

const PISAVA =
  "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

function tabela(vs: Vrstica[]): string {
  const celice = vs
    .map(
      ([o, v]) =>
        `<tr>
           <td style="padding:6px 16px 6px 0;color:#736655;white-space:nowrap;vertical-align:top">${u(o)}</td>
           <td style="padding:6px 0;color:#2E241B"><strong>${u(v)}</strong></td>
         </tr>`,
    )
    .join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="${PISAVA};font-size:15px;line-height:1.5;border-collapse:collapse">${celice}</table>`;
}

function ovoj(vsebina: string): string {
  return `<!doctype html><html lang="sl"><body style="margin:0;padding:24px;background:#FCF9F4">
    <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E2D6C4;border-radius:10px;padding:28px;${PISAVA};font-size:16px;line-height:1.6;color:#2E241B">
      ${vsebina}
      <p style="margin:28px 0 0;padding-top:16px;border-top:1px solid #E2D6C4;font-size:13px;color:#736655">
        ${u(business.name)} · ${u(business.phoneDisplay)} · ${u(business.email)}
      </p>
    </div>
  </body></html>`;
}

/* ----------------------------------------------------------------------- */
/* Sporočilo lastniku                                                       */
/* ----------------------------------------------------------------------- */

export function lastnikuHtml(p: Povprasevanje, priloge: PrilogaZVsebino[]): string {
  const seznam = priloge.length
    ? `<p style="margin:24px 0 8px;font-weight:600">Priponke (${priloge.length})</p>
       <ul style="margin:0;padding-left:20px;color:#736655;font-size:15px">
         ${priloge.map((f) => `<li>${u(f.ime)} — ${kb(f.bajtov)}</li>`).join("")}
       </ul>`
    : `<p style="margin:24px 0 0;color:#736655;font-size:15px">Brez priponk.</p>`;

  return ovoj(`
    <p style="margin:0 0 20px;font-size:18px;font-weight:600">Novo povpraševanje s spletne strani</p>
    ${tabela(vrstice(p))}
    <p style="margin:24px 0 8px;font-weight:600">Sporočilo</p>
    <div style="padding:14px 16px;background:#FBF6F0;border-radius:6px;font-size:15px">${odstavki(p.message)}</div>
    ${seznam}
    <p style="margin:24px 0 0;font-size:14px;color:#736655">
      Na to sporočilo lahko odgovorite neposredno — odgovor gre stranki.
    </p>`);
}

function lastnikuText(p: Povprasevanje, priloge: PrilogaZVsebino[]): string {
  const polja = vrstice(p)
    .map(([o, v]) => `${o}: ${v}`)
    .join("\n");
  const seznam = priloge.length
    ? `\n\nPriponke (${priloge.length}):\n` +
      priloge.map((f) => `- ${f.ime} (${kb(f.bajtov)})`).join("\n")
    : "\n\nBrez priponk.";
  return `Novo povpraševanje s spletne strani\n\n${polja}\n\nSporočilo:\n${p.message}${seznam}\n\nNa to sporočilo lahko odgovorite neposredno — odgovor gre stranki.`;
}

/* ----------------------------------------------------------------------- */
/* Potrdilo stranki                                                         */
/* ----------------------------------------------------------------------- */

export function strankiHtml(p: Povprasevanje, priloge: PrilogaZVsebino[]): string {
  const ime = p.name.split(/\s+/)[0] ?? p.name;
  const prepis = [
    ...vrstice(p).filter(([o]) => o !== "Ime in priimek" && o !== "E-naslov"),
    ["Priponke", priloge.length ? priloge.map((f) => f.ime).join(", ") : "—"] as Vrstica,
  ];

  return ovoj(`
    <p style="margin:0 0 16px">Pozdravljeni, ${u(ime)}!</p>
    <p style="margin:0 0 16px">
      Vaše povpraševanje je prišlo do mene in sem ga prebral. Hvala, da ste si vzeli čas
      in ga napisali — iz tega se da že precej razbrati.
    </p>
    <p style="margin:0 0 16px">
      Oglasim se vam v enem do dveh delovnih dneh. Če se vam mudi ali bi kaj raje povedali
      na glas, kar pokličite na
      <a href="${business.phoneHref}" style="color:#6E4628">${u(business.phoneDisplay)}</a> —
      po telefonu se marsikaj razčisti hitreje kot po pošti.
    </p>
    <p style="margin:24px 0 8px;font-weight:600">Kar ste poslali</p>
    ${tabela(prepis)}
    <p style="margin:20px 0 8px;font-weight:600">Sporočilo</p>
    <div style="margin:0;padding:14px 16px;background:#FBF6F0;border-radius:6px;font-size:15px">${odstavki(p.message)}</div>
    <p style="margin:24px 0 0">
      Lep pozdrav,<br>
      <strong>Marko Pogorevc</strong><br>
      <span style="color:#736655">${u(business.name)}</span>
    </p>`);
}

function strankiText(p: Povprasevanje, priloge: PrilogaZVsebino[]): string {
  const ime = p.name.split(/\s+/)[0] ?? p.name;
  const prepis = vrstice(p)
    .filter(([o]) => o !== "Ime in priimek" && o !== "E-naslov")
    .map(([o, v]) => `${o}: ${v}`)
    .join("\n");
  return `Pozdravljeni, ${ime}!

Vaše povpraševanje je prišlo do mene in sem ga prebral. Hvala, da ste si vzeli čas in ga napisali — iz tega se da že precej razbrati.

Oglasim se vam v enem do dveh delovnih dneh. Če se vam mudi ali bi kaj raje povedali na glas, kar pokličite na ${business.phoneDisplay} — po telefonu se marsikaj razčisti hitreje kot po pošti.

Kar ste poslali:
${prepis}
Priponke: ${priloge.length ? priloge.map((f) => f.ime).join(", ") : "—"}

Sporočilo:
${p.message}

Lep pozdrav,
Marko Pogorevc
${business.name}`;
}

/* ----------------------------------------------------------------------- */

export type IzidPoste = "poslano" | "brez-kljuca" | "napaka";

/**
 * Pošlje obe sporočili. Lastnikovo gre prvo in odloča o izidu: če pade,
 * povpraševanje ni prišlo nikamor in mora stranka to izvedeti. Neuspelo
 * potrdilo stranki samo zabeležimo — povpraševanje je takrat že v nabiralniku.
 */
export async function posljiPovprasevanje(
  p: Povprasevanje,
  priloge: PrilogaZVsebino[],
): Promise<IzidPoste> {
  const resend = odjemalec();
  if (!resend) {
    // Vsebine povpraševanja NE zapisujemo: politika zasebnosti obljublja, da so
    // v strežniških dnevnikih le tehnični podatki obiska, in dnevnik na Vercelu
    // je dosegljiv širše kot poštni predal. Zabeležimo samo, da je nekaj prišlo.
    // eslint-disable-next-line no-console
    console.error("[povprasevanje] RESEND_API_KEY ni nastavljen — sporočilo ni bilo poslano");
    return "brez-kljuca";
  }

  const priponke = priloge.map((f) => ({
    filename: f.ime,
    content: f.base64,
    contentType: f.tip,
  }));

  const lastniku = await resend.emails.send({
    from: OD,
    to: ZA,
    replyTo: p.email,
    subject: `Povpraševanje: ${p.service} — ${p.name}`,
    html: lastnikuHtml(p, priloge),
    text: lastnikuText(p, priloge),
    ...(priponke.length ? { attachments: priponke } : {}),
  });

  if (lastniku.error) {
    // Brez osebnih podatkov — samo napaka ponudnika, da je vzrok mogoče ugotoviti.
    // Stranka ob tem ne dobi strani za zahvalo, ampak poziv, naj pokliče, zato
    // povpraševanje ni tiho izgubljeno tudi brez zapisa v dnevnik.
    // eslint-disable-next-line no-console
    console.error("[povprasevanje] pošiljanje lastniku ni uspelo:", lastniku.error);
    return "napaka";
  }

  const stranki = await resend.emails.send({
    from: OD,
    to: p.email,
    replyTo: business.email,
    subject: "Prejeli smo vaše povpraševanje",
    html: strankiHtml(p, priloge),
    text: strankiText(p, priloge),
  });

  if (stranki.error) {
    // eslint-disable-next-line no-console
    console.error("[povprasevanje] potrdilo stranki ni uspelo:", stranki.error);
  }

  return "poslano";
}
