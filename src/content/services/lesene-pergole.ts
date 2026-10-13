import type { Service } from "../types";

export const lesenePergole: Service = {
  slug: "lesene-pergole",
  navLabel: "Lesene pergole",
  order: 4,
  tier: "basic",
  eyebrow: "Pergole",
  metaTitle: "Lesene pergole po meri — za teraso in vrt",
  metaDescription:
    "Lesene pergole po meri: nad teraso ali samostoječe na vrtu, z letvami ali platnom za senco. Izmera na lokaciji in okvirna cena.",
  h1: "Lesene pergole po meri",
  lead:
    "Lesene pergole izdelujemo in montiramo po meri prostora. Pergola ni streha — je senca. Zato jo načrtujemo glede na to, kdaj boste pod njo sedeli: gostota in smer letev odločita, ali bo senca opoldne ali šele ob petih popoldne.",
  primaryKeyword: "lesena pergola",
  secondaryKeywords: [
    "pergole za terase",
    "pergole",
    "lesene pergole",
    "pergole cena",
    "pergole za terase cena",
    "cena pergole po m2",
    "izdelava lesene pergole",
    "pergole za vrt",
    "lesene vrtne pergole",
    "lesene pergole za terase",
  ],
  cardText: "Nad teraso ali samostoječe na vrtu. Letve, platno ali rastline za senco.",
  cardPrice: "od 1.600 €",
  sections: [
    {
      h2: "Pergola nad teraso",
      body: [
        "Najpogostejša izvedba: prislonjena na hišo, podprta s stebri ob robu terase. Letve položimo pravokotno na smer sonca ob uri, ko teraso največ uporabljate — pri zahodni terasi to pomeni drugo smer kot pri južni.",
        "Če želite senco tudi opoldne, mora biti razmik med letvami manjši od njihove višine. Praviloma: letve 40 × 80 mm z razmikom 60 mm dajo prijetno polsenco, ne pa polne.",
      ],
    },
    {
      h2: "Samostoječa pergola na vrtu",
      body: [
        "Lesena vrtna pergola ustvari prostor tam, kjer ga prej ni bilo — nad jedilno mizo na travniku, ob bazenu ali nad zunanjo kuhinjo. Ker stoji sama, potrebuje štiri temelje in močnejše stebre kot prislonjena.",
        "Pogosto jo kombiniramo s pregradno steno na eni strani, ki zaustavi veter in zakrije pogled. Izdelava lesene pergole se pri samostoječi izvedbi začne s temelji, zato jo je pametno načrtovati pred tlakovanjem in ne po njem.",
      ],
    },
    {
      h2: "Senčenje: letve, platno ali rastline",
      list: [
        "Fiksne lesene letve — brez vzdrževanja, senca je odvisna od ure",
        "Napenjalno platno med letvami — senca po potrebi, pozimi se sname",
        "Rastline (trta, glicinija, kivi) — najlepša senca, a potrebuje nekaj let in rez",
        "Pomična senčila v vodilih — najdražje, a popoln nadzor",
      ],
    },
    {
      h2: "Izdelava in montaža",
      body: [
        "Elemente pripravimo in površinsko obdelamo v delavnici, ker so po montaži nekatere ploskve — zgornje strani letev predvsem — nedosegljive. Na objekt pridemo s pripravljenimi deli in pergolo sestavimo, kar skrajša čas, ko je dvorišče gradbišče.",
        "Samostoječa pergola se začne s štirimi točkovnimi temelji, zato jo je pametno načrtovati pred tlakovanjem in ne po njem. Pri prislonjeni izvedbi je odločilna pritrditev v steno: sidramo v nosilni del, ne v izolacijo, prehod pa zatesnimo.",
        "Montaža vzame običajno en do dva dni, pri večjih samostoječih izvedbah s temelji pa je vmes teden premora, da beton doseže trdnost.",
      ],
    },
    {
      h2: "Lesena ali bioklimatska",
      body: [
        "Bioklimatska pergola je aluminijast izdelek z nastavljivimi lamelami in motorjem. Daje popoln nadzor nad senco in je vodotesna, a je bistveno dražja in v vrtno okolje ne sodi vedno.",
        "Bioklimatskih pergol ne izdelujemo. Če iščete prav to, vam bomo to povedali odkrito — lesena pergola je nekaj drugega in za drugačno rabo.",
      ],
    },
  ],
  price: {
    range: "od 1.600 €",
    includes: "Konstrukcija, letve in montaža. Temelji, platno in razsvetljava se obračunajo posebej.",
    factors: [
      "Velikost in razpon med stebri",
      "Prislonjena izvedba je cenejša od samostoječe",
      "Gostota letev in način senčenja",
    ],
  },
  faq: [
    {
      q: "Koliko stane lesena pergola?",
      a: "Prislonjena pergola približno 4 × 3 m se začne pri okoli 1.600 €, samostoječa pri približno 2.200 €, ker potrebuje štiri temelje in močnejše stebre. Platno in razsvetljava sta ločeni postavki.",
    },
    {
      q: "Ali pergola ščiti pred dežjem?",
      a: "Ne, razen če ima polno kritino — takrat pa to ni več pergola, ampak nadstrešek. Če želite zaščito pred dežjem, poglejte stran o lesenih nadstreških.",
    },
    {
      q: "Kakšen razmik med letvami daje najboljšo senco?",
      a: "Praviloma razmik, manjši od višine letve. Letve 40 × 80 mm z razmikom 60 mm dajo prijetno polsenco. Ožji razmik pomeni več sence, a tudi več materiala in težjo konstrukcijo.",
    },
    {
      q: "Ali izdelujete bioklimatske pergole?",
      a: "Ne. Bioklimatska pergola je aluminijast motoriziran izdelek in ni mizarska storitev. Izdelujemo lesene pergole po meri.",
    },
  ],
  offers: [
    "Pergola nad teraso",
    "Samostoječa pergola",
    "Pergola z napenjalnim platnom",
    "Pergola s pregradno steno",
  ],
  woods: ["Sibirski macesen", "Lepljen les", "Smreka"],
  related: ["leseni-nadstreski", "lesene-terase", "vrtne-lope-ute-hiske"],
  heroAlt: "Lesena pergola nad teraso z letvami iz sibirskega macesna — izvedba Struktura Plus",
};
