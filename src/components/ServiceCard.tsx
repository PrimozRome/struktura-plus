import Link from "next/link";
import type { Service } from "@/content/types";
import { Figure } from "@/components/Figure";
import { heroFoto } from "@/content/images";

export function ServiceCard({ service, priority = false }: { service: Service; priority?: boolean }) {
  return (
    <article className="sp-card">
      <div className="sp-card__media">
        <Figure
          foto={heroFoto(service.slug)}
          alt={service.heroAlt}
          ratio="4/3"
          rounded={false}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="sp-eyebrow">{service.eyebrow}</p>
        <h3 className="!text-[24px]">
          <Link href={`/storitve/${service.slug}`} className="sp-card__link text-[var(--text)] no-underline hover:underline">
            {service.navLabel}
          </Link>
        </h3>
        <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">{service.cardText}</p>
        <p className="mt-1 text-[15px] font-semibold tabular-nums text-[var(--text)]">{service.cardPrice}</p>
        <span className="mt-auto pt-3 text-[15px] font-semibold text-[var(--link)]" aria-hidden>
          Več o storitvi →
        </span>
      </div>
    </article>
  );
}
