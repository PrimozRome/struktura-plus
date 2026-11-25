import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  projects,
  getProject,
  PROJECTS_READY,
  naslovnaFoto,
  projektGalerija,
  projektShema,
} from "@/content/projects";
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
  const naslovna = naslovnaFoto(p);
  const slike = projektGalerija(p);
  const shema = projektShema(p);

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
            {/* 3/2 namesto 16/9: posnetki z gradbišč so v razmerju 4:3, pri
                16/9 bi obrez odvzel četrtino višine. Širina je širina vsebnika. */}
            <Figure
              foto={naslovna}
              alt={p.imageAlt}
              ratio="3/2"
              priority
              sizes="(max-width: 1240px) 92vw, 1144px"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <div className="sp-prose">
            {p.body.map((t, i) => (
              <p key={i} className="text-[var(--text-muted)]">{t}</p>
            ))}
            {p.scope && p.scope.length > 0 && (
              <section>
                <h2>Obseg del</h2>
                <ul>
                  {p.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </section>
            )}
            {service && (
              <p>
                Več o tej storitvi:{" "}
                <Link href={`/storitve/${service.slug}`}>{service.navLabel}</Link>.
              </p>
            )}
          </div>
        </Container>
      </Section>

      {shema && (
        <Section className="!pt-0">
          <Container>
            <p className="sp-eyebrow">Načrt</p>
            <h2 className="mt-3">Konstrukcija in ostrešje</h2>
            {/* Risbe ne smemo obrezati, zato tu ni <Figure> s fiksnim razmerjem,
                ampak <picture> z merami iz manifesta: cela risba, brez obreza in
                brez premika postavitve ob nalaganju. */}
            <picture>
              <source
                type="image/avif"
                srcSet={shema.widths.map((w) => `${shema.base}-${w}.avif ${w}w`).join(", ")}
                sizes="(max-width: 1240px) 92vw, 1144px"
              />
              <img
                src={`${shema.base}-${shema.widths[shema.widths.length - 1]}.webp`}
                srcSet={shema.widths.map((w) => `${shema.base}-${w}.webp ${w}w`).join(", ")}
                sizes="(max-width: 1240px) 92vw, 1144px"
                width={shema.w}
                height={shema.h}
                alt={shema.alt}
                loading="lazy"
                decoding="async"
                className="mt-8 h-auto w-full rounded-[var(--radius-md)] bg-[var(--bg-muted)]"
              />
            </picture>
          </Container>
        </Section>
      )}

      {slike.length > 0 && (
        <Section className="!pt-0">
          <Container>
            <p className="sp-eyebrow">Potek del</p>
            <h2 className="mt-3">Kako je nastajalo</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {slike.map((f) => (
                <Figure
                  key={f.base}
                  foto={f}
                  alt={f.alt}
                  /* Razmerje po posamezni fotografiji: posnetki z gradbišča so
                     pokončni, načrt je ležeč. Enotno 4/3 bi pokončnim odrezalo
                     44 % višine. */
                  ratio={f.w >= f.h ? "4/3" : "3/4"}
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) calc(46vw - 20px), (max-width: 1240px) 31vw, 380px"
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
