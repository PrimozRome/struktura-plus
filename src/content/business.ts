/** Edini vir resnice o podjetju. NAP zapis mora biti povsod identičen. */
export const SITE_URL = "https://strukturaplus.si";

export const business = {
  name: "Struktura Plus",
  legalName: "Struktura Plus",
  formerName: "Lignum Mont",
  tagline: "Lesene terase, ograje, nadstreški in fasade po meri",
  description:
    "Izdelujemo in montiramo lesene terase, ograje, nadstreške, fasade in vrtne objekte po meri. Svetovanje, izmera, izvedba in zaključni detajli po vsej Sloveniji.",
  /**
   * Registrski podatki. Potrebni so na pravnih podstraneh (splošni pogoji,
   * politika zasebnosti), zato so tu in ne raztreseni po besedilu.
   * ⚠️ Ob preimenovanju Lignum Mont → Struktura Plus preveri, ali se je
   * spremenil tudi vpis v Poslovnem registru (ime dejavnosti pri s.p.).
   */
  legalEntity: "Marko Pogorevc Kotnik s.p.",
  taxId: "71725474",
  companyId: "9169865000",
  email: "info@strukturaplus.si",
  phone: "+386 40 549 345",
  phoneHref: "tel:+38640549345",
  phoneDisplay: "040 549 345",
  address: {
    street: "Brdce 71",
    postalCode: "1431",
    city: "Dol pri Hrastniku",
    country: "SI",
    countryName: "Slovenija",
  },
  /** TODO: preveri koordinate objekta pred zagonom. */
  geo: { lat: 46.1389, lng: 15.0783 },
  /**
   * Območja izvedbe, kot jih stranke iščejo — zato so pokrajine in mesta
   * pomešani in se deloma prekrivajo (Celje leži v Savinjski, Maribor na
   * Štajerskem). To je namerno: iskalec piše "nadstrešek Celje" in ne
   * "nadstrešek Savinjska regija".
   *
   * `kind` loči pokrajino od mesta samo zaradi sheme — v JSON-LD gre pokrajina
   * kot AdministrativeArea, mesto pa kot City. Na strani se izrišeta enako.
   */
  areaServed: [
    { name: "Zasavje", kind: "regija" },
    { name: "Posavje", kind: "regija" },
    { name: "Štajerska", kind: "regija" },
    { name: "Savinjska regija", kind: "regija" },
    { name: "Dolenjska", kind: "regija" },
    { name: "Gorenjska", kind: "regija" },
    { name: "Ljubljana z okolico", kind: "mesto" },
    { name: "Celje", kind: "mesto" },
    { name: "Maribor", kind: "mesto" },
  ] as const,
  openingHours: "Po dogovoru",
  /** TODO: dopolni, ko bosta profila postavljena. */
  sameAs: [] as string[],
} as const;

/**
 * Datum zadnje posodobitve pravnih besedil (piškotki, zasebnost, splošni pogoji).
 * En vir za vse tri strani — ob vsaki vsebinski spremembi ga je treba dvigniti.
 */
export const legalUpdated = "2026-10-13";

/** "2026-09-22" → "22. september 2026" */
export function formatSlovenianDate(iso: string): string {
  const meseci = [
    "januar", "februar", "marec", "april", "maj", "junij",
    "julij", "avgust", "september", "oktober", "november", "december",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${meseci[m - 1]} ${y}`;
}

export const nav = [
  { href: "/storitve", label: "Storitve" },
  { href: "/projekti", label: "Projekti" },
  { href: "/nasveti", label: "Nasveti" },
  { href: "/cenik", label: "Cenik" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
