import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, PROJECTS_READY } from "@/content/projects";
import { getService } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Figure } from "@/components/Figure";
import { CtaBand } from "@/components/CtaBand";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.title} — ${p.place}`,
    description: `${p.summary} Material: ${p.material}. Izvedba ${p.year}, ${p.place}.`,
    path: `/projekti/${p.slug}`,
    noindex: !PROJECTS_READY,
  });
}

export default async function ProjektPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const service = getService(p.service);

  const crumbs = [
    { name: "Domov", path: "/" },
    { name: "Projekti", path: "/projekti" },
    { name: p.title, path: `/projekti/${p.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <Section className="!pb-0 !pt-[var(--hero-y-top)]">
        <Container>
          <h1 className="max-w-[22ch] text-[length:var(--text-display-lg)]">{p.title}</h1>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4 text-[15px]">
            {[
              ["Kraj", p.place],
              ["Material", p.material],
              ["Leto", String(p.year)],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="sp-eyebrow">{k}</dt>
                <dd className="mt-1 tabular-nums text-[var(--text)]">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <Figure alt={p.imageAlt} ratio="16/9" priority sizes="100vw" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <div className="sp-prose">
            {p.body.map((t, i) => (
              <p key={i} className="text-[var(--text-muted)]">{t}</p>
            ))}
            {service && (
              <p>
                Več o tej storitvi:{" "}
                <Link href={`/storitve/${service.slug}`}>{service.navLabel}</Link>.
              </p>
            )}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
