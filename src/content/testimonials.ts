/**
 * MNENJA STRANK
 *
 * Vseh štirinajst mnenj je resničnih. Besedila so prevzeta tako, kot so jih
 * napisale stranke; popravljene so tipkarske in slovnične napake, vsebina in
 * ton pa ostajata njuna. Seznam popravkov je v zgodovini projekta.
 *
 * ⚠️ Review / AggregateRating JSON-LD NI dodan in ga tudi ne bomo dodali.
 * Razlog ni več pristnost mnenj, ampak Googlovo pravilo o samopostrežnih
 * ocenah: "If the entity that's being reviewed controls the reviews about
 * itself, their pages that use LocalBusiness or any other type of Organization
 * structured data are ineligible for star review feature." Mnenja o sebi na
 * lastni strani torej zvezdic v rezultatih ne morejo dobiti, ne glede na to,
 * kako jih označimo. Zvezdice pridejo z Google Business Profile, kjer ocene
 * zbira Google in ne mi. AggregateRating bi bil poleg tega izmišljen, ker ta
 * mnenja nimajo številčnih ocen.
 */

export type Testimonial = {
  /**
   * Obstojna identiteta vnosa. Ključ v Reactu mora biti neodvisen od vsebine:
   * dve stranki se lahko pišeta enako in imata enako izvedbo.
   */
  id: string;
  /**
   * Brez imena, kadar ga stranka ob mnenju ni pustila. Mnenje je še vedno
   * resnično, zato ga objavimo — samo podpisano je z nevtralno oznako.
   * Izmišljanje imena bi bilo isto kot izmišljeno mnenje.
   */
  name?: string;
  /** Ime še pridobivamo — vpiši ga, ko ga dobiš, in odstrani to zastavico. */
  nameToBeConfirmed?: boolean;
  /** Kaj je bilo izvedeno — daje mnenju težo in pokriva storitev. */
  work: string;
  /** Slug storitve, na katere strani se mnenje prikaže. */
  service?: string;
  /** Datum mnenja v zapisu ISO. */
  date?: string;
  place?: string;
  text: string;
  /** Izbrano za pristajalno stran. */
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "rina-k",
    name: "Rina K.",
    work: "Dve leseni terasi",
    service: "lesene-terase",
    date: "2026-08-10",
    featured: true,
    text:
      "Delo je bilo opravljeno profesionalno. Poleg tega je bil Marko prijazen in se je trudil, da bi delo opravil najbolje, kar je bilo v njegovi moči, ter se je držal rokov. Zelo ga priporočamo.",
  },
  {
    id: "matjaz-k",
    name: "Matjaž K.",
    work: "Obnova terase",
    service: "lesene-terase",
    date: "2026-05-27",
    featured: true,
    text:
      "Ogled obstoječega stanja, svetovanje, ponudba, dogovor o izvedbi — vse je potekalo kot namazano. Zelo zadovoljen!",
  },
  {
    id: "miran-z",
    name: "Miran Z.",
    work: "Izdelava lesene terase iz sibirskega macesna",
    service: "lesene-terase",
    date: "2026-04-23",
    text: "Kakovost. Zelo priporočamo.",
  },
  {
    id: "marica-b",
    name: "Marica B.",
    work: "Pokrivanje s pločevinasto kritino",
    service: "krovstvo-kleparstvo",
    date: "2026-04-15",
    featured: true,
    text:
      "Delo opravljeno v dogovorjenem roku, zelo kvalitetno in estetsko. Zelo zadovoljna. Priporočam!",
  },
  {
    id: "wpc-ograja-2026",
    nameToBeConfirmed: true,
    work: "WPC ograja — polna deska 100 × 12 mm, odtenek Oak Wood",
    service: "balkonske-ograje",
    date: "2026-03-01",
    text:
      "Monter Marko je danes zaključil projekt in moram res pohvaliti njegovo strokovnost, ažurnost in prijaznost. Smo zelo zadovoljni.",
  },
  {
    id: "andrej-s",
    name: "Andrej S.",
    work: "Izdelava stropa z OSB ploščami",
    service: "leseni-stropi-opazi",
    date: "2026-02-07",
    text: "Delo opravljeno strokovno in v dogovorjenem roku. Nič me ni zmotilo.",
  },
  {
    id: "rok-l",
    name: "Rok L.",
    work: "WPC terasa",
    service: "wpc-terase",
    date: "2025-10-13",
    text:
      "Delo je bilo opravljeno tako, kot smo se dogovorili. Hitro in kakovostno. Zelo zadovoljni.",
  },
  {
    id: "primoz-rome-hiska",
    name: "Primož R.",
    work: "Lesena vrtna hiška za savno",
    service: "vrtne-lope-ute-hiske",
    date: "2026-09-01",
    featured: true,
    text:
      "Marko mi je pri projektu pomagal že pri pripravi in optimizaciji načrta lesene hiške. Izvedba je šla po maslu in končni izdelek je res super. Profesionalno izvedeno od temeljev do strehe.",
  },
  {
    id: "primoz-rome-fasada",
    name: "Primož R.",
    work: "Macesnova fasada na garažnem nadstrešku",
    service: "lesene-fasade",
    date: "2026-07-01",
    text:
      "Zelo sem zadovoljen z rezultatom macesnove fasade na garaži. Marko je vse končal v roku, izvedba je tip top, brez napak. Močno priporočam.",
  },
  {
    id: "janez-s",
    name: "Janez S.",
    work: "Demontaža steklene konstrukcije in izdelava strehe",
    service: "krovstvo-kleparstvo",
    date: "2024-11-28",
    text: "Odlično svetovanje in izvedba.",
  },
  {
    id: "david-l",
    name: "David L.",
    work: "Podaljšanje terase na atriju",
    service: "lesene-terase",
    date: "2024-11-26",
    featured: true,
    text:
      "Marko je bil zelo korekten in profesionalen — tako, kot smo se zmenili, je bilo tudi izvedeno. Delo je opravil hitro in zelo dobro. Zelo sva zadovoljna. Priporočava.",
  },
  {
    id: "jurij-c",
    name: "Jurij Č.",
    work: "Obnova terase z WPC deskami",
    service: "wpc-terase",
    date: "2024-11-13",
    featured: true,
    text:
      "Zaradi zahtevnega izziva in specifičnega objekta vse pohvale izvajalcu. Vrhunsko, strokovno, hitro, natančno. Rezultat je preprosto čudovit! Priporočam.",
  },
  {
    id: "leon-f",
    name: "Leon F.",
    work: "Menjava polikarbonatne kritine po toči",
    service: "krovstvo-kleparstvo",
    date: "2024-09-08",
    text:
      "Izvedeno je bilo tako, kot smo se dogovorili. Deležen sem bil tudi svetovanja o izvedbenih možnostih.",
  },
  {
    id: "jan-b",
    name: "Jan B.",
    work: "Polaganje terase iz ipeja, 60 m²",
    service: "lesene-terase",
    date: "2024-06-29",
    text:
      "Narejeno kvalitetno in v dogovorjenem času. Vse zelo korektno in z izvedbo smo zadovoljni.",
  },
];

