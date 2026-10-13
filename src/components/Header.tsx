import Link from "next/link";
import { business, nav } from "@/content/business";
import { Container } from "@/components/Container";

/**
 * Brez JavaScripta: mobilni meni je <details>, zato ne nosi hidracijskega
 * stroška in ne vpliva na INP.
 */
export function Header() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-[var(--z-header)] border-b border-[var(--border)] bg-[var(--surface)]">
      <Container className="flex items-center justify-between gap-6 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${business.name} — domov`}>
          {/* Logotip je vektorski: ena datoteka za vse velikosti in vse
              gostote zaslona, ostra povsod. Fiksna width/height
              preprečita premik postavitve (CLS). Glava je vedno svetla, zato
              inverzne različice tu ne rabimo. */}
          <img
            src="/brand/logo.svg"
            alt={`${business.name} logotip`}
            width={451}
            height={100}
            fetchPriority="high"
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] font-medium text-[var(--text)] no-underline hover:text-[var(--link)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden text-[15px] font-semibold tabular-nums text-[var(--text)] no-underline sm:inline"
          >
            {business.phoneDisplay}
          </a>
          <Link href="/kontakt" className="sp-btn sp-btn--primary hidden min-h-[40px] px-5 sm:inline-flex">
            Ponudba
          </Link>

          <details className="group relative lg:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)]"
              aria-label="Meni"
            >
              <span aria-hidden className="relative block h-[2px] w-5 bg-[var(--text)] before:absolute before:-top-[6px] before:block before:h-[2px] before:w-5 before:bg-[var(--text)] before:content-[''] after:absolute after:top-[6px] after:block after:h-[2px] after:w-5 after:bg-[var(--text)] after:content-['']" />
            </summary>
            <div className="absolute right-0 top-[calc(100%+12px)] w-[min(78vw,280px)] rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow-md)]">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-[var(--radius-sm)] px-3 py-3 text-[15px] font-medium text-[var(--text)] no-underline hover:bg-[var(--bg-subtle)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-1 border-t border-[var(--border)] pt-2">
                  <a
                    href={business.phoneHref}
                    className="block rounded-[var(--radius-sm)] px-3 py-3 text-[15px] font-semibold tabular-nums text-[var(--text)] no-underline"
                  >
                    {business.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
