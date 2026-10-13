import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/business";
import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { projects, PROJECTS_READY } from "@/content/projects";

/**
 * Sitemap se generira iz dejanskega seznama rut ob buildu — ne vzdržujemo ga ročno.
 * Stara stran je imela šest ročno vpisanih URL-jev, vsi z istim lastmod in vsi v
 * različici domene, ki se preusmeri.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/storitve`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/cenik`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/nasveti`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/o-nas`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/mnenja-strank`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/politika-zasebnosti`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/piskotki`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/splosni-pogoji`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/storitve/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s.tier === "full" ? 0.9 : 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/nasveti/${a.slug}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: "yearly",
    priority: a.cornerstone ? 0.8 : 0.6,
  }));

  // Testni projekti ne gredo v sitemap.
  const projectPages: MetadataRoute.Sitemap = PROJECTS_READY
    ? [
        { url: `${SITE_URL}/projekti`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
        ...projects.map((p) => ({
          url: `${SITE_URL}/projekti/${p.slug}`,
          lastModified: now,
          changeFrequency: "yearly" as const,
          priority: 0.5,
        })),
      ]
    : [];

  return [...staticPages, ...servicePages, ...articlePages, ...projectPages];
}
