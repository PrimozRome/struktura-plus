# -*- coding: utf-8 -*-
"""
Razporeditev fotografij po storitvenih podstraneh.

Ključ = mapa v public/slike/ IN hkrati slug storitve — heroFoto(slug) in
fotoZa(slug) v images.ts se nanju vežeta, zato se morata ujemati z imeni
datotek v src/content/services/.

Vrednost = seznam parov (ime izvirnika brez .jpg, alt). **Prva v seznamu je
naslovna (hero) fotografija storitve**, ostale gredo v galerijo.

Vir: fotografije naročnika iz oktobra 2026
(~/Documents/STRUKTURA PLUS/SLIKE ZA WEBSITE ORIGINAL).
V .raw-slike so prenesene pomanjšane na 1600 px — to je zgornja meja, ki jo
cevovod sploh uporabi, zato v projektu ni razloga za 585 MB izvirnikov.
Izvirniki v polni ločljivosti ostanejo v Dokumentih.

Alt besedila so pisana po ogledu vsake posamezne fotografije; opisujejo, kaj
je na posnetku, in niso polnila s ključnimi besedami.

IZPUŠČENO NAMENOMA: kovinski-nadstreski-5, -7 in -9 so 3D vizualizacije
(SketchUp), ne posnetki izvedenih del, zato med referencami nimajo kaj iskati.
"""

