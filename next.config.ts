import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Server Action privzeto sprejme le 1 MB telesa — ena sama fotografija s
  // telefona je večja. Meja je nekoliko nad tisto, ki jo obljublja obrazec
  // (MAX_MB = 4), ker gre skozi tudi ostalo besedilo in ovoj zahtevka, in
  // nekoliko pod Vercelovo mejo 4,5 MB, da se pri rahlem presežku prej oglasi
  // naša preverba kot Vercelov 413. Glej src/lib/priloge.ts.
  experimental: { serverActions: { bodySizeLimit: "4.4mb" } },
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 828, 1080, 1280, 1600, 1920],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        // Logotip, fotografije in pisave se ne spreminjajo — ime datoteke nosi
        // širino, zato nova različica pomeni novo ime. Brez tega bi brskalnik
        // ob vsakem obisku znova preverjal vseh 550 slik.
        source: "/:path(brand|slike|fonts)/:rest*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  // www -> non-www se uredi na ravni gostovanja (Vercel: primarna domena
  // strukturaplus.si, www.strukturaplus.si nastavljena kot redirect).
  // Aplikacijski redirect tega ne more narediti zanesljivo.
};

export default nextConfig;
