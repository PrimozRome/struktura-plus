import type { Foto } from "@/content/images";
import { clsx } from "@/lib/clsx";

const ratios: Record<string, string> = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "2/3": "aspect-[2/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-[16/9]",
  "21/9": "aspect-[21/9]",
  "1/1": "aspect-square",
};

/**
 * Slika v fiksnem razmerju stranic.
 *
 * Namerno brez next/image: ta doda odjemalski JS in med gradnjo optimizira
 * sliko znova. Različice so že pripravljene v public/slike (glej
 * scripts/slike.py), zato je dovolj navaden <picture> z AVIF in WebP.
 * Razmerje okvirja je fiksno, zato slika ne premakne postavitve (CLS = 0),
 * tudi če je izvirnik drugačnih proporcev — obreže ga object-fit: cover.
 *
 * Brez `foto` se izriše nevtralen lesen blok istih mer, da je stran
 * uporabna tudi tam, kjer fotografije še ni.
 */
export function Figure({
  foto,
  alt,
  ratio = "4/3",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
  className,
  rounded = true,
}: {
  foto?: Foto;
  alt: string;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: boolean;
}) {
  const box = clsx(
    "relative w-full max-w-full overflow-hidden bg-[var(--bg-muted)]",
    ratios[ratio],
    rounded && "rounded-[var(--radius-md)]",
    className,
  );

  if (!foto) {
    return (
      <div className={box}>
        <div
          role="img"
          aria-label={alt}
          className="h-full w-full bg-[linear-gradient(135deg,var(--les-400),var(--les-700))]"
        />
      </div>
    );
  }

  const srcset = (ext: "avif" | "webp") =>
    foto.widths.map((w) => `${foto.base}-${w}.${ext} ${w}w`).join(", ");
  const largest = foto.widths[foto.widths.length - 1];

  return (
    <div className={box}>
      <picture>
        <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
        <img
          src={`${foto.base}-${largest}.webp`}
          srcSet={srcset("webp")}
          sizes={sizes}
          width={foto.w}
          height={foto.h}
          alt={alt || foto.alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : undefined}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}