GROUPS = {
  # --- Terase ---------------------------------------------------------------
  "lesene-terase": [
    ("lesene-terase-17",   "Velika lesena terasa ob hiši z razgledom na griče"),
    ("lesene-terase-23",   "Nova lesena terasa pred hišo z zelenimi polkni"),
    ("lesene-terase-5",    "Široka lesena terasa na nastavljivih podstavkih pred leseno hišo"),
    # ⚠️ Isti objekt kot wpc-terase-32 in -33 (prej lesene-terase-14 in -15), ki
    #    sta bila prepoznana kot WPC — ista siva hiša, isti jekleni steber, isti
    #    poševni vzorec desk. Material tega posnetka torej ni potrjen, zato alt
    #    ne trdi, da je terasa lesena. Čaka na odločitev naročnika.
    ("lesene-terase-hero", "Velika terasa s poševno položenimi deskami ob zastekljeni hiši"),
    ("lesene-terase-24",   "Terasa ob hiši z vrtno mizo in kamnitim žarom"),
    ("lesene-terase-2",    "Pokrita lesena terasa z lesenim stebrom in razgledom na hribe"),
    ("lesene-terase-7",    "Ozka lesena terasa ob hiši s travnato površino"),
    ("lesene-terase-9",    "Samostoječa lesena ploščad na vrtu"),
    ("lesene-terase-3",    "Terasne deske ob lesenem stebru in macesnovi fasadi"),
    ("lesene-terase-25",   "Detajl stika terasnih desk in navpične obloge v istem tonu"),
    ("lesene-terase-18",   "Ozek terasni pas ob steni hiše"),
    ("lesene-terase-10",   "Vrtna pot iz betonskih plošč in lesenih vložkov v prodnatem pasu"),
    ("lesene-terase-11",   "Pot iz plošč in lesa ob robu lesene terase"),
    ("lesene-terase-6",    "Polaganje terasnih desk ob hiši"),
    ("lesene-terase-20",   "Dvignjena terasna ploščad med polaganjem desk"),
    ("lesene-terase-19",   "Leseni nosilci podkonstrukcije terase na pobočju"),
    ("lesene-terase-21",   "Podkonstrukcija dvignjene terase pod zaščitno folijo"),
  ],
  "wpc-terase": [
    ("wpc-terase-hero", "WPC terasa ob hiši z visokimi gredami in prodnatim pasom"),
    # Prestavljeni iz lesene-terase: naročnik je potrdil, da gre za WPC.
    ("wpc-terase-33",   "WPC terasa z vrtno mizo in stoli ob zastekljeni fasadi"),
    ("wpc-terase-32",   "L-oblikovana WPC terasa ob sivi hiši s prodnatim robom"),
    ("wpc-terase-25",   "Opremljena WPC terasa z jedilno mizo in sedežno garnituro"),
    ("wpc-terase-17",   "Bazenska obloga iz WPC desk z vgrajenimi stopnicami"),
    ("wpc-terase-19",   "L-oblikovana WPC terasa s stopnico pred temno obloženo hišo"),
    ("wpc-terase-9",    "WPC terasa pod lesenim nadstreškom z zavesami"),
    ("wpc-terase-2",    "Terakotna WPC terasa s temno obrobo ob opečnem stebru"),
    ("wpc-terase-15",   "Pokrita WPC terasa pod napuščem strehe"),
    ("wpc-terase-11",   "WPC terasa pod kovinskim nadstreškom ob hiši"),
    ("wpc-terase-12",   "WPC terasa v dveh odtenkih pod nadstreškom"),
    ("wpc-terase-27",   "WPC terasa ob hiši s kamnito oblogo in cvetjem"),
    ("wpc-terase-29",   "Temno rjava WPC terasa ob zastekljeni fasadi"),
    ("wpc-terase-22",   "Velika WPC terasa na dvorišču med hišama"),
    ("wpc-terase-23",   "WPC terasa s senčnikom ob temni ograji"),
    ("wpc-terase-30",   "WPC terasa z visokimi gredami in peskovnikom"),
    ("wpc-terase-18",   "WPC obloga bazena z dostopnimi vrati med okrasnimi travami"),
    ("wpc-terase-24",   "WPC stopnice do dvignjene terase s pregrado"),
    ("wpc-terase-31",   "WPC stopnice in pot ob hiši s prodnatim robom"),
    ("wpc-terase-4",    "WPC terasa pod senčnikom z jeklenično ograjo"),
    ("wpc-terase-14",   "Položene WPC deske ob steni hiše"),
  ],

  # --- Nadstreški -----------------------------------------------------------
  "nadstreski-za-avto": [
    ("nadstresek-za-avto-hero", "Leseni nadstrešek za avto s križno opaženo stranico in ravno streho"),
    ("nadstresek-za-avto-2",    "Križna lesena konstrukcija nadstreška za avto"),
    ("nadstresek-za-avto-3",    "Osvetljen leseni nadstrešek za avto v večernem času"),
  ],
  "leseni-nadstreski": [
    ("leseni-nadstreski-hero", "Leseni nadstrešek s poševnimi oporniki in opaženim stropom"),
    ("leseni-nadstreski-1",    "Pokrit prostor za sedenje z leseno letveno steno in mizo"),
    ("leseni-nadstreski-3",    "Leseni nadstrešek z letveno pregrado in opaženim stropom"),
    ("leseni-nadstreski-7",    "Dokončan leseni nadstrešek z opaženim stropom in kleparsko obrobo"),
    ("leseni-nadstreski-2",    "Nadstrešek z vodoravno letveno steno ob tlakovani poti"),
    ("leseni-nadstreski-11",   "Nadstrešek na lesenih stebrih ob hiši z razgledom"),
    ("leseni-nadstreski-14",   "Nadstrešek s temno prosojno kritino na oranžni hiši"),
    ("leseni-nadstreski-8",    "Nadstrešek na lesenih stebrih nad odprto teraso"),
    ("leseni-nadstreski-13",   "Pogled izpod nadstreška na opažen strop in nosilec"),
    ("leseni-nadstreski-6",    "Konstrukcija lesenega nadstreška s stebri in legami"),
    ("leseni-nadstreski-4",    "Postavljanje lesenega nadstreška ob rdeči hiši"),
    ("leseni-nadstreski-5",    "Lege nadstreška pod prosojno kritino med montažo"),
  ],
  "kovinski-nadstreski": [
    ("kovinski-nadstreski-hero", "Nadstrešek za avto s kovinskimi stebri in lesenim opažem stropa"),
    ("kovinski-nadstreski-2",    "Samostoječ dvojni nadstrešek s kovinsko konstrukcijo nad dovozom"),
    ("kovinski-nadstreski-6",    "Kovinska pergola nad leseno teraso ob sodobni hiši"),
    ("kovinski-nadstreski-10",   "Nadstrešek nad teraso s kovinsko ograjo z vodoravnimi letvami"),
    ("kovinski-nadstreski-1",    "Pokrit vhod z leseno oblogo in kovinsko letveno steno pozimi"),
  ],
  "lesene-pergole": [
    ("lesene-pergole-hero", "Vrtna pergola iz temno lazuriranega lesa z odprtimi legami"),
    ("lesene-pergole-3",    "Lesena pergola s prosojno kritino nad vrtno mizo"),
  ],

  # --- Ograje ---------------------------------------------------------------
  "lesene-ograje": [
    ("lesene-ograje-hero", "Visoka lesena pregradna stena iz macesnovih letev ob dovozu"),
    ("lesene-ograje-1",    "Lesena ograja z vodoravnimi letvami različnih razmikov"),
    ("lesene-ograje-7",    "Navpična lesena pregrada za zasebnost ob vhodu v hišo"),
    ("lesene-ograje-13",   "Lesena ograja ob betonskih stopnicah in dvignjeni terasi"),
    ("lesene-ograje-11",   "Lesena ograja ob zunanjih stopnicah stanovanjske hiše"),
    ("lesene-ograje-12",   "Ograja iz navpičnih letev ob stopnišču in terasi"),
    ("lesene-ograje-8",    "Skobljane macesnove letve v delavnici pred montažo ograje"),
  ],
  "balkonske-ograje": [
    ("balkonske-ograje-hero", "Zaobljena balkonska ograja z navpičnimi lesenimi letvami"),
    ("balkonske-ograje-1",    "Balkonski ograji z vodoravnimi letvami na rumeni fasadi"),
    ("balkonske-ograje-2",    "Balkonski ograji v dveh nadstropjih z navpičnimi letvami"),
    ("balkonske-ograje-5",    "Zaobljen balkon z navpično leseno ograjo ob smrekah"),
    ("balkonske-ograje-10",   "Velika balkonska terasa na kamnitih stebrih z leseno oblogo in ograjo"),
    ("balkonske-ograje-9",    "Balkonska ograja z vodoravnimi letvami pod čelom strehe"),
    ("balkonske-ograje-11",   "Manjši balkon z vodoravno leseno ograjo na hiši z leseno čelno steno"),
    ("balkonske-ograje-7",    "Steklena balkonska ograja s kovinskim okvirjem na sodobni hiši"),
    ("balkonske-ograje-3",    "Starejša lesena balkonska ograja z rezljanimi letvami"),
  ],
  "wpc-ograje": [
    ("wpc-ograje-hero", "Svetla WPC panelna ograja na podporni kamniti steni"),
    ("wpc-ograje-6",    "Temno rjava WPC panelna ograja s kovinskimi stebri na vrtu"),
    ("wpc-ograje-1",    "Zaobljen balkon z navpično WPC ograjo"),
    ("wpc-ograje-2",    "WPC balkonska ograja pod leseno čelno steno"),
    ("wpc-ograje-12",   "Terasna ograja iz WPC desk z enakomernimi razmiki"),
    ("wpc-ograje-9",    "Dolga WPC panelna ograja ob cesti"),
    ("wpc-ograje-5",    "WPC ograja z vodoravnimi letvami pod belim čelom strehe"),
    ("wpc-ograje-11",   "Balkonska WPC ograja z vodoravnimi letvami"),
    ("wpc-ograje-7",    "WPC ograja ob prodnatem pasu"),
  ],

  # --- Fasade in opaži ------------------------------------------------------
  "lesene-fasade": [
    ("lesene-fasade-hero", "Lesena fasada iz macesna na čelni steni z okroglim oknom"),
    ("lesene-fasade-15",   "Nova hiša z navpično macesnovo fasado in oranžnimi vhodnimi vrati"),
    ("lesene-fasade-21",   "Čelna stena, v celoti obložena z ožganim lesom"),
    ("lesene-fasade-19",   "Dolg objekt s temno leseno fasado in trakastim oknom"),
    ("lesene-fasade-7",    "Vogal hiše z macesnovo fasado in nadstreškom z diagonalno oporo"),
    ("lesene-fasade-5",    "Lesena fasada in nosilni stebri na hiši med gradnjo"),
    ("lesene-fasade-24",   "Lesena drvarnica z macesnovo oblogo in križnimi opornicami"),
    ("lesene-fasade-20",   "Fasada iz ožganega lesa s trakastim oknom nad dolino"),
    ("lesene-fasade-22",   "Objekt z ožgano leseno fasado in velikim vogalnim zastekljenjem"),
    ("lesene-fasade-9",    "Čelna stena z lesenim opažem napušča in temno obrobo"),
    ("lesene-fasade-23",   "Posivela macesnova fasada na čelni steni z lesenim napuščem"),
    ("lesene-fasade-31",   "Previsno nadstropje z vodoravno macesnovo oblogo med gradnjo"),
    ("lesene-fasade-25",   "Drvarnica z macesnovo fasado in ravno streho"),
    ("lesene-fasade-18",   "Sodobna hiša z leseno oblogo nadstropja in nadstreškom"),
    ("lesene-fasade-16",   "Navpična lesena fasada z okni v zaključni fazi"),
    ("lesene-fasade-17",   "Lesena obloga pokritega vhoda z oknom in vrati"),
    ("lesene-fasade-13",   "Detajl macesnove okenske police in navpične fasadne obloge"),
    ("lesene-fasade-3",    "Detajl macesnove fasadne obloge ob napušču"),
    ("lesene-fasade-14",   "Vgradnja okroglega okna v leseno oblogo čelne stene"),
    ("lesene-fasade-27",   "Temna letvena obloga na fasadi nadstropja"),
    ("lesene-fasade-28",   "Vogal hiše s temno letveno oblogo pod napuščem"),
    ("lesene-fasade-30",   "Temna letvena obloga ob oknu na ometani fasadi"),
    ("lesene-fasade-26",   "Svetla fasadna obloga in terasne deske v istem tonu"),
  ],
  "wpc-fasade": [
    ("wpc-fasade-hero", "Rjava WPC fasadna obloga na nadstropju s trakastim oknom"),
    ("wpc-fasade-3",    "WPC fasada z vgrajenimi vrati in ravno streho"),
    ("wpc-fasade-2",    "Vogal objekta z vodoravno WPC fasadno oblogo"),
  ],
  "leseni-stropi-opazi": [
    ("stropi-opazi-hero", "Mansardni strop, obložen s smrekovimi deskami, s strešnima oknoma"),
    ("stropi-opazi-1",    "Lesen opaž napušča pod globokim previsom strehe"),
    ("stropi-opazi-9",    "Opaž mansardnega stropa, speljan po obeh strešnih ploskvah do slemena"),
    ("stropi-opazi-6",    "Notranji leseni strop z vgrajeno svetlobno linijo"),
    ("stropi-opazi-2",    "Vogalni detajl lesenega opaža napušča s temno obrobo"),
  ],

  # --- Strehe ---------------------------------------------------------------
  "krovstvo-kleparstvo": [
    ("krovstvo-kleparstvo-hero", "Polaganje strešnikov na novo ostrešje v fazi gradnje"),
    ("krovstvo-kleparstvo-5",    "Hiša z novo streho in strešnimi okni med gradnjo"),
    ("krovstvo-kleparstvo-8",    "Dokončana pločevinasta streha s slemenom"),
    ("krovstvo-kleparstvo-12",   "Dokončana temna strešna kritina na lesenem objektu v gozdu"),
    ("krovstvo-kleparstvo-6",    "Novo ostrešje s strešnimi okni in dimnikom v odru"),
    ("krovstvo-kleparstvo-14",   "Vgradnja dveh strešnih oken v strešno ploskev"),
    ("krovstvo-kleparstvo-13",   "Krovca na novem ostrešju z izolacijskimi ploščami"),
    ("krovstvo-kleparstvo-3",    "Dokončana temno siva streha s slemenom in kapnim robom"),
    ("krovstvo-kleparstvo-2",    "Strešniki, razloženi po letvah pred polaganjem"),
    ("krovstvo-kleparstvo-9",    "Paropropustna folija in kontraletve na strešni ploskvi"),
    ("krovstvo-kleparstvo-11",   "Detajl kapnega roba z obrobo, letvami in lesenim nosilcem"),
    ("krovstvo-kleparstvo-10",   "Kleparska obroba kapnega roba iz temne pločevine"),
    ("krovstvo-kleparstvo-1",    "Kleparsko obrobljena ravna streha nad vhodom v hišo"),
    ("krovstvo-kleparstvo-7",    "Leseni objekt z letvanjem strehe in paropropustno folijo"),
  ],
  "ravne-strehe-epdm": [
    ("ravne-strehe-epdm-hero", "Ravna streha z EPDM membrano na prizidku"),
    ("ravne-strehe-epdm-10",   "Velika ravna streha z EPDM membrano nad dolino"),
    ("ravne-strehe-epdm-9",    "EPDM streha na lesenem vrtnem objektu"),
    ("ravne-strehe-epdm-3",    "EPDM streha z obrobo okoli dimniške tuljave"),
    ("ravne-strehe-epdm-6",    "Zaobljen vogal ravne strehe z EPDM membrano in obrobo"),
    ("ravne-strehe-epdm-1",    "Položena EPDM membrana na veliki ravni strehi"),
    ("ravne-strehe-epdm-7",    "Zaobljen rob EPDM strehe nad vrtom"),
    ("ravne-strehe-epdm-4",    "Rob ravne strehe s kleparsko obrobo in EPDM membrano"),
    ("ravne-strehe-epdm-5",    "Detajl dviga EPDM membrane do robne obrobe"),
  ],

  # --- Vrtni objekti --------------------------------------------------------
  "vrtne-lope-ute-hiske": [
    ("vrtne-lope-hero", "Lesena vrtna hiška z macesnovo oblogo, letveno steno in teraso"),
    ("vrtne-lope-27",   "Lesena vrtna lopa z dvokapno streho in deskastimi vrati"),
    ("vrtne-lope-3",    "Vrtna lopa z veliko odprtino, opaženim stropom in teraso"),
    ("vrtne-lope-26",   "Vrtna hiška z letveno steno in leseno teraso"),
    ("vrtne-lope-20",   "Vrtna hiška z dokončanim ostrešjem in kritino"),
    ("vrtne-lope-5",    "Vrtna lopa s pločevinasto stranico in leseno oblogo"),
    ("vrtne-lope-2",    "Vrtna lopa z navpično leseno oblogo in odprtino za vrata"),
    ("vrtne-lope-25",   "Notranjost vrtne hiške z vidnimi legami in opaženim stropom"),
    ("vrtne-lope-14",   "Ostrešje vrtne hiške z nadstreškom nad vhodom"),
    ("vrtne-lope-11",   "Montaža strešnih leg na vrtni hiški"),
    ("vrtne-lope-10",   "Postavljanje sten vrtne hiške v gozdu"),
    ("vrtne-lope-9",    "Prva stena lesene hiške na betonski plošči v gozdu"),
    ("vrtne-lope-7",    "Pripravljeni stenski elementi vrtne hiške pred postavitvijo"),
    ("vrtne-lope-1",    "Gradnja vrtne lope — stene iz plošč in strešne letve"),
  ],
  # ZAČASNO: stran Stopnice nima lastnih fotografij. Do takrat sta tu dve, ki
  # res prikazujeta stopnice — gre za isti posnetek kot wpc-terase-31 in -24,
  # le pod imenom, ki se ujema s stranjo. Ko naročnik dostavi posnetke stopnic,
  # ti dve vrstici in datoteki .raw-slike/stopnice-wpc-*.jpg odpadeta.
  "stopnice": [
    ("stopnice-wpc-1", "Zunanje stopnice in pot iz WPC desk ob hiši"),
    ("stopnice-wpc-2", "WPC stopnice do dvignjene terase s pregrado"),
  ],

  "visoke-grede": [
    ("tople-grede-2", "Dve visoki gredi iz vodoravnih macesnovih letev na vrtu"),
    ("tople-grede-1", "Visoka greda iz macesnovih letev med izdelavo"),
    ("tople-grede-3", "Notranjost visoke grede z zaščitno čepasto folijo"),
  ],

  # --- Ne-storitvene skupine (ostajajo s stare strani) ----------------------
  "o-nas": [
    ("o-nas-marko",   "Marko Pogorevc pri montaži lesenega objekta"),
    ("o-nas-montaza", "Postavljanje sten lesenega objekta v gozdu"),
    ("o-nas-druzina", "Marko Pogorevc z družino"),
  ],
  "splosno": [
    ("notranja-oprema-1", "Masivna postelja po meri iz lesa"),
    ("notranja-oprema-4", "Lesena jedilna miza po naročilu"),
    ("notranja-oprema-7", "Lesene omare po meri"),
    ("notranja-oprema-3", "Police iz masivnega lesa po meri"),
    ("notranja-oprema-9", "Masivni leseni elementi po meri"),
    ("notranja-oprema-6", "Detajl masivnega lesa — površinska obdelava"),
    ("objekti-prizidki-3", "Objekt z leseno fasado po meri"),
  ],
}
