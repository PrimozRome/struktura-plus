import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TestimonialGrid } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { testimonials, testimonialsByDate } from "@/content/testimonials";

export const metadata = pageMeta({
  title: "Mnenja strank",
  description:
    "Kaj o izvedbah Struktura Plus pravijo stranke: lesene in WPC terase, nadstreški, ograje, stropi in krovska dela. Vsa mnenja so resnična, večina tudi podpisana.",
  path: "/mnenja-strank",
});

const crumbs = [
  { name: "Domov", path: "/" },
  { name: "Mnenja strank", path: "/mnenja-strank" },
];

/**
 * Zbirna stran z vsemi mnenji.
 *
 * Shema Review namerno ni dodana: Google za samopostrežna mnenja — torej
 * mnenja o podjetju na strani istega podjetja — zvezdic v rezultatih ne
 * prikaže, ne glede na označevanje. Stran je tu za bralca in ne za zvezdice.
 */
export default function MnenjaPage() {
  const stevilo = testimonials.length;
  const najstarejse = testimonialsByDate[testimonialsByDate.length - 1]?.date?.slice(0, 4);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <Section className="!pb-0 !pt-[var(--hero-y-top)]">
        <Container>
          <p className="sp-eyebrow">Mnenja</p>
          <h1 className="mt-3 max-w-[18ch] text-[length:var(--text-display-lg)]">
            Kaj pravijo stranke
          </h1>
          <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
            {stevilo} mnenj strank od leta {najstarejse} do danes — terase, nadstreški, ograje,
            stropi in krovska dela. Besedila so takšna, kot so jih napisale stranke; popravljene
            so tipkarske in slovnične napake, vsebina in ton pa sta njuna.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <TestimonialGrid items={testimonialsByDate} columns={3} />

          <p className="mt-10 max-w-[70ch] text-[15px] text-[var(--text-subtle)]">
            Mnenja so zbrana iz povpraševanj in po zaključenih izvedbah. Če ste z nami že delali
            in bi želeli dodati svoje, nam pišite prek{" "}
            <Link href="/kontakt">kontaktnega obrazca</Link> — objavimo ga s podpisom, kot ga
            želite.
          </p>
        </Container>
      </Section>

      <CtaBand
        title="Se slišimo?"
        lead="Pošljite mere in fotografijo prostora ali pokličite — ogled in ponudba sta brez obveznosti."
      />
    </>
  );
}
