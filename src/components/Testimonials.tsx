import { clsx } from "@/lib/clsx";
import { podpis, mnenjeDatum, type Testimonial } from "@/content/testimonials";

/**
 * Kartica mnenja. Ista na pristajalni strani, na storitvenih straneh in na
 * zbirni strani — mnenje naj povsod izgleda enako, sicer deluje, kot da so
 * nekatera bolj "uradna" od drugih.
 *
 * Kartica nima enotnega notranjega odmika: telo in noga imata vsak svojega,
 * da gre ločnica med njima od roba do roba. Barvno ploskev noge do zaobljenih
 * vogalov poreže .sp-card, ki ima overflow: hidden.
 *
 * flex-1 na telesu in mt-auto na nogi: kartice v vrstici so enako visoke,
 * zato bi se pri krajšem mnenju noga dvignila in pod njo bi zijala praznina.
 */
export function TestimonialCard({ t }: { t: Testimonial }) {
  const datum = mnenjeDatum(t.date);
  return (
    <figure className="sp-card sp-card--static flex flex-col">
      <blockquote className="flex flex-1 gap-4 px-6 pb-6 pt-5 text-[17px] leading-relaxed text-[var(--text-reading)]">
        <span aria-hidden className="sp-narekovaj">“</span>
        <span>{t.text}</span>
      </blockquote>

      <figcaption className="mt-auto border-t border-[var(--border)] bg-[var(--surface-sunken)] px-6 py-4">
        {/* Ime in datum v isti vrstici, datum na desni rob. items-baseline, da
            manjši datum sedi na isti črti kot ime in ne na sredini vrstice. */}
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-semibold text-[var(--text)]">{podpis(t)}</span>
          {datum && (
            <time dateTime={t.date} className="shrink-0 text-[13px] text-[var(--text-subtle)]">
              {datum}
            </time>
          )}
        </div>
        <span className="mt-0.5 block text-[15px] text-[var(--text-muted)]">
          {t.work}
          {t.place ? `, ${t.place}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialGrid({
  items,
  columns = 2,
  className,
}: {
  items: Testimonial[];
  columns?: 1 | 2 | 3;
  className?: string;
}) {
  const cols = {
    1: "",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
  } as const;
  return (
    <div className={clsx("grid gap-6", cols[columns], className)}>
      {items.map((t) => (
        <TestimonialCard key={t.id} t={t} />
      ))}
    </div>
  );
}
