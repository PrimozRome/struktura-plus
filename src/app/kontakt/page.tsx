import Link from "next/link";
import { business } from "@/content/business";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata = pageMeta({
  title: "Kontakt in povpraševanje",
  description:
    "Pošljite povpraševanje za leseno teraso, ograjo, nadstrešek ali fasado. Odgovorimo v enem do dveh delovnih dneh. Ogled in ponudba brez obveznosti, po vsej Sloveniji.",
  path: "/kontakt",
});

const crumbs = [
  { name: "Domov", path: "/" },
  { name: "Kontakt", path: "/kontakt" },
];

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ napaka?: string }>;
}) {
  const { napaka } = await searchParams;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <Section className="!pt-[var(--hero-y-top)]">
        <Container>
          <p className="sp-eyebrow">Kontakt</p>
          <h1 className="mt-3 text-[length:var(--text-display-lg)]">Povpraševanje in ogled</h1>
          <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
            Pošljite okvirne mere, lokacijo in fotografijo prostora. Na povpraševanje odgovorimo v
            enem do dveh delovnih dneh, ogled uskladimo v tednu dni. Ogled in ponudba sta brez
            obveznosti.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <ContactForm napaka={napaka === "polja" || napaka === "posta" ? napaka : undefined} />

            <aside className="flex flex-col gap-8 lg:border-l lg:border-[var(--border)] lg:pl-10">
              <div>
                <h2 className="!text-[20px]">Raje pokličete?</h2>
                <p className="mt-2 text-[15px] text-[var(--text-muted)]">
                  Približno polovica strank se odloči za telefon. Če imate vprašanje pred
                  povpraševanjem, je klic najhitrejša pot.
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-4 inline-block font-[family-name:var(--font-display)] text-[24px] font-semibold tabular-nums text-[var(--text)] no-underline"
                >
                  {business.phoneDisplay}
                </a>
              </div>

              <div>
                <h2 className="!text-[20px]">Podatki</h2>
                {/* NAP — identičen zapis kot v nogi in v Google Business Profile. */}
                <address className="mt-3 text-[15px] not-italic leading-relaxed text-[var(--text-muted)]">
                  {business.name}
                  <br />
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                  <br />
                  {business.address.countryName}
                </address>
                <p className="mt-3 text-[15px]">
                  <a href={`mailto:${business.email}`} className="text-[var(--link)]">{business.email}</a>
                </p>
                <p className="mt-1 text-[15px] text-[var(--text-muted)]">
                  Delovni čas: {business.openingHours.toLowerCase()}
                </p>
              </div>

              <div>
                <h2 className="!text-[20px]">Kje delamo</h2>
                <p className="mt-2 text-[15px] text-[var(--text-muted)]">
                  Po vsej Sloveniji. Najpogosteje: {business.areaServed.map((a) => a.name).join(", ")}.
                </p>
                <Link href="/cenik" className="sp-btn sp-btn--ghost mt-3">Okvirne cene →</Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
