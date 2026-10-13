import Link from "next/link";
import { services } from "@/content/services";
import { Container, Section } from "@/components/Container";

/**
 * Pravi 404: Next.js na tej strani vrne status 404, ne 200.
 * Stara stran je vračala 200 z angleškim besedilom — to je bil soft 404.
 */
export const metadata = {
  title: "Stran ne obstaja",
  description: "Iskane strani ni. Poglejte med storitvami ali nas pokličite.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section>
      <Container narrow>
        <p className="sp-eyebrow">Napaka 404</p>
        <h1 className="mt-3 text-[length:var(--text-display-lg)]">Te strani ni</h1>
        <p className="mt-6 max-w-[54ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
          Povezava je morda zastarela ali napačno zapisana. Spodaj so naše glavne storitve —
          verjetno iščete eno od njih.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {services.slice(0, 8).map((s) => (
            <li key={s.slug}>
              <Link href={`/storitve/${s.slug}`} className="sp-tag sp-tag--outline">
                {s.navLabel}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="sp-btn sp-btn--primary">Na domačo stran</Link>
          <Link href="/kontakt" className="sp-btn sp-btn--secondary">Kontakt</Link>
        </div>
      </Container>
    </Section>
  );
}
