/** Primerjalna tabela za članek o vrstah lesa.
 *  Gostota je povprečje za suh les (~12 % vlage), razred trajnosti po EN 350. */
export type Wood = {
  name: string;
  density: string;
  durability: string;
  life: string;
  maintenance: string;
  priceTier: "€" | "€€" | "€€€";
  use: string;
};

export const woods: Wood[] = [
  {
    name: "Sibirski macesen",
    density: "590–650 kg/m³",
    durability: "3",
    life: "20–25 let",
    maintenance: "Olje vsaki 1–2 leti, brez premaza posivi",
    priceTier: "€€",
    use: "Terase, ograje, fasade — najbolj univerzalen",
  },
  {
    name: "Evropski macesen",
    density: "550–600 kg/m³",
    durability: "3–4",
    life: "15–20 let",
    maintenance: "Olje vsako leto",
    priceTier: "€€",
    use: "Ograje in fasade na manj izpostavljenih legah; domač in cenejši od sibirskega",
  },
  {
    name: "Smreka (impregnirana)",
    density: "430–470 kg/m³",
    durability: "4 (5 brez impregnacije)",
    life: "10–15 let",
    maintenance: "Premaz vsaki 2 leti, obvezno",
    priceTier: "€",
    use: "Nosilne konstrukcije, notranji opaži, poceni ograje",
  },
  {
    name: "Douglazija",
    density: "500–550 kg/m³",
    durability: "3–4",
    life: "15–20 let",
    maintenance: "Olje vsaki 1–2 leti",
    priceTier: "€€",
    use: "Konstrukcije z večjimi razponi, fasade",
  },
  {
    name: "Akacija (robinija)",
    density: "730–800 kg/m³",
    durability: "1–2",
    life: "25–30 let",
    maintenance: "Olje po želji, brez njega posivi",
    priceTier: "€€€",
    use: "Terase in ograje; najtrajnejši les, ki raste pri nas",
  },
  {
    name: "Termoobdelan les",
    density: "480–520 kg/m³",
    durability: "1–2",
    life: "25–30 let",
    maintenance: "Olje po želji, ni nujno",
    priceTier: "€€",
    use: "Fasade in terase, kjer je pomembna stabilnost",
  },
  {
    name: "Cumaru",
    density: "1.050–1.100 kg/m³",
    durability: "1",
    life: "30+ let",
    maintenance: "Olje po želji, brez njega posivi",
    priceTier: "€€€",
    use: "Terase na polnem soncu, ob bazenu",
  },
  {
    name: "Ipe / lapacho",
    density: "1.000–1.100 kg/m³",
    durability: "1",
    life: "30+ let",
    maintenance: "Olje po želji",
    priceTier: "€€€",
    use: "Najbolj obremenjene terase, javne površine",
  },
  {
    name: "Tik",
    density: "630–700 kg/m³",
    durability: "1",
    life: "30+ let",
    maintenance: "Olje po želji",
    priceTier: "€€€",
    use: "Vrtno pohištvo in prestižne terase; za fasade redko",
  },
  {
    name: "WPC kompozit",
    density: "1.200–1.400 kg/m³",
    durability: "ni razvrščen (ni les)",
    life: "20–25 let",
    maintenance: "Samo pranje",
    priceTier: "€€€",
    use: "Terase in ograje brez vzdrževanja",
  },
];
