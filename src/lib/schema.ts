import { SITE_URL, business } from "@/content/business";

export const BUSINESS_ID = `${SITE_URL}/#business`;
/** Stalni id avtorja. Ista oseba kot `founder` v shemi podjetja — z @id se
 *  zapisa povežeta in Google ju razume kot eno entiteto, ne dve. */
export const AUTHOR_ID = `${SITE_URL}/o-nas#marko`;

/** Osrednji zapis o podjetju. Vse ostale sheme se sklicujejo nanj prek @id. */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": BUSINESS_ID,
    name: business.name,
    alternateName: business.formerName,
    description: business.description,
    url: SITE_URL,
    telephone: business.phone,
    email: business.email,
    image: `${SITE_URL}/brand/logo-stacked.png`,
    logo: `${SITE_URL}/brand/logo-horizontal.png`,
    priceRange: "€€",
    /**
     * Nosilec dejavnosti kot samostojna entiteta. Pri enočlanskem s.p. je človek
     * za obrtjo najmočnejši signal izkušenosti, ki ga stran premore — stran
     * /o-nas to podpre z besedilom, shema pa poveže ime z dejavnostjo.
     */
    founder: {
      "@type": "Person",
      "@id": AUTHOR_ID,
      url: `${SITE_URL}/o-nas`,
      name: "Marko Pogorevc",
      jobTitle: "Mizar in tesar",
      worksFor: { "@id": BUSINESS_ID },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: business.areaServed.map((a) => ({
      "@type": a.kind === "mesto" ? "City" : "AdministrativeArea",
      name: a.name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      description: business.openingHours,
    },
    ...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    inLanguage: "sl-SI",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  offers?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    serviceType: input.serviceType ?? input.name,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: business.address.countryName },
    ...(input.offers?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: input.name,
            itemListElement: input.offers.map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o },
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  /** Absolutni naslov naslovne fotografije članka, če jo ima. */
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: `${SITE_URL}${input.path}`,
    inLanguage: "sl-SI",
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    /* Avtor je oseba in ne podjetje: Google pod "Kdo" pričakuje človeka z
       ozadjem, ki ga je mogoče preveriti — tu prek @id, ki kaže na isti zapis
       kot `founder` v shemi podjetja, in prek url na stran O nas. */
    author: { "@id": AUTHOR_ID },
    publisher: { "@id": BUSINESS_ID },
    ...(input.image ? { image: input.image } : {}),
  };
}
