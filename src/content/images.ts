// SAMODEJNO USTVARJENO — ne urejaj ročno.
// Vir: scripts/slike.py + scripts/mapiranje.py (zaženi `python3 scripts/slike.py`).
//
// Fotografije so prevzete s prejšnje strani strukturaplus.si. Večina je bila
// tam že pomanjšana in obrezana, zato so razmerja neenotna — postavitev jih
// obreže z object-fit: cover, mere pa so tu zapisane, da ni premika postavitve.

export type Foto = {
  /** pot brez širine in končnice, npr. "/slike/lesene-terase/terase-12" */
  base: string;
  /** mere izvirnika — za razmerje in width/height na <img> */
  w: number;
  h: number;
  /** razpoložljive širice za srcset */
  widths: number[];
  alt: string;
};

export const foto: Record<string, Foto[]> = {
  "lesene-terase": [
    { base: "/slike/lesene-terase/terase-12", w: 4080, h: 3060, widths: [400, 800, 1200, 1600], alt: "Lesena terasa iz sibirskega macesna ob stanovanjski hiši" },
    { base: "/slike/lesene-terase/terase-13", w: 4080, h: 3060, widths: [400, 800, 1200, 1600], alt: "Zaključena lesena terasa s prehodom na vrt" },
    { base: "/slike/lesene-terase/terase-11", w: 3280, h: 2464, widths: [400, 800, 1200, 1600], alt: "Montaža terasnih desk na podkonstrukcijo" },
    { base: "/slike/lesene-terase/terase-5", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Macesnova terasa s kakovostno podkonstrukcijo" },
    { base: "/slike/lesene-terase/terase-7", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Terasa z leseno ograjo in nadstreškom" },
    { base: "/slike/lesene-terase/terase-8", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Lesena terasa v naravnem okolju" },
    { base: "/slike/lesene-terase/terase-4", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Izvedba lesene terase ob bazenu" },
    { base: "/slike/lesene-terase/terase-3", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Terasa z integriranimi stopnicami iz lesa" },
    { base: "/slike/lesene-terase/terase-6", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Detajl zaključnega roba lesene terase" },
  ],
  "wpc-terase": [
    { base: "/slike/wpc-terase/terase-9", w: 1159, h: 869, widths: [400, 800, 1159], alt: "WPC terasa z minimalnim vzdrževanjem" },
    { base: "/slike/wpc-terase/terase-2", w: 651, h: 869, widths: [400, 651], alt: "WPC kompozitna terasa z ravnimi linijami" },
    { base: "/slike/wpc-terase/terase-10", w: 901, h: 1600, widths: [400, 800, 901], alt: "Terasa iz kompozitnih desk ob hiši" },
  ],
  "lesene-ograje": [
    { base: "/slike/lesene-ograje/ograje-3", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Sodobna pregradna stena iz lesa za zasebnost" },
    { base: "/slike/lesene-ograje/ograje-1", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Lesena ograja iz sibirskega macesna po meri" },
    { base: "/slike/lesene-ograje/ograje-4", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Lesena ograja ob terasi za zasebnost" },
    { base: "/slike/lesene-ograje/ograje-8", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Macesnova ograja z betonskim temeljem" },
    { base: "/slike/lesene-ograje/ograje-9", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Lesena ograja v vrtu po meri" },
    { base: "/slike/lesene-ograje/ograje-6", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Detajl spoja lesene ograje" },
  ],
  "balkonske-ograje": [
    { base: "/slike/balkonske-ograje/ograje-2", w: 1920, h: 865, widths: [400, 800, 1200, 1600], alt: "Balkonska ograja s kovinskim ogrodjem in leseno oblogo" },
    { base: "/slike/balkonske-ograje/ograje-5", w: 1200, h: 554, widths: [400, 800, 1200], alt: "WPC panelna ograja ob hiši" },
    { base: "/slike/balkonske-ograje/ograje-7", w: 401, h: 869, widths: [400, 401], alt: "Kombinirana ograja iz lesa in kovine" },
  ],
  "leseni-nadstreski": [
    { base: "/slike/leseni-nadstreski/nadstreski-11", w: 4080, h: 3060, widths: [400, 800, 1200, 1600], alt: "Leseni nadstrešek nad teraso" },
    { base: "/slike/leseni-nadstreski/hero-terrace", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Nadstrešek nad teraso z leseno konstrukcijo" },
    { base: "/slike/leseni-nadstreski/nadrstreski-9", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Leseni nadstrešek nad vhodom" },
    { base: "/slike/leseni-nadstreski/nadrstreski-6", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Sodoben nadstrešek ob hiši" },
    { base: "/slike/leseni-nadstreski/nadrstreski-5", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Lesena drvarnica z nadstreškom" },
  ],
  "nadstreski-za-avto": [
    { base: "/slike/nadstreski-za-avto/nadstreski-10", w: 4080, h: 3060, widths: [400, 800, 1200, 1600], alt: "Nadstrešek za avto z leseno konstrukcijo" },
    { base: "/slike/nadstreski-za-avto/nadrstreski-4", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Nadstrešek za avto — lesena konstrukcija" },
    { base: "/slike/nadstreski-za-avto/nadrstreski-3", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Nadstrešek s polikarbonatno kritino" },
    { base: "/slike/nadstreski-za-avto/nadrstreski-8", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Nadstrešek iz kombinacije lesa in stekla" },
  ],
  "lesene-pergole": [
    { base: "/slike/lesene-pergole/nadrstreski-7", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Pergola s previsno leseno konstrukcijo" },
    { base: "/slike/lesene-pergole/nadrstreski-2", w: 651, h: 869, widths: [400, 651], alt: "Pergola s kovinskim ogrodjem in leseno oblogo" },
    { base: "/slike/lesene-pergole/terase-7", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Pergola nad teraso z leseno ograjo" },
  ],
  "lesene-fasade": [
    { base: "/slike/lesene-fasade/fasade-obloge-1", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Lesena fasada iz sibirskega macesna" },
    { base: "/slike/lesene-fasade/fasade-obloge-7", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Lesena fasada usklajena s teraso" },
    { base: "/slike/lesene-fasade/fasade-obloge-2", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Fasadne obloge na stanovanjskem objektu" },
    { base: "/slike/lesene-fasade/fasade-obloge-8", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Horizontalna lesena fasada" },
    { base: "/slike/lesene-fasade/fasade-obloge-6", w: 1200, h: 541, widths: [400, 800, 1200], alt: "Moderna fasada z lesenimi lamelami" },
    { base: "/slike/lesene-fasade/fasade-obloge-4", w: 1200, h: 541, widths: [400, 800, 1200], alt: "Kombinacija lesa in betona na fasadi" },
    { base: "/slike/lesene-fasade/fasade-obloge-3", w: 1200, h: 541, widths: [400, 800, 1200], alt: "Parjeni bor kot fasadna obloga" },
    { base: "/slike/lesene-fasade/fasade-obloge-5", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Detajl lesene fasadne obloge" },
    { base: "/slike/lesene-fasade/fasade-obloge-9", w: 1200, h: 900, widths: [400, 800, 1200], alt: "Vertikalna fasadna obloga" },
  ],
  "vrtne-lope-ute-hiske": [
    { base: "/slike/vrtne-lope-ute-hiske/objekti-prizidki-1", w: 1545, h: 869, widths: [400, 800, 1200, 1545], alt: "Leseni objekt za druženje v vrtu" },
    { base: "/slike/vrtne-lope-ute-hiske/objekti-prizidki-5", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Moderna lopa z nadstreškom" },
    { base: "/slike/vrtne-lope-ute-hiske/objekti-prizidki-4", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Leseni vrtni paviljon" },
    { base: "/slike/vrtne-lope-ute-hiske/objekti-prizidki-6", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Lesena drvarnica z vrati" },
    { base: "/slike/vrtne-lope-ute-hiske/objekti-prizidki-2", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Skeletni prizidek iz lesa" },
    { base: "/slike/vrtne-lope-ute-hiske/objekti-prizidki-9", w: 1884, h: 869, widths: [400, 800, 1200, 1600], alt: "Prizidek z lesenimi elementi" },
  ],
  "leseni-stropi-opazi": [
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-1", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Leseni strop v dnevni sobi" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-5", w: 1920, h: 865, widths: [400, 800, 1200, 1600], alt: "Notranja lesena obloga stropa" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-3", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Mansardni prostor z lesenimi stropi" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-9", w: 1920, h: 865, widths: [400, 800, 1200, 1600], alt: "Vidni leseni nosilci v prostoru" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-8", w: 1920, h: 865, widths: [400, 800, 1200, 1600], alt: "Topel leseni strop v spalnici" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-2", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Vidni leseni opaž v prostoru" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-4", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Detajl lesenega stropa in spojev" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-6", w: 1920, h: 865, widths: [400, 800, 1200, 1600], alt: "Tesarski leseni strop" },
  ],
  "ravne-strehe-epdm": [
    { base: "/slike/ravne-strehe-epdm/ep3", w: 1200, h: 900, widths: [400, 800, 1200], alt: "Izvedba ravne strehe z EPDM membrano" },
    { base: "/slike/ravne-strehe-epdm/ep5", w: 1200, h: 900, widths: [400, 800, 1200], alt: "Priprava podlage za ravno streho" },
    { base: "/slike/ravne-strehe-epdm/ep6", w: 1200, h: 900, widths: [400, 800, 1200], alt: "Odvajanje vode z ravne strehe" },
    { base: "/slike/ravne-strehe-epdm/ep1", w: 1200, h: 540, widths: [400, 800, 1200], alt: "EPDM ravna streha — izvedba" },
    { base: "/slike/ravne-strehe-epdm/ep2", w: 585, h: 1300, widths: [400, 585], alt: "Montaža EPDM membrane na ravni strehi" },
    { base: "/slike/ravne-strehe-epdm/ep4", w: 975, h: 1300, widths: [400, 800, 975], alt: "Zaključni detajli ravne strehe EPDM" },
  ],
  "krovstvo-kleparstvo": [
    { base: "/slike/krovstvo-kleparstvo/kk_tale", w: 1210, h: 1279, widths: [400, 800, 1200, 1210], alt: "Montaža strešne konstrukcije in kritine" },
    { base: "/slike/krovstvo-kleparstvo/kk9", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Strešna konstrukcija in kritina" },
    { base: "/slike/krovstvo-kleparstvo/kk5", w: 1200, h: 900, widths: [400, 800, 1200], alt: "Montaža strešnih oken" },
    { base: "/slike/krovstvo-kleparstvo/kk7", w: 1200, h: 541, widths: [400, 800, 1200], alt: "Obnova strehe z novo kritino" },
    { base: "/slike/krovstvo-kleparstvo/kk8", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Žlebovi in odvodnjavanje s strehe" },
    { base: "/slike/krovstvo-kleparstvo/kk3", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Odvodni sistem in žlebovi na strehi" },
  ],
  "visoke-grede": [
    { base: "/slike/visoke-grede/greda-1", w: 2048, h: 1536, widths: [400, 800, 1200, 1600], alt: "Dve leseni visoki gredi iz hrastovih letev na betonskih podstavkih" },
    { base: "/slike/visoke-grede/greda-2", w: 1264, h: 948, widths: [400, 800, 1200, 1264], alt: "Lesena visoka greda z opornim ogrodjem za vzpenjavke" },
    { base: "/slike/visoke-grede/greda-3", w: 3872, h: 2592, widths: [400, 800, 1200, 1600], alt: "Lesena visoka greda, zasajena z zelenjavo" },
  ],
  "o-nas": [
    { base: "/slike/o-nas/o-nas-marko", w: 4284, h: 5712, widths: [400, 800, 1200, 1600], alt: "Marko Pogorevc pri montaži lesenega objekta" },
    { base: "/slike/o-nas/o-nas-montaza", w: 4284, h: 5712, widths: [400, 800, 1200, 1600], alt: "Postavljanje sten lesenega objekta v gozdu" },
    { base: "/slike/o-nas/o-nas-druzina", w: 1440, h: 1080, widths: [400, 800, 1200, 1440], alt: "Marko Pogorevc z družino" },
  ],
  "splosno": [
    { base: "/slike/splosno/notranja-oprema-1", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Masivna postelja po meri iz lesa" },
    { base: "/slike/splosno/notranja-oprema-4", w: 1881, h: 869, widths: [400, 800, 1200, 1600], alt: "Lesena jedilna miza po naročilu" },
    { base: "/slike/splosno/notranja-oprema-7", w: 1884, h: 869, widths: [400, 800, 1200, 1600], alt: "Lesene omare po meri" },
    { base: "/slike/splosno/notranja-oprema-3", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Police iz masivnega lesa po meri" },
    { base: "/slike/splosno/notranja-oprema-9", w: 1920, h: 865, widths: [400, 800, 1200, 1600], alt: "Masivni leseni elementi po meri" },
    { base: "/slike/splosno/notranja-oprema-6", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Detajl masivnega lesa — površinska obdelava" },
    { base: "/slike/splosno/objekti-prizidki-3", w: 1200, h: 554, widths: [400, 800, 1200], alt: "Objekt z leseno fasado po meri" },
  ],
};

/** Vse fotografije za storitev. Prazno polje, če jih (še) ni. */
export function fotoZa(slug: string): Foto[] {
  return foto[slug] ?? [];
}

/** Glavna fotografija storitve — prva v skupini. */
export function heroFoto(slug: string): Foto | undefined {
  return foto[slug]?.[0];
}

/** Fotografije za galerijo — vse razen glavne. */
export function galerija(slug: string, koliko = 6): Foto[] {
  return (foto[slug] ?? []).slice(1, 1 + koliko);
}

/** Splošne fotografije za pristajalno stran in "O nas". */
export const splosneFoto = foto["splosno"] ?? [];

/** Fotografija po imenu datoteke znotraj skupine — za strani, kjer vrstni red ni dovolj. */
export function fotoPoImenu(group: string, ime: string): Foto | undefined {
  return foto[group]?.find((f) => f.base.endsWith("/" + ime));
}
