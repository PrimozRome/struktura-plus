import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL, business } from "@/content/business";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { businessSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} — ${business.tagline}`,
    /* Brez pripone z imenom podjetja: z njo je 26 od 37 naslovov preseglo 60
       znakov in Google jim je konec odrezal — brez nje je predolg samo eden.
       Ime podjetja Google tako ali tako izpiše ločeno, iz sheme WebSite. */
    template: "%s",
  },
  description: business.description,
  applicationName: business.name,
  authors: [{ name: business.name, url: SITE_URL }],
  icons: {
    icon: [
      // SVG ima prednost pri sodobnih brskalnikih, .ico ostane za starejše.
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  // Stran je samo svetla, zato ena vrednost — brez preklopa po nastavitvi OS.
  themeColor: "#FCF9F4",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* suppressHydrationWarning velja samo za atribute tega elementa, ne za
       otroke. Razširitve v brskalniku (snemalniki zaslona, blokatorji,
       prevajalniki, upravljalniki gesel) pripnejo svoje atribute na <html> in
       <body>, še preden React hidrira — strežniški izris jih seveda nima in
       React javi neujemanje. To ni napaka strani in se pri obiskovalcu brez
       razširitve ne zgodi; utišamo samo ta dve ravni, da resnična neujemanja
       ostanejo vidna. */
    <html lang="sl" suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {/* Pisave so samostojno gostene — brez zunanjega klica in brez dodatnega
            DNS/TLS rokovanja pred izrisom. React 19 te oznake dvigne v <head>. */}
        <link rel="preload" href="/fonts/lora-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/lora-latin-ext.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <a
          href="#vsebina"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-sm focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:outline focus:outline-2 focus:outline-[var(--ring)]"
        >
          Preskoči na vsebino
        </a>
        <Header />
        <main id="vsebina" tabIndex={-1}>{children}</main>
        <Footer />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
