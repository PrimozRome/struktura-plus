import { articles, plannedArticles } from "@/content/articles";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { ArticleCardLarge, ArticleCardSmall } from "@/components/ArticleCard";

export const metadata = pageMeta({
  title: "Nasveti — les, dovoljenja, cene in vzdrževanje",
  description:
    "Praktični nasveti za lesene terase, ograje in nadstreške: katere vrste lesa izbrati, kdaj potrebujete dovoljenje, koliko stane in kako vzdrževati les.",
  path: "/nasveti",
});

const crumbs = [
  { name: "Domov", path: "/" },
  { name: "Nasveti", path: "/nasveti" },
];

export default function NasvetiPage() {
  // Pripeti članki gredo na vrh kot izpostavljene kartice, vsi ostali pod njih.
  // Temeljni članek je vedno prvi.
  const pinned = articles
    .filter((a) => a.pinned)
    .sort((a, b) => Number(Boolean(b.cornerstone)) - Number(Boolean(a.cornerstone)))
    .slice(0, 4);
  const rest = articles.filter((a) => !pinned.includes(a));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <Breadcrumbs items={crumbs} />
      <Section className="!pb-0 !pt-[var(--hero-y-top)]">
        <Container>
          <p className="sp-eyebrow">Nasveti</p>
          <h1 className="mt-3 max-w-[22ch] text-[length:var(--text-display-lg)]">
            Kar je dobro vedeti pred naročilom
          </h1>
          <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
            Vprašanja, ki nam jih stranke zastavljajo najpogosteje — o izbiri lesa, dovoljenjih,
            cenah in vzdrževanju. Odgovori so takšni, kot bi jih dali na ogledu.
          </p>
        </Container>
      </Section>

      {/* Izpostavljeno */}
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="!text-[24px]">Izpostavljeno</h2>
            <p className="text-[15px] text-[var(--text-subtle)]">
              {articles.length} {articles.length === 1 ? "članek" : articles.length === 2 ? "članka" : articles.length < 5 ? "članki" : "člankov"} skupaj
            </p>
          </div>
          <div
            className={
              pinned.length === 4
                ? "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                : "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            {pinned.map((a, i) => (
              <ArticleCardLarge key={a.slug} a={a} priority={i === 0} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Vsi ostali */}
      {rest.length > 0 && (
        <Section tone="subtle">
          <Container>
            <h2 className="!text-[24px]">Vsi nasveti</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <ArticleCardSmall key={a.slug} a={a} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* V pripravi */}
      {plannedArticles.length > 0 && (
        <Section className="!pt-0">
          <Container>
            <div className="border-t border-[var(--border)] pt-6">
              <p className="sp-eyebrow">V pripravi</p>
              <ul className="mt-3 flex flex-col gap-1 text-[15px] text-[var(--text-subtle)]">
                {plannedArticles.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
