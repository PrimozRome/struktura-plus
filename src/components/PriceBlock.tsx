import Link from "next/link";
import type { PriceBlockData } from "@/content/types";

export function PriceBlock({ data, cta = "Pridobi natančno ponudbo" }: { data: PriceBlockData; cta?: string }) {
  return (
    <aside className="sp-price" aria-labelledby="okvirna-cena">
      <p id="okvirna-cena" className="sp-eyebrow">Okvirna cena</p>
      <p className="sp-price__range mt-2">{data.range}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {data.factors.map((f) => (
          <li key={f} className="relative pl-5 text-[15px] text-[var(--text-muted)]">
            <span aria-hidden className="absolute left-0 top-[0.62em] h-[2px] w-[10px] bg-[var(--accent)]" />
            {f}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[13px] text-[var(--text-subtle)]">{data.includes}</p>
      <Link href="/kontakt" className="sp-btn sp-btn--primary mt-6 w-full sm:w-auto">
        {cta}
      </Link>
    </aside>
  );
}
