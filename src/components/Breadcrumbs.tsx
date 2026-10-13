import Link from "next/link";

/**
 * Drobtinice kot samostojen trak pod glavo, ne kot prvi element junaka.
 *
 * Prej so stale v istem stolpcu takoj nad nadnaslovom: nad njimi je bil ves
 * zgornji odmik razdelka (do 128 px), pod njimi pa 24 px — lebdele so v
 * praznini in hkrati stiskale naslovni sklop. Zdaj so pripete pod glavo v
 * lasten ozek trak s tanko črto. Orientacija je tam, kjer jo bralec išče,
 * naslovni sklop pa se začne čist: nadnaslov, H1, uvod.
 */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Drobtinice" className="border-b border-[var(--border)] bg-[var(--bg-bar)]">
      <div className="mx-auto w-full max-w-[var(--container)] px-[var(--gutter)]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-[11px] text-[13px] text-[var(--text-subtle)]">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="font-medium text-[var(--text-muted)]">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-inherit no-underline hover:text-[var(--link)] hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
                {!last && (
                  <span aria-hidden className="text-[var(--border-strong)]">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
