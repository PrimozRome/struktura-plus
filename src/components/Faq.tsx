import type { FaqItem } from "@/content/types";

/** <details> namesto JavaScripta — brez hidracije, brez vpliva na INP. */
export function Faq({ items, title = "Pogosta vprašanja" }: { items: FaqItem[]; title?: string }) {
  return (
    <div>
      <h2 className="mb-6">{title}</h2>
      <div className="sp-faq">
        {items.map((item, i) => (
          <details key={item.q} className="sp-faq__item" open={i === 0}>
            <summary className="sp-faq__q">
              {item.q}
              <span aria-hidden className="sp-faq__sign" />
            </summary>
            <p className="sp-faq__a max-w-[68ch] pb-5 text-[var(--text-muted)]">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
