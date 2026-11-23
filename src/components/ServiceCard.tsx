import Link from "next/link";
import type { Service } from "@/content/types";
import { Figure } from "@/components/Figure";
import { heroFoto } from "@/content/images";

/** Privzeto: mreža treh stolpcev v polnem vsebniku (--container), izrisano ~365 px. */
export const SERVICE_CARD_SIZES = "(max-width: 639px) 92vw, (max-width: 1023px) calc(46vw - 20px), (max-width: 1240px) 30vw, 352px";

/** Mreža treh stolpcev v stolpcu članka (--container-article), izrisano ~224 px. */
export const SERVICE_CARD_SIZES_OZKO = "(max-width: 639px) 92vw, (max-width: 1023px) 350px, 230px";

export function ServiceCard({
  service,
  priority = false,
  sizes = SERVICE_CARD_SIZES,
}: {
  service: Service;
  priority?: boolean;
  /** Prepiši, kadar kartica stoji v ožjem stolpcu od polnega vsebnika. */
  sizes?: string;
}) {
  return (
    <article className="sp-card">
      <div className="sp-card__media">
        <Figure
          foto={heroFoto(service.slug)}
          alt={service.heroAlt}
          ratio="4/3"
          rounded={false}
          priority={priority}
          sizes={sizes}
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
