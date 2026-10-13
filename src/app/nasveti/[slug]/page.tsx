import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { ArticleCardSmall } from "@/components/ArticleCard";
import { woods } from "@/content/woods";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/content/business";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";
import { Figure } from "@/components/Figure";
import { foto, fotoPoImenu } from "@/content/images";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMeta({
    title: a.metaTitle,
    description: a.metaDescription,
    path: `/nasveti/${a.slug}`,
    type: "article",
    publishedTime: a.datePublished,
    modifiedTime: a.dateModified,
  });
}

function WoodsTable() {
  return (
    // Kontejner članka je širok 58rem, zato tabela na namizju ni več v drsniku;
    // overflow-x ostane zaradi telefonov.
    <div className="my-10 overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-left text-[15px]">
        <caption className="sr-only">Primerjava vrst lesa za zunanjo uporabo</caption>
        <thead>
          <tr className="border-b-2 border-[var(--border-strong)]">
            {["Vrsta", "Gostota", "Razred trajnosti", "Življenjska doba", "Vzdrževanje", "Cena", "Za kaj"].map((h) => (
              <th key={h} scope="col" className="py-3 pr-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tabular-nums">
          {woods.map((w) => (
            <tr key={w.name} className="border-b border-[var(--border)] align-top">
              <th scope="row" className="py-4 pr-4 font-semibold text-[var(--text)]">{w.name}</th>
              <td className="py-4 pr-4 text-[var(--text-muted)]">{w.density}</td>
              <td className="py-4 pr-4 text-[var(--text-muted)]">{w.durability}</td>
              <td className="py-4 pr-4 text-[var(--text-muted)]">{w.life}</td>
              <td className="py-4 pr-4 text-[var(--text-muted)]">{w.maintenance}</td>
              <td className="py-4 pr-4 text-[var(--text-muted)]">{w.priceTier}</td>
              <td className="py-4 text-[var(--text-muted)]">{w.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function NasvetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const crumbs = [
    { name: "Domov", path: "/" },
    { name: "Nasveti", path: "/nasveti" },
    { name: a.title, path: `/nasveti/${a.slug}` },
  ];
  const cover = a.fotoGroup ? foto[a.fotoGroup]?.[0] : undefined;
  // Prikažemo največ tri: polje `related` je širše, ker poganja tudi obratno
  // povezavo s storitvenih strani, na članku pa bi šest kartic razvodenelo.
  const related = a.related
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .slice(0, 3);
  const sorodni = relatedArticles(a.slug);
  const avtorFoto = fotoPoImenu("o-nas", "o-nas-marko");

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: a.title,
            description: a.metaDescription,
            path: `/nasveti/${a.slug}`,
            datePublished: a.datePublished,
            dateModified: a.dateModified,
            image: cover ? `${SITE_URL}${cover.base}-1600.webp` : undefined,
          }),
          breadcrumbSchema(crumbs),
          ...(a.faq?.length ? [faqSchema(a.faq)] : []),
        ]}
      />

      <Breadcrumbs items={crumbs} />
      <Section className="!pb-0 !pt-[var(--hero-y-top)]">
        <Container width="article">
          {a.cornerstone && <p className="sp-eyebrow">Temeljni članek</p>}
          <h1 className="mt-3 text-[length:var(--text-display-lg)]">{a.title}</h1>
          <p className="mt-6 text-[18px] leading-relaxed text-[var(--text-muted)]">{a.excerpt}</p>
          {/* Temeljni članek namenoma nima vidnega datuma objave — v schemi je dateModified. */}
          {/* Podpis avtorja. Google pod "Kdo" pričakuje vidno avtorstvo s
              povezavo na ozadje avtorja — povezava v navigaciji ali nogi za to
              ne šteje, ker ne pove, kdo je besedilo napisal. */}
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[var(--text-subtle)]">
            <span>
              Napisal{" "}
              <Link href="/o-nas" className="font-medium text-[var(--link)]">
                Marko Pogorevc
              </Link>{", mizar in tesar"}
            </span>
            {!a.cornerstone && (
              <>
                <span aria-hidden>·</span>
                <span>
                  posodobljeno{" "}
                  <time dateTime={a.dateModified}>
                    {new Date(a.dateModified).toLocaleDateString("sl-SI", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                </span>
              </>
            )}
          </p>

          {cover && (
            <Figure
              foto={cover}
              alt={cover.alt}
              ratio="21/9"
              priority
              sizes="(max-width: 928px) 100vw, 928px"
              className="mt-10"
            />
          )}
        </Container>
      </Section>

      {/* Manjši zgornji odmik: naslovna fotografija je vizualno že del tega
          sklopa, zato med njo in prvim naslovom ni potrebna cela višina razdelka. */}
      <Section className="!pt-[var(--space-12)]">
        <Container width="article">
          <div className="sp-prose sp-prose--wide">
            {a.sections.map((s) => (
              <section key={s.h2}>
                <h2>{s.h2}</h2>
                {s.body?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
                {a.slug === "vrste-lesa-za-zunanjo-uporabo" && s.h2 === "Primerjalna tabela" && <WoodsTable />}
              </section>
            ))}

          </div>
        </Container>
      </Section>

      {/* Avtorski blok: kdo je besedilo napisal in zakaj to lahko ve. Stoji na
          dnu članka, kjer ga bralec doseže, ko je vsebino že prebral. */}
      <Section className="!pt-0">
        <Container width="article">
          <div className="sp-card sp-card--static flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6">
            {avtorFoto && (
              <img
                src={`${avtorFoto.base}-400.webp`}
                alt=""
                width={96}
                height={96}
                loading="lazy"
                className="h-24 w-24 shrink-0 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-[var(--text)]">Marko Pogorevc</p>
              <p className="mt-1 text-[15px] leading-relaxed text-[var(--text-muted)]">
                Mizar in tesar iz Zasavja. Les je začel obdelovati pri očetu, delal kot glavni
                monter pri montaži lesenih skeletnih hiš, danes pa pod imenom Struktura Plus
                izdeluje terase, ograje, nadstreške in fasade po meri.{" "}
                <Link href="/o-nas">Več o meni →</Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sorodni nasveti: članki, ki se s tem ujemajo v vsaj eni storitvi.
          Izpeljano iz istega polja `related`, zato brez vzporednega seznama. */}
      {sorodni.length > 0 && (
        <Section className="!pt-0">
          <Container width="article">
            <h2 className="!text-[24px]">Sorodni nasveti</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {sorodni.map((x) => (
                <ArticleCardSmall key={x.slug} a={x} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {related.length > 0 && (
        <Section className="!pt-0">
          <Container width="article">
            <h2 className="!text-[24px]">Povezane storitve</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {a.faq?.length ? (
        <Section tone="subtle">
          <Container width="article">
            <Faq items={a.faq} />
          </Container>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
