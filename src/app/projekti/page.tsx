import Link from "next/link";
import { projects, PROJECTS_READY } from "@/content/projects";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Figure } from "@/components/Figure";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta({
  title: "Projekti — izvedene terase, ograje, nadstreški in fasade",
  description:
    "Izvedeni projekti Struktura Plus s krajem, uporabljenim materialom in letom izvedbe. Lesene terase, ograje, nadstreški, fasade in vrtni objekti.",
  path: "/projekti",
  // Dokler so projekti testni, stran ne sme v indeks.
  noindex: !PROJECTS_READY,
});

const crumbs = [
  { name: "Domov", path: "/" },
  { name: "Projekti", path: "/projekti" },
];

export default function ProjektiPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <Section className="!pt-[var(--hero-y-top)]">
        <Container>
          <p className="sp-eyebrow">Reference</p>
          <h1 className="mt-3 max-w-[20ch] text-[length:var(--text-display-lg)]">Izvedeni projekti</h1>
          <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
            Vsak projekt ima naveden kraj, uporabljen material in leto izvedbe — da vidite, kaj
            konkretno smo naredili in s čim, ne le kako je videti.
          </p>

          {!PROJECTS_READY && (
            <p className="mt-8 rounded-[var(--radius-sm)] border border-[var(--opozorilo)] bg-[var(--bg-muted)] p-4 text-[15px] text-[var(--text)]">
              <strong>Opomba za urednika:</strong> spodnji projekti so testni vnosi. Pred zagonom
              jih zamenjajte z resničnimi in v <code>src/content/projects.ts</code> nastavite{" "}
              <code>PROJECTS_READY = true</code>. Stran je do takrat označena z noindex.
            </p>
          )}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article key={p.slug} className="sp-card">
                <div className="sp-card__media">
                  <Figure alt={p.imageAlt} ratio="3/2" rounded={false} priority={i < 3} sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h2 className="!text-[20px] font-[family-name:var(--font-display)]">
                    <Link href={`/projekti/${p.slug}`} className="sp-card__link text-[var(--text)] no-underline hover:underline">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="text-[13px] tabular-nums text-[var(--text-subtle)]">
                    {p.place} · {p.material} · {p.year}
                  </p>
                  <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