/** Najnovejša najprej — za zbirno stran. */
export const testimonialsByDate = [...testimonials].sort((a, b) =>
  (b.date ?? "").localeCompare(a.date ?? ""),
);

/** Izbor za pristajalno stran: šest mnenj, ki pokrijejo različne storitve. */
export const featuredTestimonials = testimonialsByDate.filter((t) => t.featured);

/** Mnenja, ki pripadajo posamezni storitvi. */
export function testimonialsFor(slug: string): Testimonial[] {
  return testimonialsByDate.filter((t) => t.service === slug);
}

/** Podpis pod mnenjem. Brez imena nevtralna oznaka, nikoli izmišljeno ime. */
export function podpis(t: Testimonial): string {
  return t.name ?? "Zadovoljna stranka";
}

/**
 * "2026-08-10" → "Avgust 2026". Dan pri mnenju ne pove nič koristnega.
 *
 * Velika začetnica je odmik od slovenskega pravopisa, po katerem so imena
 * mesecev z malo. Tu datum ni del stavka, ampak samostojna oznaka, poravnana
 * na desni rob noge kartice — in v tej vlogi je velika začetnica namerna.
 */
export function mnenjeDatum(iso?: string): string | undefined {
  if (!iso) return undefined;
  const meseci = [
    "januar", "februar", "marec", "april", "maj", "junij",
    "julij", "avgust", "september", "oktober", "november", "december",
  ];
  const [y, m] = iso.split("-").map(Number);
  const mesec = meseci[m - 1];
  return `${mesec[0].toUpperCase()}${mesec.slice(1)} ${y}`;
}
