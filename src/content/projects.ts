import type { Project } from "./types";

/**
 * ⚠️ PLACEHOLDER
 * Vsi projekti spodaj so testni vnosi. Kraj, material in leto so obvezni podatki
 * — so vir dolgega repa v iskalniku ("nadstrešek Celje", "terasa sibirski macesen")
 * in edini način, da galerija prispeva k lokalni vidnosti.
 *
 * Pred zagonom: zamenjaj z resničnimi projekti in fotografijami.
 * Stran s placeholder projekti NE SME iti v produkcijo — izmišljene reference
 * so zavajajoče. Dokler ni pravih, nastavi PROJECTS_READY na false in
 * /projekti ostane noindex.
 */
export const PROJECTS_READY = false;

export const projects: Project[] = [
  {
    slug: "terasa-macesen-zasavje",
    title: "Terasa iz sibirskega macesna s stopnicami",
    place: "Zasavje",
    material: "Sibirski macesen, skrito pritrjevanje",
    year: 2026,
    service: "lesene-terase",
    summary: "Terasa 38 m² z vgrajenimi stopnicami po celotni dolžini in prehodom na vrt.",
    body: [
      "TESTNO BESEDILO. Opis obsega del, izhodiščnega stanja in rešitve, ki smo jo izbrali.",
      "TESTNO BESEDILO. Uporabljeni materiali, čas izvedbe in morebitne posebnosti lokacije.",
    ],
    imageAlt: "Lesena terasa iz sibirskega macesna z vgrajenimi stopnicami, izvedba v Zasavju",
    placeholder: true,
  },
  {
    slug: "dvojni-nadstresek-celje",
    title: "Dvojni nadstrešek za avto z lopo",
    place: "Celje",
    material: "Smreka, polikarbonatna kritina",
    year: 2025,
    service: "nadstreski-za-avto",
    summary: "Nadstrešek za dva avtomobila s pripadajočim zaprtim delom za orodje in drva.",
    body: [
      "TESTNO BESEDILO. Opis izhodiščnega stanja in zahtev naročnika.",
      "TESTNO BESEDILO. Izvedba temeljev, konstrukcije in odvodnjavanja.",
    ],
    imageAlt: "Dvojni lesen nadstrešek za avto z lopo, izvedba v Celju",
    placeholder: true,
  },
  {
    slug: "lesena-fasada-savinjska",
    title: "Prezračevana lesena fasada",
    place: "Savinjska",
    material: "Sibirski macesen, rombni profil",
    year: 2025,
    service: "lesene-fasade",
    summary: "Fasadna obloga na dveh ploskvah družinske hiše, skrito pritrjevanje.",
    body: [
      "TESTNO BESEDILO. Opis konstrukcije, zračne reže in zaključkov.",
      "TESTNO BESEDILO. Kombinacija z obstoječim ometom na preostalih ploskvah.",
    ],
    imageAlt: "Prezračevana lesena fasada iz sibirskega macesna z rombnim profilom, izvedba v Savinjski",
    placeholder: true,
  },
  {
    slug: "balkonske-ograje-ljubljana",
    title: "Balkonske ograje na večstanovanjski hiši",
    place: "Ljubljana",
    material: "WPC z antracitnim kovinskim ogrodjem",
    year: 2025,
    service: "balkonske-ograje",
    summary: "Zamenjava polnil na šestih balkonih, obstoječa sidrišča ohranjena.",
    body: [
      "TESTNO BESEDILO. Opis stanja obstoječih ograj in obsega zamenjave.",
      "TESTNO BESEDILO. Usklajevanje z etažnimi lastniki in izvedba po etapah.",
    ],
    imageAlt: "WPC balkonske ograje z antracitnim kovinskim ogrodjem, izvedba v Ljubljani",
    placeholder: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
