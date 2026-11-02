import type { Service } from "../types";

export const wpcFasade: Service = {
  slug: "wpc-fasade",
  navLabel: "WPC fasade",
  order: 6,
  tier: "basic",
  eyebrow: "Fasade",
  metaTitle: "WPC fasada — fasadne obloge iz kompozita",
  metaDescription:
    "WPC fasadne obloge z montažo: prezračevana fasada iz kompozitnih desk brez premazovanja. Kje se splača bolj kot macesen in koliko stane m².",
  h1: "WPC fasade",
  lead:
    "WPC fasadne obloge montiramo kot prezračevano fasado — enako kot leseno, le da obloga ne potrebuje premazovanja in ohrani barvo. Smiselne so predvsem tam, kjer je dostop za vzdrževanje slab ali kjer je stena posebej izpostavljena.",
  primaryKeyword: "wpc fasada",
  secondaryKeywords: [
    "wpc fasade",
    "wpc fasadne obloge",
    "wpc obloge",
    "fasadne obloge wpc",
    "kompozitna fasada",
    "wpc fasada cena",
  ],
  cardText: "Prezračevana fasada iz kompozitnih desk. Brez premazovanja, z barvo, ki ostane.",
  cardPrice: "95–165 €/m²",
  sections: [
    {
      h2: "Kje se WPC fasada splača",
      body: [
        "WPC fasada ni nadomestek za macesnovo na celi hiši — je rešitev za konkretne lege. Smiselna je na stenah, do katerih je z lestvijo težko, na nižjih delih fasade, ki jih brizga dež z tlakovanih površin, in na garažah ali prizidkih, kjer lastnik ne želi razmišljati o vzdrževanju.",
        "Pri hiši, kjer je videz naravnega lesa glavni razlog za odločitev, vam bomo svetovali macesen. WPC je videti urejeno, a ne postara se tako, kot se les — in prav to patiniranje je pri marsikateri fasadi tisto, kar lastnik želi.",
      ],
    },
    {
      h2: "Prezračevana fasada ostane prezračevana",
      body: [
        "Da WPC ne potrebuje premazovanja, ne pomeni, da sme biti položen na steno. Pod oblogo mora ostati zračna reža, ki odvede vlago iz stene navzgor, enako kot pri leseni fasadi. Brez nje se vlaga ujame med oblogo in zid.",
        "Podkonstrukcija je aluminijasta. Lesene late pod WPC oblogo so nesmiselne: obloga zdrži desetletja, late pa ne, in menjava pomeni razgradnjo cele fasade.",
      ],
      list: [
        "Aluminijasta podkonstrukcija na distančnikih",
        "Zračna reža najmanj 20 mm, odprta spodaj in zgoraj",
        "Mrežica proti mrčesu na vstopu in izstopu zraka",
        "Raztezne reže na koncih desk in ob stavbnem pohištvu",
      ],
    },
    {
      h2: "Raztezanje in južna stena",
      body: [
        "Kompozit se na soncu razteza vzdolžno bolj kot les, temna obloga na južni steni pa se segreje precej nad temperaturo zraka. Če so deske na koncih brez rezerve, se obloga izboči in reže se razprejo neenakomerno.",
        "Zato deske pritrjujemo s sponkami, ki dovoljujejo raztezanje, in rezervo računamo po dolžini deske in pričakovani temperaturni razliki, ne po občutku. Pri izrazito južnih stenah odsvetujemo najtemnejše odtenke.",
      ],
    },
    {
      h2: "Vzdrževanje",
      body: [
        "Pranje z vodo enkrat letno, po potrebi z mehko krtačo. Brez premazov in brez visokotlačnega čistilnika od blizu.",
        "Poškodovano desko je mogoče zamenjati posamično, če je fasada pravilno izvedena. Brušenje ne pride v poštev, ker odstrani zaščitno plast.",
      ],
    },
  ],
  price: {
    range: "95–165 €/m²",
    includes:
      "Obloga, aluminijasta podkonstrukcija in montaža. Odstranitev stare obloge, obrobe in okenske špalete se obračunajo posebej.",
    factors: [
      "Kakovost desk in ali imajo koekstrudirano zaščitno plast",
      "Zahtevnost stene — odprtine, špalete in zaključki",
      "Višina in postavitev odra",
    ],
  },
  faq: [
    {
      q: "Koliko stane WPC fasada na m²?",
      a: "Od približno 95 do 165 € na kvadratni meter z aluminijasto podkonstrukcijo in montažo. Oder, obrobe in špalete se obračunajo posebej.",
    },
    {
      q: "Je WPC fasada boljša od lesene?",
      a: "Ni boljša, je drugačna. Ne potrebuje premazovanja in ohrani barvo, a je dražja ob nakupu, ni je mogoče pobrusiti in se ne postara tako kot les. Odločitev je odvisna od lege in od tega, kaj pričakujete čez deset let.",
    },
    {
      q: "Ali WPC fasada potrebuje zračno režo?",
      a: "Da, enako kot lesena. Zračna reža najmanj 20 mm, odprta spodaj in zgoraj, odvede vlago iz stene. Obloga, položena neposredno na zid, je napaka ne glede na material.",
    },
    {
      q: "Ali se WPC fasada na soncu razteza?",
      a: "Bolj kot les, zlasti pri temnih odtenkih na južni steni. Zato so raztezne reže na koncih desk obvezne in pri izrazito izpostavljenih stenah odsvetujemo najtemnejše barve.",
    },
  ],
  offers: ["WPC fasadna obloga", "WPC obloga garaže in prizidka", "Zamenjava dotrajane fasadne obloge"],
  woods: ["WPC kompozit"],
  related: ["lesene-fasade", "leseni-stropi-opazi", "wpc-terase"],
  heroAlt: "Rjava WPC fasadna obloga na nadstropju s trakastim oknom — izvedba Struktura Plus",
};
