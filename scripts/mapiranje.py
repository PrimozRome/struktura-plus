# -*- coding: utf-8 -*-
"""
Razporeditev fotografij z stare strani po storitvenih podstraneh.
Alt besedila so prevzeta s stare strani in po potrebi popravljena.
Ključ = mapa v public/slike/, vrednost = (ime izvirnika brez .jpg, alt).
"""

GROUPS = {
  "lesene-terase": [
    ("terase-12", "Lesena terasa iz sibirskega macesna ob stanovanjski hiši"),
    ("terase-13", "Zaključena lesena terasa s prehodom na vrt"),
    ("terase-11", "Montaža terasnih desk na podkonstrukcijo"),
    ("terase-5",  "Macesnova terasa s kakovostno podkonstrukcijo"),
    ("terase-7",  "Terasa z leseno ograjo in nadstreškom"),
    ("terase-8",  "Lesena terasa v naravnem okolju"),
    ("terase-4",  "Izvedba lesene terase ob bazenu"),
    ("terase-3",  "Terasa z integriranimi stopnicami iz lesa"),
    ("terase-6",  "Detajl zaključnega roba lesene terase"),
  ],
  "wpc-terase": [
    ("terase-9",  "WPC terasa z minimalnim vzdrževanjem"),
    ("terase-2",  "WPC kompozitna terasa z ravnimi linijami"),
    ("terase-10", "Terasa iz kompozitnih desk ob hiši"),
  ],
  "lesene-ograje": [
    ("ograje-3", "Sodobna pregradna stena iz lesa za zasebnost"),
    ("ograje-1", "Lesena ograja iz sibirskega macesna po meri"),
    ("ograje-4", "Lesena ograja ob terasi za zasebnost"),
    ("ograje-8", "Macesnova ograja z betonskim temeljem"),
    ("ograje-9", "Lesena ograja v vrtu po meri"),
    ("ograje-6", "Detajl spoja lesene ograje"),
  ],
  "balkonske-ograje": [
    ("ograje-2", "Balkonska ograja s kovinskim ogrodjem in leseno oblogo"),
    ("ograje-5", "WPC panelna ograja ob hiši"),
    ("ograje-7", "Kombinirana ograja iz lesa in kovine"),
  ],
  "leseni-nadstreski": [
    ("nadstreski-11", "Leseni nadstrešek nad teraso"),
    ("hero-terrace",  "Nadstrešek nad teraso z leseno konstrukcijo"),
    ("nadrstreski-9", "Leseni nadstrešek nad vhodom"),
    ("nadrstreski-6", "Sodoben nadstrešek ob hiši"),
    ("nadrstreski-5", "Lesena drvarnica z nadstreškom"),
  ],
  "nadstreski-za-avto": [
    ("nadstreski-10", "Nadstrešek za avto z leseno konstrukcijo"),
    ("nadrstreski-4", "Nadstrešek za avto — lesena konstrukcija"),
    ("nadrstreski-3", "Nadstrešek s polikarbonatno kritino"),
    ("nadrstreski-8", "Nadstrešek iz kombinacije lesa in stekla"),
  ],
  "lesene-pergole": [
    ("nadrstreski-7", "Pergola s previsno leseno konstrukcijo"),
    ("nadrstreski-2", "Pergola s kovinskim ogrodjem in leseno oblogo"),
    ("terase-7",      "Pergola nad teraso z leseno ograjo"),
  ],
  "lesene-fasade": [
    ("fasade-obloge-1", "Lesena fasada iz sibirskega macesna"),
    ("fasade-obloge-7", "Lesena fasada usklajena s teraso"),
    ("fasade-obloge-2", "Fasadne obloge na stanovanjskem objektu"),
    ("fasade-obloge-8", "Horizontalna lesena fasada"),
    ("fasade-obloge-6", "Moderna fasada z lesenimi lamelami"),
    ("fasade-obloge-4", "Kombinacija lesa in betona na fasadi"),
    ("fasade-obloge-3", "Parjeni bor kot fasadna obloga"),
    ("fasade-obloge-5", "Detajl lesene fasadne obloge"),
    ("fasade-obloge-9", "Vertikalna fasadna obloga"),
  ],
  "vrtne-lope-ute-hiske": [
    ("objekti-prizidki-1", "Leseni objekt za druženje v vrtu"),
    ("objekti-prizidki-5", "Moderna lopa z nadstreškom"),
    ("objekti-prizidki-4", "Leseni vrtni paviljon"),
    ("objekti-prizidki-6", "Lesena drvarnica z vrati"),
    ("objekti-prizidki-2", "Skeletni prizidek iz lesa"),
    ("objekti-prizidki-9", "Prizidek z lesenimi elementi"),
  ],
  "leseni-stropi-opazi": [
    ("stropi-opazi-1", "Leseni strop v dnevni sobi"),
    ("stropi-opazi-5", "Notranja lesena obloga stropa"),
    ("stropi-opazi-3", "Mansardni prostor z lesenimi stropi"),
    ("stropi-opazi-9", "Vidni leseni nosilci v prostoru"),
    ("stropi-opazi-8", "Topel leseni strop v spalnici"),
    ("stropi-opazi-2", "Vidni leseni opaž v prostoru"),
    ("stropi-opazi-4", "Detajl lesenega stropa in spojev"),
    ("stropi-opazi-6", "Tesarski leseni strop"),
  ],
  "ravne-strehe-epdm": [
    ("ep3", "Izvedba ravne strehe z EPDM membrano"),
    ("ep5", "Priprava podlage za ravno streho"),
    ("ep6", "Odvajanje vode z ravne strehe"),
    ("ep1", "EPDM ravna streha — izvedba"),
    ("ep2", "Montaža EPDM membrane na ravni strehi"),
    ("ep4", "Zaključni detajli ravne strehe EPDM"),
  ],
  "krovstvo-kleparstvo": [
    ("kk_tale", "Montaža strešne konstrukcije in kritine"),
    ("kk9",     "Strešna konstrukcija in kritina"),
    ("kk5",     "Montaža strešnih oken"),
    ("kk7",     "Obnova strehe z novo kritino"),
    ("kk8",     "Žlebovi in odvodnjavanje s strehe"),
    ("kk3",     "Odvodni sistem in žlebovi na strehi"),
  ],
  "visoke-grede": [
    ("greda-1", "Dve leseni visoki gredi iz hrastovih letev na betonskih podstavkih"),
    ("greda-2", "Lesena visoka greda z opornim ogrodjem za vzpenjavke"),
    ("greda-3", "Lesena visoka greda, zasajena z zelenjavo"),
  ],
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
