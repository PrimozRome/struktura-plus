import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta({
  title: "Storitve — lesene terase, ograje, nadstreški in fasade",
  description:
    "Vse storitve Struktura Plus: lesene terase in WPC terase, ograje, nadstreški za avto in teraso, lesene fasade, vrtne lope, pergole, ravne strehe in krovstvo.",
  path: "/storitve",
});

const crumbs = [
  { name: "Domov", path: "/" },
  { name: "Storitve", path: "/storitve" },
];

export default function StoritvePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <Section className="!pt-[var(--hero-y-top)]">
        <Container>
          <p className="sp-eyebrow">Ponudba</p>
          <h1 className="mt-3 max-w-[18ch] text-[length:var(--text-display-lg)]">
            Lesene in WPC rešitve po meri
          </h1>
          <div className="mt-6 max-w-[64ch]">
            <p className="text-[18px] leading-relaxed text-[var(--text-muted)]">
              Izdelujemo in montiramo terase, ograje, nadstreške, fasade in manjše objekte —
              po meri, v lesu ali WPC, za zunanjost in notranjost.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-[var(--text-reading)]">
              Vsak projekt obravnavamo posebej: od svetovanja in izmere do montaže in zaključnih
              detajlov. Material izbiramo po tem, koliko zdrži na prostem, podkonstrukcija pa je
              iz enako odpornega materiala kot vidna površina — tam se odloči, ali bo izdelek
              zdržal dvajset let ali pet.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-[var(--text-muted)]">
              Pri vsaki storitvi je objavljen okvirni cenovni razpon, da veste, v kateri razred
              se spuščate, še preden nas pokličete.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} priority={i < 3} />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
