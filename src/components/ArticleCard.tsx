import Link from "next/link";
import type { Article } from "@/content/types";
import { foto } from "@/content/images";
import { Figure } from "@/components/Figure";

/** Druga fotografija iz skupine, da se kartica članka ne ponavlja s hero sliko storitve. */
function fotoZaClanek(a: Article) {
  const skupina = a.fotoGroup ? foto[a.fotoGroup] : undefined;
  if (!skupina?.length) return undefined;
  return skupina[1] ?? skupina[0];
}

function Meta({ a }: { a: Article }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[var(--text-subtle)]">
      {a.topic && <span className="sp-tag sp-tag--outline">{a.topic}</span>}
      {a.readMinutes && <span>{a.readMinutes} min branja</span>}
      {a.cornerstone && <span className="font-semibold text-[var(--accent-text)]">Temeljni članek</span>}
    </p>
  );
}

/** Izpostavljena kartica s fotografijo — za pripete članke na vrhu. */
export function ArticleCardLarge({ a, priority = false }: { a: Article; priority?: boolean }) {
  const f = fotoZaClanek(a);
  return (
    <article className="sp-card">
      <div className="sp-card__media">
        <Figure
          foto={f}
          /* Alt opisuje fotografijo, ne članka: naslov članka stoji tik pod njo
             kot besedilo povezave, zato bi ga bralnik zaslona prebral dvakrat. */
          alt={f?.alt ?? ""}
          ratio="3/2"
          rounded={false}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Meta a={a} />
        <h3 className="!text-[21px] !leading-snug">
          <Link href={`/nasveti/${a.slug}`} className="sp-card__link text-[var(--text)] no-underline hover:underline">
            {a.title}
          </Link>
        </h3>
        <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">{a.excerpt}</p>
        <span className="mt-auto pt-2 text-[15px] font-semibold text-[var(--link)]" aria-hidden>
          Preberi →
        </span>
      </div>
    </article>
  );
}

/** Kompaktna kartica brez fotografije — za seznam vseh nasvetov. */
export function ArticleCardSmall({ a }: { a: Article }) {
  return (
    <article className="sp-card flex flex-col gap-2 p-5">
      <Meta a={a} />
      <h3 className="!text-[19px] !leading-snug">
        <Link href={`/nasveti/${a.slug}`} className="sp-card__link text-[var(--text)] no-underline hover:underline">
          {a.title}
        </Link>
      </h3>
      <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">{a.excerpt}</p>
    </article>
  );
}
