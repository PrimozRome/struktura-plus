import type { Service } from "../types";

/**
 * VISOKE GREDE — ključna beseda z največjim volumnom na celi strani.
 *
 * Razlaga izbire ključnih besed, ker je tu skušnjava največja:
 *
 * "visoke grede" ima 2.900 iskanj na mesec, "visoka greda" 1.900 in
 * "visoke grede cena" 720. Na obeh SERP-ih prevladujejo trgovine — OBI,
 * Merkur, Bauhaus, Mimovrste, Eurogarden, Kondela in Ceneje. Teh strani ne
 * prehitimo in se za glavni izraz ne pretvarjamo, da ga ciljamo.
 *
 * Ciljamo tisto, česar trgovina ne more ponuditi in kjer je težavnost 0:
 * izdelava po meri, dostava in montaža, izbira lesa. To so "lesene visoke
 * grede" (110), "lesena visoka greda" (110), "visoka greda lesena" (30),
 * "visoka lesena greda" (30), "visoka greda izdelava" (30), "visoke grede po
 * meri" (20), "visoka greda sibirski macesen" (30), "dvignjene grede" (140),
 * "dvignjena greda" (90), "visoka greda za balkon" (70) in "nizke lesene
 * grede" (20) — skupaj okoli 600 iskanj na mesec, kjer nihče nima prednosti.
 *
 * NAMERNO IZPUŠČENO:
 * - "topla greda" (1.000) — to je zaprt rastlinjak s pokrovom, ne visoka
 *   greda. Naročnik ga ne izdeluje; beseda bi privabila napačna povpraševanja.
 * - trgovinske navigacijske besede (bauhaus, obi, hofer, merkur, lidl,
 *   mimovrste, bolha ≈ 900 iskanj skupaj) — iskalec hoče točno določeno
 *   trgovino.
 * - "visoka greda iz palet" (110) — kdor to išče, gradi sam.
 * - "betonska visoka greda" (140) — drug material.
 *
 * Polnjenje in plasti ("visoka greda plasti" 260, "visoka greda sestava" 60)
 * gredo v članek v Nasvetih, ne sem: tisti SERP je v celoti informativen in
 * na njem ni nobene trgovine.
 */
