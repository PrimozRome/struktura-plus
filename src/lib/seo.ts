import type { Metadata } from "next";
import { SITE_URL, business } from "@/content/business";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Vsaka ruta dobi SVOJ title, description in canonical.
 * Stara stran je imela canonical trdo zakodiran na domačo stran in zato ni
 * indeksirala nič razen nje — to je najpomembnejši popravek na celi strani.
 */
export function pageMeta({
  title,
  description,
  path,
  ogImage = "/og-image.png",
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: business.name,
      locale: "sl_SI",
      images: [{ url: ogImage, width: 1200, height: 630, alt: business.name }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
