export type FaqItem = { q: string; a: string };

export type ServiceSection = {
  h2: string;
  body?: string[];
  list?: string[];
};

export type PriceBlockData = {
  /** Vidni razpon, npr. "90–140 €/m²". */
  range: string;
  /** Kaj razpon vključuje. */
  includes: string;
  /** Tri postavke, ki na ceno najbolj vplivajo. */
  factors: string[];
};

export type Service = {
  slug: string;
  /** Kratka oznaka za meni in nogo. */
  navLabel: string;
  /** Vrstni red na razdelilni strani in v sitemapu. */
  order: number;
  /** "full" = polna globina od zagona, "basic" = osnovna, poglobi se kasneje. */
  tier: "full" | "basic";
  /** Nadnaslov nad H1. */
  eyebrow: string;
  /** Meta title brez pripone imena podjetja. */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Uvodni odstavek — prvi stavek je odgovor, ne uvod. */
  lead: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Kratek povzetek za kartico na razdelilni strani. */
  cardText: string;
  /** Prikaz cene na kartici. */
  cardPrice: string;
  sections: ServiceSection[];
  /** Privzeto se storitev prikaže na /cenik. `false` jo izpusti. */
  vCeniku?: boolean;
  price: PriceBlockData | null;
  faq: FaqItem[];
  /** Podvrste za hasOfferCatalog v Service schemi. */
  offers: string[];
  /** Vrste lesa, ki jih ta storitev uporablja — kratek razdelek s povezavo na članek. */
  woods?: string[];
  related: string[];
  /**
   * Fotografije iz drugih skupin, ki naj se pokažejo tudi v tej galeriji.
   * Sklic namesto kopije: ista datoteka se ne podvaja na disku.
   */
  dodatneFoto?: { skupina: string; ime: string }[];
  heroAlt: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Kraj, material in leto so obvezni — vir dolgega repa in lokalne vidnosti. */
  place: string;
  material: string;
  year: number;
  service: string;
  summary: string;
  body: string[];
  /** Obseg del po postavkah — izpiše se kot seznam pod besedilom. */
  scope?: string[];
  /** Ime skupine fotografij v images.ts; hkrati vrstni red galerije. */
  fotoSkupina?: string;
  /** Ime načrta ali sheme znotraj `fotoSkupina`. Izriše se neobrezana, čez celotno širino. */
  shema?: string;
  /**
   * Galerija po meri: določa vrstni red in lahko sega v druge skupine, kadar
   * je fotografija že na strani in je ne želimo podvojiti na disku.
   * Brez nje velja vrstni red skupine `fotoSkupina`.
   */
  galerija?: { skupina: string; ime: string }[];
  /** Naslovnica projekta. Lahko kaže v drugo skupino, da se datoteka ne podvaja. */
  naslovnica?: { skupina: string; ime: string };
  imageAlt: string;
  placeholder: boolean;
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  /** Temeljni članek je pripet na vrh in nima vidnega datuma. */
  cornerstone?: boolean;
  /** Pripet na vrh strani Nasveti med izpostavljene kartice. */
  pinned?: boolean;
  /** Oznaka za hitro razvrščanje na seznamu: Material, Dovoljenja, Cene, Vzdrževanje. */
  topic?: string;
  /** Okvirni čas branja v minutah. */
  readMinutes?: number;
  /** Mapa v public/slike, iz katere vzamemo sliko za kartico. */
  fotoGroup?: string;
  datePublished: string;
  dateModified: string;
  targets: string[];
  sections: ServiceSection[];
  faq?: FaqItem[];
  related: string[];
  placeholder?: boolean;
};
