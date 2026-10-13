import { clsx } from "@/lib/clsx";

export function Container({
  children,
  narrow = false,
  width,
  className,
}: {
  children: React.ReactNode;
  /** Ozki stolpec (46rem). Ohranjeno zaradi obstoječih klicev. */
  narrow?: boolean;
  /** "article" (58rem) je vmesna širina: besedilo ostane ozko, tabele dobijo prostor. */
  width?: "site" | "article" | "narrow";
  className?: string;
}) {
  const key = width ?? (narrow ? "narrow" : "site");
  const widths = {
    site: "max-w-[var(--container)]",
    article: "max-w-[var(--container-article)]",
    narrow: "max-w-[var(--container-narrow)]",
  } as const;

  return (
    <div className={clsx("mx-auto w-full px-[var(--gutter)]", widths[key], className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "base",
  className,
  id,
}: {
  children: React.ReactNode;
  tone?: "base" | "subtle" | "inverse";
  className?: string;
  id?: string;
}) {
  const tones = {
    base: "bg-[var(--bg)] text-[var(--text)]",
    subtle: "bg-[var(--bg-subtle)] text-[var(--text)]",
    inverse: "bg-[var(--bg-inverse)] text-[var(--text-inverse)]",
  } as const;
  return (
    <section id={id} className={clsx("py-[var(--section-y)]", tones[tone], className)}>
      {children}
    </section>
  );
}
