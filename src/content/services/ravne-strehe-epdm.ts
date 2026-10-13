import type { Service } from "../types";

export const ravneStreheEpdm: Service = {
  slug: "ravne-strehe-epdm",
  navLabel: "Ravne strehe EPDM",
  order: 11,
  tier: "basic",
  eyebrow: "Strehe",
  metaTitle: "Ravne strehe z EPDM membrano — montaža in prenova",
  metaDescription:
    "Montaža in prenova ravnih streh z EPDM membrano: priprava podlage, zaključki, odvodnjavanje in življenjska doba. Nadstreški, prizidki in manjši objekti.",
  h1: "Ravne strehe z EPDM membrano",
  lead:
    "Ravne strehe z EPDM membrano izvajamo in montiramo sami. EPDM je sintetična kavčukova membrana, ki jo je mogoče položiti v enem kosu tudi čez večjo površino — brez varjenih stikov, ki so pri ravnih strehah najpogostejše mesto zatekanja.",
  primaryKeyword: "epdm",
  secondaryKeywords: [
    "ravne strehe",
    "epdm membrana",
    "epdm streha",
    "hidroizolacija ravne strehe",
    "prenova ravne strehe",
  ],
  cardText: "Nove strehe in prenove z membrano brez stikov. Zaključki in odvodnjavanje.",
  cardPrice: "45–80 €/m²",
  sections: [
    {
      h2: "Kaj je EPDM in zakaj ga uporabljamo",
      body: [
        "EPDM membrana je elastična tudi pri nizkih temperaturah, odporna na UV in ozon ter ima življenjsko dobo, ki se meri v desetletjih. Ključna prednost je, da jo je na manjših strehah mogoče položiti v enem kosu.",
        "Brez stikov ni mest, kjer bi lahko zateklo. Pri nadstreških, prizidkih in garažah, kjer so površine majhne, je to praktično vedno izvedljivo.",
      ],
    },
    {
      h2: "Nova streha ali prenova",
      body: [
        "Pri novi strehi membrano položimo na pripravljeno podlago z naklonom vsaj 2 odstotka proti odtoku. Naklon je obvezen tudi pri ravni strehi — voda, ki obstane, ne prodre skozi membrano, a nabere umazanijo in obremeni konstrukcijo.",
        "Pri prenovi najprej ugotovimo, ali je stara hidroizolacija mokra. Če je, jo je treba odstraniti, ker bi vlaga ostala ujeta pod novo membrano. Če je suha in ravna, lahko nova plast pogosto gre neposredno nanjo.",
      ],
    },
    {
      h2: "Montaža EPDM membrane",
      body: [
        "Podlaga mora biti suha, čista in brez ostrih robov. Če je stara streha vlažna pod površino, je polaganje nove membrane čeznjo najdražja možna napaka — vlaga ostane ujeta in objekt se suši v notranjost. Zato pred prenovo naredimo sondo in stanje povemo, tudi če to pomeni večji obseg del, kot je bil predviden.",
        "Membrano razgrnemo v enem kosu in pustimo, da se sprosti, preden jo pritrdimo. EPDM se pri razvijanju razteza in če ga pritrdimo napetega, se pozneje pri mrazu skrči in potegne zaključke.",
        "Pritrditev je lepljena po celotni ploskvi, mehanska ob robovih ali balastna s prodcem, odvisno od konstrukcije in višine objekta. Vse tri izvedbe delamo; katera je prava, se odloči po nosilnosti podlage in izpostavljenosti vetru.",
        "Delamo pri suhem vremenu in temperaturi nad 5 °C, ker lepila drugače ne vežejo. Manjšo ravno streho zaključimo v enem dnevu, vključno z obrobami in odtokom.",
      ],
    },
    {
      h2: "Zaključki in odvodnjavanje",
      body: [
        "Zatekanje se pri ravnih strehah skoraj nikoli ne zgodi na sredini, ampak na robovih, ob dimniku, ob steni in okoli odtoka. Zato je izvedba zaključkov pomembnejša od same membrane.",
        "Robove izvedemo s kleparsko obrobo, ki membrano mehansko pritrdi in prekrije. Ob steni membrano dvignemo najmanj 15 cm nad končno površino strehe. Vsaka ravna streha dobi tudi varnostni preliv za primer, da se glavni odtok zamaši.",
      ],
      list: [
        "Naklon najmanj 2 % proti odtoku",
        "Dvig membrane ob steni najmanj 15 cm",
        "Kleparske obrobe na vseh robovih",
        "Glavni odtok in varnostni preliv",
        "Tesnjenje prebojev za antene, dimnike in prezračevanje",
      ],
    },
  ],
  price: {
    range: "45–80 €/m²",
    includes: "Membrana, lepljenje in zaključki. Priprava podlage, izolacija in kleparska dela se obračunajo posebej.",
    factors: [
      "Velikost in oblika strehe — več vogalov in prebojev pomeni več dela",
      "Stanje podlage in potreba po odstranitvi stare hidroizolacije",
      "Dostop in višina objekta",
    ],
  },
  faq: [
    {
      q: "Koliko časa zdrži EPDM membrana?",
      a: "Proizvajalci navajajo 40 let in več, kar je bistveno dlje od bitumenskih trakov. Odločilna ni membrana, ampak izvedba zaključkov na robovih in okoli prebojev.",
    },
    {
      q: "Ali mora imeti ravna streha naklon?",
      a: "Da, najmanj približno 2 odstotka proti odtoku. Voda, ki obstane, sicer ne prodre skozi membrano, a nabere umazanijo, pospeši staranje in dodatno obremeni konstrukcijo.",
    },
    {
      q: "Ali je mogoče novo membrano položiti čez staro hidroizolacijo?",
      a: "Če je stara plast suha, ravna in dobro pritrjena, pogosto da. Če je pod njo ujeta vlaga, je ni mogoče pustiti — vlaga bi ostala zaprta in bi konstrukcijo uničevala od znotraj. To preverimo pred ponudbo.",
    },
    {
      q: "Ali izvajate tudi zeleno ali pohodno ravno streho?",
      a: "Membrana je primerna za obe izvedbi, a zahtevata dodatne zaščitne plasti in močnejšo konstrukcijo. Izvedljivost ocenimo ob ogledu.",
    },
  ],
  offers: ["Nova ravna streha z EPDM", "Prenova ravne strehe", "Ravna streha na nadstrešku", "Hidroizolacija prizidka"],
  related: ["krovstvo-kleparstvo", "leseni-nadstreski", "nadstreski-za-avto"],
  heroAlt: "Ravna streha z EPDM membrano in kleparskimi obrobami — izvedba Struktura Plus",
};