export const visokeGrede: Service = {
  slug: "visoke-grede",
  navLabel: "Visoke grede",
  order: 15,
  tier: "full",
  eyebrow: "Visoke grede",
  metaTitle: "Lesene visoke grede po meri — izdelava, dostava in montaža",
  metaDescription:
    "Izdelujemo, dostavimo in montiramo lesene visoke grede po meri. Macesen, hrast ali smreka, poljubne mere, folija in drenaža. Okvirne cene objavljene.",
  h1: "Lesene visoke grede po meri",
  lead:
    "Visoke grede izdelamo po vaših merah, pripeljemo na dom in postavimo na mesto — pripravljene za polnjenje. Ker jih delamo v delavnici in ne kupujemo v paketu, se mera ravna po vašem vrtu in ne obratno: greda se lahko prilagodi dolžini terase, širini poti med gredami ali višini, pri kateri ne boste več čepeli.",
  primaryKeyword: "lesene visoke grede",
  secondaryKeywords: [
    "lesena visoka greda",
    "visoka greda lesena",
    "visoka lesena greda",
    "visoke grede po meri",
    "visoka greda izdelava",
    "dvignjene grede",
    "dvignjena greda",
    "visoka greda za balkon",
    "balkonska visoka greda",
    "nizke lesene grede",
    "visoka greda sibirski macesen",
    "vrtne grede",
    "montaža visokih gred",
  ],
  cardText: "Po meri, iz macesna, hrasta ali smreke. Izdelamo, pripeljemo in postavimo.",
  cardPrice: "od 240 €",
  sections: [
    {
      h2: "Zakaj visoka greda",
      body: [
        "Visoka greda reši tri stvari hkrati. Ne sklanjate se več do tal, kar je pri delu z vrtom razlika, ki se pozna že po prvi uri pletja. Zemlja v njej se spomladi ogreje prej kot v gredi na tleh, zato lahko sejete nekaj tednov prej. In ker zemljo prinesete vi, ni več pomembno, kakšna je podlaga pod njo — greda deluje na ilovici, na pesku in na betonskem dvorišču enako.",
        "Poleg tega je visoka greda bistveno lažja za obrambo. Polži imajo do rastlin precej daljšo pot, korenine plevela iz trave pa v gredo ne pridejo, če je dno pravilno ločeno od tal.",
        "Slaba stran je ena sama in jo je pošteno povedati: visoka greda se hitreje suši od gredice na tleh, ker jo sonce greje z vseh strani. V vročem juliju je zalivanje pogostejše, zato je smiselno vsaj eno gredo postaviti tja, kjer je popoldne senca.",
      ],
    },
    {
      h2: "Mere in višina",
      body: [
        "Širina je edina mera, ki ni stvar okusa. Greda, do katere pridete z ene strani, naj ne bo širša od 70 cm; tista, okoli katere lahko hodite, naj ne presega 120 cm. Vse čez to pomeni, da boste do sredine stopali v zemljo ali se čez gredo nagibali, kar je ravno tisto, čemur ste se hoteli izogniti.",
        "Višina je odvisna od tega, kako želite delati. 40 cm zadošča, da zemlja ni na tleh in da je greda videti urejena. 80 do 90 cm je višina, pri kateri delate stoje in se sploh ne sklanjate — to je izbira za tiste, ki jih boli hrbet, in za starejše vrtnarje. Vmesnih 60 cm je najpogostejši kompromis.",
        "Dolžina je prosta. V praksi jo določi prostor: pri gredah, daljših od približno dveh metrov in pol, dodamo vmesno ojačitev, ker pritisk mokre zemlje stranice sicer izboči navzven.",
        "Globina zemlje pri visoki gredi ni enaka njeni višini — spodnji del zapolnijo grobe plasti. Za zelenjavo s plitvimi koreninami zadošča 30 cm rodovitne zemlje, za korenje in paradižnik računajte 40 cm.",
      ],
      list: [
        "Dostop z ene strani: največ 70 cm širine",
        "Dostop z obeh strani: največ 120 cm",
        "Višina 40 cm za urejen videz, 80–90 cm za delo stoje",
        "Vmesna ojačitev pri dolžini nad 2,5 m",
        "Najmanj 30 cm rodovitne zemlje, za korenovke 40 cm",
      ],
    },
    {
      h2: "Iz katerega lesa",
      body: [
        "Visoka greda je z notranje strani stalno v stiku z vlažno zemljo, z zunanje pa na dežju in soncu. To je za les najtežja možna naloga, zato je izbira materiala tu pomembnejša kot pri terasi ali ograji.",
        "Sibirski macesen je naša najpogostejša izbira: naravno odporen, smolnat in cenovno še razumen. Hrast je trajnejši in tudi opazno dražji — smiseln je takrat, ko želite gredo, ki bo stala desetletje in več brez razmišljanja. Smreka je najcenejša in je poštena izbira, če vam ne gre za večno: z zaščitno folijo zdrži nekaj sezon, brez nje bistveno manj.",
        "Česar pri gredah ne uporabljamo, je impregniran les v stiku z zemljo, v kateri raste hrana. Tlačno impregniran les je za ograjni steber odlična rešitev, za posodo z zelenjavo pa ne — in tudi če so današnji pripravki bistveno bolj neoporečni od nekdanjih, je pri gredi to razprava, ki je ni treba imeti.",
      ],
      list: [
        "Sibirski macesen — najpogostejša izbira, dobro razmerje med ceno in trajnostjo",
        "Hrast — najtrajnejši, za grede, ki naj stojijo desetletje in več",
        "Smreka — najcenejša, smiselna z zaščitno folijo",
        "Brez impregniranega lesa v stiku z zemljo, v kateri raste hrana",
      ],
    },
    {
      h2: "Kaj naredi gredo trajno",
      body: [
        "Greda ne propade zaradi dežja od zunaj, ampak zaradi vlage od znotraj. Zato je notranjost obložena z zaščitno folijo, ki loči les od mokre zemlje, pri tem pa ne zapre dna — voda mora odtekati, sicer zemlja zastaja in korenine gnijejo.",
        "Na dno vgradimo čepasto membrano ali drenažni sloj, ki zadrži zemljo in prepusti vodo. Na travi dno dodatno zapremo z gosto mrežo proti voluharju; kdor je enkrat izgubil korenje, ve, zakaj se ta korak splača.",
        "Gredo postavimo na betonske podstavke ali plošče, tako da spodnji les ne leži v travi in se po dežju osuši. Ta en detajl podaljša življenjsko dobo bolj kot katera koli obdelava površine.",
        "Stranice sestavimo iz letev z ozko režo med njimi. Reža ni okrasna: omogoča, da se les po obeh straneh suši in da voda, ki pride za folijo, odteče namesto da bi stala v spoju.",
      ],
      list: [
        "Notranja zaščitna folija, dno ostane odprto za odtekanje",
        "Čepasta membrana ali drenažni sloj na dnu",
        "Mreža proti voluharju pri postavitvi na travo",
        "Betonski podstavki, da les ne leži v travi",
        "Reža med letvami za prezračevanje in odtekanje",
      ],
    },
    {
      h2: "Izvedbe, ki jih delamo",
      body: [
        "Poleg klasične pravokotne grede naredimo tudi izvedbe, ki jih v katalogu ni: nizke grede za jagode in dišavnice, ožje balkonske grede, ki gredo skozi vrata na teraso, in grede z opornim ogrodjem za paradižnik, kumare ali fižol.",
        "Pri več gredah v vrsti je smiselno vnaprej določiti razmik med njimi. Med dvema gredama je za udobno delo potrebnih vsaj 60 cm, za samokolnico pa 80 cm. Razmik je lažje določiti na papirju kot popravljati, ko so grede že polne zemlje in tehtajo nekaj sto kilogramov.",
        "Grede lahko tudi uskladimo z drugim lesom na vrtu — če že imate našo teraso ali ograjo, naredimo grede iz istega lesa in z istim zaključkom, da vrt deluje kot celota in ne kot zbirka posameznih nakupov.",
      ],
      list: [
        "Visoke grede 40–90 cm za delo stoje ali sede",
        "Nizke grede za jagode, dišavnice in solato",
        "Balkonske in ožje grede za terase",
        "Grede z opornim ogrodjem za vzpenjavke",
        "Usklajen les z obstoječo teraso ali ograjo",
      ],
    },
    {
      h2: "Izdelava, dostava in montaža",
      body: [
        "Gredo izdelamo v delavnici, kjer je rez natančen in kjer les lahko obdelamo z vseh strani, tudi tam, kjer po sestavljanju ne bo več dostopa. Na vrt pripeljemo že sestavljeno ali v elementih, odvisno od velikosti in dostopa.",
        "Montaža na mestu pomeni, da gredo poravnamo, podstavimo in uredimo dno — folijo, drenažo in mrežo. Predamo jo pripravljeno za polnjenje; zemlje in polnila ne dobavljamo, ker se ju bistveno ceneje in sveže dobi pri lokalnem dobavitelju, mi pa bi ju le preprodali.",
        "Postavitev ene grede vzame uro do dve, pri več gredah hkrati manj na kos. Če greda stoji na travi, priporočamo, da je trava pod njo prej pokošena do tal — pod gredo namreč ne bo več prišel nihče.",
      ],
      list: [
        "Izdelava v delavnici, obdelava lesa z vseh strani",
        "Dostava na dom, sestavljeno ali v elementih",
        "Postavitev, poravnava in priprava dna",
        "Predaja pripravljena za polnjenje",
      ],
    },
    {
      h2: "Cena visoke grede",
      body: [
        "Manjša greda iz smreke se začne pri približno 240 €, greda iz sibirskega macesna v pogosti meri 200 × 80 × 60 cm znese okoli 450 do 600 €, hrastova izvedba pa je približno za tretjino dražja od macesnove.",
        "Na ceno najbolj vplivajo vrsta lesa, prostornina grede in višina — višja greda ne pomeni le več letev, ampak tudi močnejše vogalnike, ker pritisk mokre zemlje na stranice narašča s kvadratom višine.",
        "Dostava in montaža sta všteti pri naročilu dveh ali več gred; pri eni sami se obračunata posebej, ker je pot enaka ne glede na to, koliko jih peljemo. Zato je pri načrtovanju smiselno naročiti vse grede naenkrat, tudi če jih boste polnili postopoma.",
      ],
    },
  ],
  price: {
    range: "od 240 €",
    includes:
      "Spodnja meja velja za manjšo gredo iz smreke. Greda iz sibirskega macesna v meri 200 × 80 × 60 cm znese okoli 450 do 600 €. Cena vključuje izdelavo, zaščitno folijo in pripravo dna; zemlja in polnilo nista vključena.",
    factors: [
      "Vrsta lesa — smreka na spodnji meji, hrast na zgornji",
      "Mera in višina grede",
      "Število gred — dostava in montaža sta všteti pri dveh ali več",
      "Dodatki — oporno ogrodje, mreža proti voluharju, pokrov",
    ],
  },
  faq: [
    {
      q: "Koliko stane lesena visoka greda?",
      a: "Manjša greda iz smreke od približno 240 €, greda iz sibirskega macesna v meri 200 × 80 × 60 cm okoli 450 do 600 €, hrastova približno za tretjino več. Cena vključuje izdelavo, zaščitno folijo in pripravo dna; zemlja ni vključena. Dostava in montaža sta všteti pri dveh ali več gredah.",
    },
    {
      q: "Kako visoka naj bo visoka greda?",
      a: "Odvisno od tega, kako želite delati. 40 cm zadošča za urejen videz in za to, da zemlja ni na tleh; pri 80 do 90 cm delate stoje in se sploh ne sklanjate. Najpogostejši kompromis je 60 cm. Rodovitne zemlje naj bo najmanj 30 cm, za korenovke 40 cm.",
    },
    {
      q: "Kako široka naj bo greda?",
      a: "Če pridete do nje z ene strani, največ 70 cm. Če lahko hodite naokoli, največ 120 cm. Širša greda pomeni, da boste do sredine stopali v zemljo ali se čez njo nagibali.",
    },
    {
      q: "Iz katerega lesa izdelujete visoke grede?",
      a: "Najpogosteje iz sibirskega macesna, ki je naravno odporen in cenovno razumen. Hrast je trajnejši in dražji, smreka najcenejša. Impregniranega lesa v stiku z zemljo, v kateri raste hrana, ne uporabljamo.",
    },
    {
      q: "Ali gredo tudi dostavite in postavite?",
      a: "Da. Gredo izdelamo v delavnici, pripeljemo na dom in postavimo na mesto — poravnamo, podstavimo in uredimo dno s folijo, drenažo in po potrebi mrežo proti voluharju. Predamo jo pripravljeno za polnjenje.",
    },
    {
      q: "Ali dobavite tudi zemljo in polnilo?",
      a: "Ne. Zemljo in polnilo se bistveno ceneje in sveže dobi pri lokalnem dobavitelju, mi pa bi ju le preprodali. Povemo pa vam, koliko ga potrebujete in v kakšnem vrstnem redu ga naložiti.",
    },
    {
      q: "Koliko časa zdrži lesena visoka greda?",
      a: "Odvisno od lesa in od tega, kako je narejeno dno. Macesnova greda z zaščitno folijo, drenažo in postavljena na podstavke tipično zdrži deset let in več; smrekova brez folije bistveno manj. Največ odloči to, ali spodnji les leži v travi ali ne.",
    },
    {
      q: "Ali izdelujete tudi nizke in balkonske grede?",
      a: "Da. Nizke grede za jagode in dišavnice ter ožje balkonske izvedbe, ki gredo skozi vrata na teraso. Mere prilagodimo prostoru.",
    },
  ],
  offers: [
    "Lesene visoke grede po meri",
    "Nizke grede za jagode in dišavnice",
    "Balkonske in ožje vrtne grede",
    "Grede z opornim ogrodjem za vzpenjavke",
    "Dostava in montaža visokih gred",
  ],
  woods: ["Sibirski macesen", "Hrast", "Smreka"],
  related: ["vrtne-lope-ute-hiske", "lesene-ograje", "lesene-terase"],
  heroAlt:
    "Leseni visoki gredi iz hrastovih letev na betonskih podstavkih — izvedba Struktura Plus",
};
