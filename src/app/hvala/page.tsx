import Link from "next/link";
import { business } from "@/content/business";
import { pageMeta } from "@/lib/seo";
import { Container, Section } from "@/components/Container";

/**
 * Stran za zahvalo je pogoj za merjenje konverzij v GA4 in Google Ads.
 * Zato je noindex — ne sme se pojaviti v rezultatih iskanja.
 */
export const metadata = pageMeta({
  title: "Hvala za povpraševanje",
  description: "Povpraševanje smo prejeli. Odgovorimo v enem do dveh delovnih dneh.",
  path: "/hvala",
  noindex: true,
});

export default function HvalaPage() {
  return (
    <Section>
      <Container narrow className="text-center">
        <p className="sp-eyebrow">Povpraševanje oddano</p>
        <h1 className="mt-3 text-[length:var(--text-display-lg)]">Hvala, sporočilo smo prejeli</h1>
        <p className="mx-auto mt-6 max-w-[54ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
          Odgovorimo v enem do dveh delovnih dneh. Če se vam mudi ali želite ogled uskladiti takoj,
          pokličite — to je najhitrejša pot.
        </p>
        <a
          href={business.phoneHref}
          className="mt-6 inline-block font-[family-name:var(--font-display)] text-[28px] font-semibold tabular-nums text-[var(--text)] no-underline"
        >
          {business.phoneDisplay}
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/projekti" className="sp-btn sp-btn--primary">Poglej projekte</Link>
          <Link href="/nasveti" className="sp-btn sp-btn--secondary">Preberi nasvete</Link>
        </div>
      </Container>
    </Section>
  );
}
