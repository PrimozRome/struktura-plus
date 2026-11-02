import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Figure } from "@/components/Figure";
import { heroFoto, galerija } from "@/content/images";
import { testimonialsFor } from "@/content/testimonials";
import { PriceBlock } from "@/components/PriceBlock";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";
import { ArticleCardSmall } from "@/components/ArticleCard";
import { articlesForService } from "@/content/articles";
import { TestimonialGrid } from "@/components/Testimonials";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/storitve/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/storitve/${service.slug}`;
  const crumbs = [
    { name: "Domov", path: "/" },
    { name: "Storitve", path: "/storitve" },
    { name: service.navLabel, path },
  ];
  const slike = galerija(service.slug);
  const mnenja = testimonialsFor(service.slug);
  const nasveti = articlesForService(service.slug);
  const related = service.related
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.h1,
            description: service.metaDescription,
            path,
            serviceType: service.primaryKeyword,
            offers: service.offers,
          }),
          faqSchema(service.faq),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero */}
      <Breadcrumbs items={crumbs} />
      <Section className="!pb-0 !pt-[var(--hero-y-top)]">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="sp-eyebrow">{service.eyebrow}</p>
              <h1 className="mt-3 text-[length:var(--text-display-lg)]">{service.h1}</h1>
              <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
                {service.lead}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/kontakt" className="sp-btn sp-btn--primary">Pridobi ponudbo</Link>
                <Link href="/projekti" className="sp-btn sp-btn--secondary">Poglej projekte</Link>
              </div>
            </div>
            <Figure
              foto={heroFoto(service.slug)}
              alt={service.heroAlt}
              ratio="4/3"
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </Container>
      </Section>

      {/* Vsebina + cena */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
            <div className="sp-prose">
              {service.sections.map((section) => (
                <section key={section.h2}>
                  <h2>{section.h2}</h2>
                  {section.body?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {service.woods?.length ? (
                <section>
                  <h2>Katere vrste lesa uporabljamo</h2>
                  <p>
                    Pri tej storitvi najpogosteje uporabljamo{" "}
                    {service.woods.map((w) => w.toLowerCase()).join(", ")}. Gostoto, razred trajnosti
                    in pričakovano življenjsko dobo vseh materialov primerjamo v{" "}
                    <Link href="/nasveti/vrste-lesa-za-zunanjo-uporabo">članku o vrstah lesa</Link>.
                  </p>
                </section>
              ) : null}
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              {service.price ? (
                <PriceBlock data={service.price} />
              ) : (
                <aside className="sp-price">
                  <p className="sp-eyebrow">Cena</p>
                  <p className="mt-2 text-[18px] font-semibold text-[var(--text)]">Po ogledu</p>
                  <p className="mt-3 text-[15px] text-[var(--text-muted)]">
                    Pri tej storitvi se cene razlikujejo preveč, da bi bil razpon pošten. Po ogledu
                    pripravimo ponudbo z razdelanimi postavkami.
                  </p>
                  <Link href="/kontakt" className="sp-btn sp-btn--primary mt-6 w-full sm:w-auto">
                    Naroči ogled
                  </Link>
                </aside>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {slike.length > 0 && (
        <Section className="!pt-0">
          <Container>
            <p className="sp-eyebrow">Izvedbe</p>
            <h2 className="mt-3">{service.navLabel} — naše izvedbe</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {slike.map((f) => (
                <Figure
                  key={f.base}
                  foto={f}
                  alt={f.alt}
                  ratio="4/3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ))}
            </div>
            <p className="mt-6 text-[15px] text-[var(--text-muted)]">
              Fotografije so z izvedenih projektov. Več jih je zbranih na strani{" "}
              <Link href="/projekti">Projekti</Link>.
            </p>
          </Container>
        </Section>
      )}

      {/* Mnenja strank za to storitev. Stojijo pred pogostimi vprašanji: kdor
          je prebral opis in ceno, se odloča, in takrat je dokaz od stranke
          vreden več kot še ena razlaga z naše strani. */}
      {mnenja.length > 0 && (
        <Section className="!pt-0">
          <Container>
            <p className="sp-eyebrow">Mnenja</p>
            <h2 className="mt-3">{service.navLabel} — kaj pravijo stranke</h2>
            <TestimonialGrid
              items={mnenja}
              columns={mnenja.length > 2 ? 3 : 2}
              className="mt-8"
            />
            <p className="mt-6 text-[15px] text-[var(--text-muted)]">
              <Link href="/mnenja-strank">Vsa mnenja strank</Link>
            </p>
          </Container>
        </Section>
      )}

      <Section tone="subtle">
        <Container narrow>
          <Faq items={service.faq} />
        </Container>
      </Section>

      {/* Nasveti, ki zadevajo prav to storitev. Seznam je izpeljan iz polja
          `related` v člankih, zato se ne more raziti — nov članek se tu pojavi
          sam. Brez tega bloka so članki prejemali eno samo notranjo povezavo,
          iz vozlišča /nasveti, in jim iskalnik ni imel iz česa določiti teme. */}
      {nasveti.length > 0 && (
        <Section>
          <Container>
            <h2 className="mb-8">Nasveti o tem</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nasveti.map((a) => (
                <ArticleCardSmall key={a.slug} a={a} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {related.length > 0 && (
        <Section tone="subtle">
          <Container>
            <h2 className="mb-8">Sorodne storitve</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
