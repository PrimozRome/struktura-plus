import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/hvala"] },
      // AI crawlerji so namenoma dovoljeni — vsebina je pisana tako, da jo modeli
      // lahko citirajo (prvi stavek vsakega razdelka je odgovor, ne uvod).
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
