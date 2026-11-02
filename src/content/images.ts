// SAMODEJNO USTVARJENO — ne urejaj ročno.
// Vir: scripts/slike.py + scripts/mapiranje.py (zaženi `python3 scripts/slike.py`).
//
// Vir: fotografije naročnika iz oktobra 2026. Razmerja so neenotna (posnetki
// s telefona, pokončni in ležeči) — postavitev jih obreže z object-fit: cover,
// mere pa so tu zapisane, da ob nalaganju ni premika postavitve.
// Izjema sta skupini "o-nas" in "splosno", ki sta še s prejšnje strani.

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
    { base: "/slike/lesene-terase/lesene-terase-hero", w: 1600, h: 1202, widths: [400, 800, 1200, 1600], alt: "Velika lesena terasa s poševno položenimi deskami ob zastekljeni hiši" },
    { base: "/slike/lesene-terase/lesene-terase-15", w: 1600, h: 1202, widths: [400, 800, 1200, 1600], alt: "Lesena terasa z vrtno mizo in stoli ob zastekljeni fasadi" },
    { base: "/slike/lesene-terase/lesene-terase-14", w: 1600, h: 1202, widths: [400, 800, 1200, 1600], alt: "L-oblikovana lesena terasa ob sivi hiši s prodnatim robom" },
    { base: "/slike/lesene-terase/lesene-terase-23", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Nova lesena terasa pred hišo z zelenimi polkni" },
    { base: "/slike/lesene-terase/lesene-terase-17", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Velika svetla terasa ob hiši z razgledom na griče" },
    { base: "/slike/lesene-terase/lesene-terase-5", w: 1600, h: 720, widths: [400, 800, 1200, 1600], alt: "Široka lesena terasa na nastavljivih podstavkih pred leseno hišo" },
    { base: "/slike/lesene-terase/lesene-terase-24", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Terasa ob hiši z vrtno mizo in kamnitim žarom" },
    { base: "/slike/lesene-terase/lesene-terase-2", w: 901, h: 1600, widths: [400, 800, 901], alt: "Pokrita lesena terasa z lesenim stebrom in razgledom na hribe" },
    { base: "/slike/lesene-terase/lesene-terase-7", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Ozka lesena terasa ob hiši s travnato površino" },
    { base: "/slike/lesene-terase/lesene-terase-9", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Samostoječa lesena ploščad na vrtu" },
    { base: "/slike/lesene-terase/lesene-terase-3", w: 1600, h: 720, widths: [400, 800, 1200, 1600], alt: "Terasne deske ob lesenem stebru in macesnovi fasadi" },
    { base: "/slike/lesene-terase/lesene-terase-25", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Detajl stika terasnih desk in navpične obloge v istem tonu" },
    { base: "/slike/lesene-terase/lesene-terase-18", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Ozek terasni pas ob steni hiše" },
    { base: "/slike/lesene-terase/lesene-terase-10", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Vrtna pot iz betonskih plošč in lesenih vložkov v prodnatem pasu" },
    { base: "/slike/lesene-terase/lesene-terase-11", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Pot iz plošč in lesa ob robu lesene terase" },
    { base: "/slike/lesene-terase/lesene-terase-6", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Polaganje terasnih desk ob hiši" },
    { base: "/slike/lesene-terase/lesene-terase-20", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Dvignjena terasna ploščad med polaganjem desk" },
    { base: "/slike/lesene-terase/lesene-terase-8", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Aluminijasta podkonstrukcija terase na nastavljivih podstavkih" },
    { base: "/slike/lesene-terase/lesene-terase-19", w: 1600, h: 1202, widths: [400, 800, 1200, 1600], alt: "Leseni nosilci podkonstrukcije terase na pobočju" },
    { base: "/slike/lesene-terase/lesene-terase-21", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Podkonstrukcija dvignjene terase pod zaščitno folijo" },
  ],
  "wpc-terase": [
    { base: "/slike/wpc-terase/wpc-terase-hero", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "WPC terasa ob hiši z visokimi gredami in prodnatim pasom" },
    { base: "/slike/wpc-terase/wpc-terase-25", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Opremljena WPC terasa z jedilno mizo in sedežno garnituro" },
    { base: "/slike/wpc-terase/wpc-terase-17", w: 1600, h: 1082, widths: [400, 800, 1200, 1600], alt: "Bazenska obloga iz WPC desk z vgrajenimi stopnicami" },
    { base: "/slike/wpc-terase/wpc-terase-19", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "L-oblikovana WPC terasa s stopnico pred temno obloženo hišo" },
    { base: "/slike/wpc-terase/wpc-terase-9", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "WPC terasa pod lesenim nadstreškom z zavesami" },
    { base: "/slike/wpc-terase/wpc-terase-2", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Terakotna WPC terasa s temno obrobo ob opečnem stebru" },
    { base: "/slike/wpc-terase/wpc-terase-15", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Pokrita WPC terasa pod napuščem strehe" },
    { base: "/slike/wpc-terase/wpc-terase-11", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "WPC terasa pod kovinskim nadstreškom ob hiši" },
    { base: "/slike/wpc-terase/wpc-terase-12", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "WPC terasa v dveh odtenkih pod nadstreškom" },
    { base: "/slike/wpc-terase/wpc-terase-27", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "WPC terasa ob hiši s kamnito oblogo in cvetjem" },
    { base: "/slike/wpc-terase/wpc-terase-29", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Temno rjava WPC terasa ob zastekljeni fasadi" },
    { base: "/slike/wpc-terase/wpc-terase-22", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Velika WPC terasa na dvorišču med hišama" },
    { base: "/slike/wpc-terase/wpc-terase-23", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "WPC terasa s senčnikom ob temni ograji" },
    { base: "/slike/wpc-terase/wpc-terase-30", w: 1212, h: 909, widths: [400, 800, 1200, 1212], alt: "WPC terasa z visokimi gredami in peskovnikom" },
    { base: "/slike/wpc-terase/wpc-terase-18", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "WPC obloga bazena z dostopnimi vrati med okrasnimi travami" },
    { base: "/slike/wpc-terase/wpc-terase-24", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "WPC stopnice do dvignjene terase s pregrado" },
    { base: "/slike/wpc-terase/wpc-terase-31", w: 1159, h: 869, widths: [400, 800, 1159], alt: "WPC stopnice in pot ob hiši s prodnatim robom" },
    { base: "/slike/wpc-terase/wpc-terase-4", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "WPC terasa pod senčnikom z jeklenično ograjo" },
    { base: "/slike/wpc-terase/wpc-terase-14", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Položene WPC deske ob steni hiše" },
  ],
  "nadstreski-za-avto": [
    { base: "/slike/nadstreski-za-avto/nadstresek-za-avto-hero", w: 1600, h: 1101, widths: [400, 800, 1200, 1600], alt: "Leseni nadstrešek za avto s križno opaženo stranico in ravno streho" },
    { base: "/slike/nadstreski-za-avto/nadstresek-za-avto-2", w: 1600, h: 1274, widths: [400, 800, 1200, 1600], alt: "Križna lesena konstrukcija nadstreška za avto" },
    { base: "/slike/nadstreski-za-avto/nadstresek-za-avto-3", w: 1600, h: 1076, widths: [400, 800, 1200, 1600], alt: "Osvetljen leseni nadstrešek za avto v večernem času" },
  ],
  "leseni-nadstreski": [
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-hero", w: 1600, h: 1202, widths: [400, 800, 1200, 1600], alt: "Leseni nadstrešek s poševnimi oporniki in opaženim stropom" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-1", w: 1600, h: 1018, widths: [400, 800, 1200, 1600], alt: "Pokrit prostor za sedenje z leseno letveno steno in mizo" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-3", w: 1600, h: 739, widths: [400, 800, 1200, 1600], alt: "Leseni nadstrešek z letveno pregrado in opaženim stropom" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-7", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Dokončan leseni nadstrešek z opaženim stropom in kleparsko obrobo" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-2", w: 1600, h: 2398, widths: [400, 800, 1200, 1600], alt: "Nadstrešek z vodoravno letveno steno ob tlakovani poti" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-11", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Nadstrešek na lesenih stebrih ob hiši z razgledom" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-14", w: 1149, h: 735, widths: [400, 800, 1149], alt: "Nadstrešek s temno prosojno kritino na oranžni hiši" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-8", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Nadstrešek na lesenih stebrih nad odprto teraso" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-13", w: 1600, h: 2130, widths: [400, 800, 1200, 1600], alt: "Pogled izpod nadstreška na opažen strop in nosilec" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-6", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Konstrukcija lesenega nadstreška s stebri in legami" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-4", w: 1600, h: 1344, widths: [400, 800, 1200, 1600], alt: "Postavljanje lesenega nadstreška ob rdeči hiši" },
    { base: "/slike/leseni-nadstreski/leseni-nadstreski-5", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Lege nadstreška pod prosojno kritino med montažo" },
  ],
  "kovinski-nadstreski": [
    { base: "/slike/kovinski-nadstreski/kovinski-nadstreski-hero", w: 1600, h: 1591, widths: [400, 800, 1200, 1600], alt: "Nadstrešek za avto s kovinskimi stebri in lesenim opažem stropa" },
    { base: "/slike/kovinski-nadstreski/kovinski-nadstreski-2", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Samostoječ dvojni nadstrešek s kovinsko konstrukcijo nad dovozom" },
    { base: "/slike/kovinski-nadstreski/kovinski-nadstreski-6", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Kovinska pergola nad leseno teraso ob sodobni hiši" },
    { base: "/slike/kovinski-nadstreski/kovinski-nadstreski-10", w: 977, h: 730, widths: [400, 800, 977], alt: "Nadstrešek nad teraso s kovinsko ograjo z vodoravnimi letvami" },
    { base: "/slike/kovinski-nadstreski/kovinski-nadstreski-1", w: 1600, h: 1078, widths: [400, 800, 1200, 1600], alt: "Pokrit vhod z leseno oblogo in kovinsko letveno steno pozimi" },
  ],
  "lesene-pergole": [
    { base: "/slike/lesene-pergole/lesene-pergole-hero", w: 1600, h: 1520, widths: [400, 800, 1200, 1600], alt: "Vrtna pergola iz temno lazuriranega lesa z odprtimi legami" },
    { base: "/slike/lesene-pergole/lesene-pergole-3", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Lesena pergola s prosojno kritino nad vrtno mizo" },
  ],
  "lesene-ograje": [
    { base: "/slike/lesene-ograje/lesene-ograje-hero", w: 1600, h: 1483, widths: [400, 800, 1200, 1600], alt: "Visoka lesena pregradna stena iz macesnovih letev ob dovozu" },
    { base: "/slike/lesene-ograje/lesene-ograje-1", w: 1600, h: 1304, widths: [400, 800, 1200, 1600], alt: "Lesena ograja z vodoravnimi letvami različnih razmikov" },
    { base: "/slike/lesene-ograje/lesene-ograje-7", w: 1600, h: 1412, widths: [400, 800, 1200, 1600], alt: "Navpična lesena pregrada za zasebnost ob vhodu v hišo" },
    { base: "/slike/lesene-ograje/lesene-ograje-13", w: 870, h: 742, widths: [400, 800, 870], alt: "Lesena ograja ob betonskih stopnicah in dvignjeni terasi" },
    { base: "/slike/lesene-ograje/lesene-ograje-11", w: 1600, h: 1741, widths: [400, 800, 1200, 1600], alt: "Lesena ograja ob zunanjih stopnicah stanovanjske hiše" },
    { base: "/slike/lesene-ograje/lesene-ograje-12", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Ograja iz navpičnih letev ob stopnišču in terasi" },
    { base: "/slike/lesene-ograje/lesene-ograje-8", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Skobljane macesnove letve v delavnici pred montažo ograje" },
  ],
  "balkonske-ograje": [
    { base: "/slike/balkonske-ograje/balkonske-ograje-hero", w: 1600, h: 959, widths: [400, 800, 1200, 1600], alt: "Zaobljena balkonska ograja z navpičnimi lesenimi letvami" },
    { base: "/slike/balkonske-ograje/balkonske-ograje-1", w: 1232, h: 721, widths: [400, 800, 1200, 1232], alt: "Balkonski ograji z vodoravnimi letvami na rumeni fasadi" },
    { base: "/slike/balkonske-ograje/balkonske-ograje-2", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Balkonski ograji v dveh nadstropjih z navpičnimi letvami" },
    { base: "/slike/balkonske-ograje/balkonske-ograje-5", w: 1600, h: 1213, widths: [400, 800, 1200, 1600], alt: "Zaobljen balkon z navpično leseno ograjo ob smrekah" },
    { base: "/slike/balkonske-ograje/balkonske-ograje-10", w: 1193, h: 899, widths: [400, 800, 1193], alt: "Velika balkonska terasa na kamnitih stebrih z leseno oblogo in ograjo" },
    { base: "/slike/balkonske-ograje/balkonske-ograje-9", w: 1600, h: 739, widths: [400, 800, 1200, 1600], alt: "Balkonska ograja z vodoravnimi letvami pod čelom strehe" },
    { base: "/slike/balkonske-ograje/balkonske-ograje-11", w: 1600, h: 1072, widths: [400, 800, 1200, 1600], alt: "Manjši balkon z vodoravno leseno ograjo na hiši z leseno čelno steno" },
    { base: "/slike/balkonske-ograje/balkonske-ograje-7", w: 1600, h: 881, widths: [400, 800, 1200, 1600], alt: "Steklena balkonska ograja s kovinskim okvirjem na sodobni hiši" },
    { base: "/slike/balkonske-ograje/balkonske-ograje-3", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Starejša lesena balkonska ograja z rezljanimi letvami" },
  ],
  "wpc-ograje": [
    { base: "/slike/wpc-ograje/wpc-ograje-hero", w: 1600, h: 1228, widths: [400, 800, 1200, 1600], alt: "Svetla WPC panelna ograja na podporni kamniti steni" },
    { base: "/slike/wpc-ograje/wpc-ograje-6", w: 1600, h: 1275, widths: [400, 800, 1200, 1600], alt: "Temno rjava WPC panelna ograja s kovinskimi stebri na vrtu" },
    { base: "/slike/wpc-ograje/wpc-ograje-1", w: 1600, h: 1310, widths: [400, 800, 1200, 1600], alt: "Zaobljen balkon z navpično WPC ograjo" },
    { base: "/slike/wpc-ograje/wpc-ograje-2", w: 1600, h: 1098, widths: [400, 800, 1200, 1600], alt: "WPC balkonska ograja pod leseno čelno steno" },
    { base: "/slike/wpc-ograje/wpc-ograje-12", w: 1600, h: 1117, widths: [400, 800, 1200, 1600], alt: "Terasna ograja iz WPC desk z enakomernimi razmiki" },
    { base: "/slike/wpc-ograje/wpc-ograje-9", w: 1600, h: 2123, widths: [400, 800, 1200, 1600], alt: "Dolga WPC panelna ograja ob cesti" },
    { base: "/slike/wpc-ograje/wpc-ograje-5", w: 1600, h: 739, widths: [400, 800, 1200, 1600], alt: "WPC ograja z vodoravnimi letvami pod belim čelom strehe" },
    { base: "/slike/wpc-ograje/wpc-ograje-11", w: 1600, h: 1227, widths: [400, 800, 1200, 1600], alt: "Balkonska WPC ograja z vodoravnimi letvami" },
    { base: "/slike/wpc-ograje/wpc-ograje-7", w: 1600, h: 3465, widths: [400, 800, 1200, 1600], alt: "WPC ograja ob prodnatem pasu" },
  ],
  "lesene-fasade": [
    { base: "/slike/lesene-fasade/lesene-fasade-hero", w: 1600, h: 838, widths: [400, 800, 1200, 1600], alt: "Lesena fasada iz macesna na čelni steni z okroglim oknom" },
    { base: "/slike/lesene-fasade/lesene-fasade-15", w: 1600, h: 1290, widths: [400, 800, 1200, 1600], alt: "Nova hiša z navpično macesnovo fasado in oranžnimi vhodnimi vrati" },
    { base: "/slike/lesene-fasade/lesene-fasade-21", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Čelna stena, v celoti obložena z ožganim lesom" },
    { base: "/slike/lesene-fasade/lesene-fasade-19", w: 1600, h: 1630, widths: [400, 800, 1200, 1600], alt: "Dolg objekt s temno leseno fasado in trakastim oknom" },
    { base: "/slike/lesene-fasade/lesene-fasade-7", w: 1600, h: 1394, widths: [400, 800, 1200, 1600], alt: "Vogal hiše z macesnovo fasado in nadstreškom z diagonalno oporo" },
    { base: "/slike/lesene-fasade/lesene-fasade-5", w: 1600, h: 1052, widths: [400, 800, 1200, 1600], alt: "Lesena fasada in nosilni stebri na hiši med gradnjo" },
    { base: "/slike/lesene-fasade/lesene-fasade-24", w: 1600, h: 1009, widths: [400, 800, 1200, 1600], alt: "Lesena drvarnica z macesnovo oblogo in križnimi opornicami" },
    { base: "/slike/lesene-fasade/lesene-fasade-20", w: 1600, h: 1527, widths: [400, 800, 1200, 1600], alt: "Fasada iz ožganega lesa s trakastim oknom nad dolino" },
    { base: "/slike/lesene-fasade/lesene-fasade-22", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Objekt z ožgano leseno fasado in velikim vogalnim zastekljenjem" },
    { base: "/slike/lesene-fasade/lesene-fasade-9", w: 1600, h: 1039, widths: [400, 800, 1200, 1600], alt: "Čelna stena z lesenim opažem napušča in temno obrobo" },
    { base: "/slike/lesene-fasade/lesene-fasade-23", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Posivela macesnova fasada na čelni steni z lesenim napuščem" },
    { base: "/slike/lesene-fasade/lesene-fasade-31", w: 1213, h: 1300, widths: [400, 800, 1200, 1213], alt: "Previsno nadstropje z vodoravno macesnovo oblogo med gradnjo" },
    { base: "/slike/lesene-fasade/lesene-fasade-25", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Drvarnica z macesnovo fasado in ravno streho" },
    { base: "/slike/lesene-fasade/lesene-fasade-18", w: 1600, h: 2391, widths: [400, 800, 1200, 1600], alt: "Sodobna hiša z leseno oblogo nadstropja in nadstreškom" },
    { base: "/slike/lesene-fasade/lesene-fasade-16", w: 1600, h: 1427, widths: [400, 800, 1200, 1600], alt: "Navpična lesena fasada z okni v zaključni fazi" },
    { base: "/slike/lesene-fasade/lesene-fasade-17", w: 1600, h: 1439, widths: [400, 800, 1200, 1600], alt: "Lesena obloga pokritega vhoda z oknom in vrati" },
    { base: "/slike/lesene-fasade/lesene-fasade-13", w: 1600, h: 720, widths: [400, 800, 1200, 1600], alt: "Detajl macesnove okenske police in navpične fasadne obloge" },
    { base: "/slike/lesene-fasade/lesene-fasade-3", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Detajl macesnove fasadne obloge ob napušču" },
    { base: "/slike/lesene-fasade/lesene-fasade-14", w: 1600, h: 2313, widths: [400, 800, 1200, 1600], alt: "Vgradnja okroglega okna v leseno oblogo čelne stene" },
    { base: "/slike/lesene-fasade/lesene-fasade-27", w: 1600, h: 1718, widths: [400, 800, 1200, 1600], alt: "Temna letvena obloga na fasadi nadstropja" },
    { base: "/slike/lesene-fasade/lesene-fasade-28", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Vogal hiše s temno letveno oblogo pod napuščem" },
    { base: "/slike/lesene-fasade/lesene-fasade-30", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Temna letvena obloga ob oknu na ometani fasadi" },
    { base: "/slike/lesene-fasade/lesene-fasade-26", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Svetla fasadna obloga in terasne deske v istem tonu" },
  ],
  "wpc-fasade": [
    { base: "/slike/wpc-fasade/wpc-fasade-hero", w: 849, h: 703, widths: [400, 800, 849], alt: "Rjava WPC fasadna obloga na nadstropju s trakastim oknom" },
    { base: "/slike/wpc-fasade/wpc-fasade-3", w: 1102, h: 741, widths: [400, 800, 1102], alt: "WPC fasada z vgrajenimi vrati in ravno streho" },
    { base: "/slike/wpc-fasade/wpc-fasade-2", w: 1218, h: 1544, widths: [400, 800, 1200, 1218], alt: "Vogal objekta z vodoravno WPC fasadno oblogo" },
  ],
  "leseni-stropi-opazi": [
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-hero", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Mansardni strop, obložen s smrekovimi deskami, s strešnima oknoma" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-1", w: 1600, h: 837, widths: [400, 800, 1200, 1600], alt: "Lesen opaž napušča pod globokim previsom strehe" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-9", w: 1209, h: 1197, widths: [400, 800, 1200, 1209], alt: "Opaž mansardnega stropa, speljan po obeh strešnih ploskvah do slemena" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-6", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Notranji leseni strop z vgrajeno svetlobno linijo" },
    { base: "/slike/leseni-stropi-opazi/stropi-opazi-2", w: 1600, h: 1829, widths: [400, 800, 1200, 1600], alt: "Vogalni detajl lesenega opaža napušča s temno obrobo" },
  ],
  "krovstvo-kleparstvo": [
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-hero", w: 1600, h: 1061, widths: [400, 800, 1200, 1600], alt: "Polaganje strešnikov na novo ostrešje v fazi gradnje" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-5", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Hiša z novo streho in strešnimi okni med gradnjo" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-8", w: 1600, h: 1503, widths: [400, 800, 1200, 1600], alt: "Dokončana pločevinasta streha s slemenom" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-12", w: 1600, h: 1703, widths: [400, 800, 1200, 1600], alt: "Dokončana temna strešna kritina na lesenem objektu v gozdu" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-6", w: 1600, h: 720, widths: [400, 800, 1200, 1600], alt: "Novo ostrešje s strešnimi okni in dimnikom v odru" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-14", w: 740, h: 541, widths: [400, 740], alt: "Vgradnja dveh strešnih oken v strešno ploskev" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-13", w: 1204, h: 968, widths: [400, 800, 1200, 1204], alt: "Krovca na novem ostrešju z izolacijskimi ploščami" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-3", w: 1188, h: 2576, widths: [400, 800, 1188], alt: "Dokončana temno siva streha s slemenom in kapnim robom" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-2", w: 1600, h: 738, widths: [400, 800, 1200, 1600], alt: "Strešniki, razloženi po letvah pred polaganjem" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-9", w: 1600, h: 1321, widths: [400, 800, 1200, 1600], alt: "Paropropustna folija in kontraletve na strešni ploskvi" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-11", w: 1600, h: 1290, widths: [400, 800, 1200, 1600], alt: "Detajl kapnega roba z obrobo, letvami in lesenim nosilcem" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-10", w: 1600, h: 2130, widths: [400, 800, 1200, 1600], alt: "Kleparska obroba kapnega roba iz temne pločevine" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-1", w: 1600, h: 738, widths: [400, 800, 1200, 1600], alt: "Kleparsko obrobljena ravna streha nad vhodom v hišo" },
    { base: "/slike/krovstvo-kleparstvo/krovstvo-kleparstvo-7", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Leseni objekt z letvanjem strehe in paropropustno folijo" },
  ],
  "ravne-strehe-epdm": [
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-hero", w: 1600, h: 1206, widths: [400, 800, 1200, 1600], alt: "Ravna streha z EPDM membrano na prizidku" },
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-10", w: 1200, h: 900, widths: [400, 800, 1200], alt: "Velika ravna streha z EPDM membrano nad dolino" },
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-9", w: 1600, h: 1389, widths: [400, 800, 1200, 1600], alt: "EPDM streha na lesenem vrtnem objektu" },
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-3", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "EPDM streha z obrobo okoli dimniške tuljave" },
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-6", w: 1600, h: 1202, widths: [400, 800, 1200, 1600], alt: "Zaobljen vogal ravne strehe z EPDM membrano in obrobo" },
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-1", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Položena EPDM membrana na veliki ravni strehi" },
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-7", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Zaobljen rob EPDM strehe nad vrtom" },
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-4", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Rob ravne strehe s kleparsko obrobo in EPDM membrano" },
    { base: "/slike/ravne-strehe-epdm/ravne-strehe-epdm-5", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Detajl dviga EPDM membrane do robne obrobe" },
  ],
  "vrtne-lope-ute-hiske": [
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-hero", w: 1065, h: 738, widths: [400, 800, 1065], alt: "Lesena vrtna hiška z macesnovo oblogo, letveno steno in teraso" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-27", w: 785, h: 554, widths: [400, 785], alt: "Lesena vrtna lopa z dvokapno streho in deskastimi vrati" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-3", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Vrtna lopa z veliko odprtino, opaženim stropom in teraso" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-26", w: 1070, h: 1142, widths: [400, 800, 1070], alt: "Vrtna hiška z letveno steno in leseno teraso" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-20", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Vrtna hiška z dokončanim ostrešjem in kritino" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-5", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Vrtna lopa s pločevinasto stranico in leseno oblogo" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-2", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Vrtna lopa z navpično leseno oblogo in odprtino za vrata" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-25", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "Notranjost vrtne hiške z vidnimi legami in opaženim stropom" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-14", w: 1600, h: 1460, widths: [400, 800, 1200, 1600], alt: "Ostrešje vrtne hiške z nadstreškom nad vhodom" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-11", w: 1600, h: 1619, widths: [400, 800, 1200, 1600], alt: "Montaža strešnih leg na vrtni hiški" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-10", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Postavljanje sten vrtne hiške v gozdu" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-9", w: 1600, h: 1503, widths: [400, 800, 1200, 1600], alt: "Prva stena lesene hiške na betonski plošči v gozdu" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-7", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Pripravljeni stenski elementi vrtne hiške pred postavitvijo" },
    { base: "/slike/vrtne-lope-ute-hiske/vrtne-lope-1", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Gradnja vrtne lope — stene iz plošč in strešne letve" },
  ],
  "stopnice": [
    { base: "/slike/stopnice/stopnice-wpc-1", w: 1159, h: 869, widths: [400, 800, 1159], alt: "Zunanje stopnice in pot iz WPC desk ob hiši" },
    { base: "/slike/stopnice/stopnice-wpc-2", w: 1600, h: 2133, widths: [400, 800, 1200, 1600], alt: "WPC stopnice do dvignjene terase s pregrado" },
  ],
  "visoke-grede": [
    { base: "/slike/visoke-grede/tople-grede-2", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Dve visoki gredi iz vodoravnih macesnovih letev na vrtu" },
    { base: "/slike/visoke-grede/tople-grede-1", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Visoka greda iz macesnovih letev med izdelavo" },
    { base: "/slike/visoke-grede/tople-grede-3", w: 1600, h: 1200, widths: [400, 800, 1200, 1600], alt: "Notranjost visoke grede z zaščitno čepasto folijo" },
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
