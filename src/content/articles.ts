import type { Article } from "./types";

/**
 * NASVETI
 * Temeljni članek o vrstah lesa je pripet na vrh in nima vidnega datuma objave.
 * Nanj se povezuje vseh dvanajst storitvenih strani — to je njegova glavna naloga,
 * ne promet: za "les za terase" devet od desetih mest držijo trgovci z lesom.
 */

export const articles: Article[] = [
  {
    slug: "vrste-lesa-za-zunanjo-uporabo",
    cornerstone: true,
    pinned: true,
    topic: "Material",
    readMinutes: 9,
    fotoGroup: "lesene-terase",
    title: "Vrste lesa za zunanjo uporabo",
    metaTitle: "Katere vrste lesa za teraso, ograjo in fasado — primerjava",
    metaDescription:
      "Primerjava vrst lesa za zunanjo uporabo: macesen, akacija, cumaru, ipe, termoles in WPC. Trajnost, življenjska doba, vzdrževanje in cena.",
    excerpt:
      "Gostota, razred trajnosti in pričakovana življenjska doba desetih materialov, ki jih uporabljamo za terase, ograje in fasade — v eni tabeli.",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    targets: [
      "les za terase",
      "les za teraso",
      "kakšen les nadstrešek",
      "cena lesa za nadstrešek",
      "dimenzije lesa za nadstrešek",
      "macesen uporaba",
      "evropski macesen",
      "akacija les",
      "robinija les",
      "tik les za teraso",
      "premaz za sibirski macesen",
      "osmo olje za macesen",
      "sibirski macesen cena m2",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Za večino teras, ograj in fasad v Sloveniji je najboljše razmerje med ceno in trajnostjo sibirski macesen. Kjer je izpostavljenost večja — polno sonce, bazen, obalno podnebje — se izplača cumaru ali ipe. Kjer vzdrževanje ni mogoče, WPC.",
          "Spodnja tabela je namenjena primerjavi, ne prodaji. Lesa ne prodajamo; navajamo vrednosti, po katerih se odločamo pri načrtovanju.",
        ],
      },
      {
        h2: "Kaj pomeni razred trajnosti",
        body: [
          "Razred trajnosti po standardu EN 350 pove, kako dobro les brez zaščite prenese glive in vlago. Razred 1 pomeni zelo trajen, razred 5 netrajen. Za zunanjo uporabo brez stika z zemljo je razred 1 do 3 zadovoljiv, za stik z zemljo pa razred 1 ali obdelan les.",
          "Gostota je drugi pokazatelj: gostejši les je trši, manj vpija vodo in manj dela trske, a je težji za obdelavo in dražji.",
        ],
      },
      {
        h2: "Primerjalna tabela",
        body: [
          "Vrednosti so povprečja za suh les pri približno 12 odstotkih vlage. Cenovni razred je relativna primerjava med materiali, ne cena na trgu.",
        ],
      },
      {
        h2: "Domači macesen ali sibirski",
        body: [
          "Evropski macesen raste tudi pri nas in je praviloma cenejši od sibirskega, pot od gozda do gradbišča pa je krajša. Za ograjo, fasado pod napuščem ali konstrukcijo, ki ni ves dan na dežju, je to razumen prihranek.",
          "Razlika ni v vrsti drevesa, ampak v tem, kako hitro je raslo. Sibirski macesen raste v mrazu počasi, zato ima ozke letnice, več smolnate jedrovine in manj beljave — je gostejši in trajnejši. Domači zraste hitreje, ima širše letnice, več grč in več beljave, ki ni odporna. V standardu EN 350 se to pozna kot razred 3–4 namesto 3, v praksi pa kot nekaj let krajša življenjska doba.",
          "Naše priporočilo: na terasi in na južni fasadi, kjer dež in sonce delata vsak dan, se razlika v ceni povrne. Pri ograji, drvarnici in vseh zaščitenih legah je domači macesen boljša izbira, ker za polovico manjšo ceno dobite les, ki bo tam prav tako zdržal. Pri fasadi je dobro vedeti še eno stvar: domači ima več grč, kar je vidno na velikih ploskvah in je vprašanje okusa, ne kakovosti.",
        ],
      },
      {
        h2: "Akacija in tik: kdaj se izplačata",
        body: [
          "Akacija, ki ji pri nas pravimo tudi robinija, je najtrajnejši les, ki raste v Sloveniji — razred 1 do 2, brez vsakega premaza zdrži 25 do 30 let. Zveni kot očitna izbira, pa v praksi ni. Med sušenjem se močno zvija, zato je iz nje težko dobiti dolge ravne deske; je izjemno trda, kar pomeni predvrtanje vsake luknje in počasnejšo montažo; in kljub temu da raste tik za ovinkom, se prodaja po ceni tropskega lesa. Zato se pri ponudbi pogosto pokaže, da za isti denar dobite cumaru, ki je bolj stabilen in ga je lažje vgraditi.",
          "Tik je po odpornosti vrh — naravna olja mu dajo razred 1 in najboljšo dimenzijsko stabilnost med vsemi. Je tudi najdražji. Večina tika na trgu danes prihaja s plantaž in ni enak počasi raslemu lesu iz naravnih sestojev, cena pa temu ne sledi navzdol. Zato ga v Sloveniji vidimo predvsem pri vrtnem pohištvu in na ladjah, na terasah redko, na fasadah praktično nikoli.",
          "Obe vrsti torej znata vse, kar se od zunanjega lesa pričakuje. Pošten pogovor pa ni o tem, ali sta dobri, ampak proti čemu ju primerjamo: pri obeh se pri enakem znesku dobi cumaru ali ipe s primerljivo življenjsko dobo, ali pa sibirski macesen na dvakrat večji površini. Pri nas ju vgradimo, če ju želite — povemo pa tudi, kdaj razlika v ceni ne kupi razlike v trajanju.",
        ],
      },
      {
        h2: "Kateri les za kaj",
        list: [
          "Terasa na senci ali polsenci — sibirski macesen ali termoobdelan les",
          "Terasa, kjer želite domač les najvišjega razreda — akacija (robinija)",
          "Terasa na polnem soncu ali ob bazenu — cumaru ali ipe",
          "Ograja in pregradna stena — domači macesen, sibirski ali WPC za nizko vzdrževanje",
          "Fasada — sibirski macesen ali termoobdelan les",
          "Nosilna konstrukcija nadstreška — smreka ali lepljen les, vidni deli macesen",
          "Notranji strop in opaž — smreka, jelka, macesen ali hrast",
        ],
      },
      {
        h2: "Vzdrževanje in premazi",
        body: [
          "Olje prodre v les in ga hrani od znotraj; lazura naredi tanek film na površini. Za terase priporočamo olje, ker se ne lušči in ga je mogoče obnoviti brez brušenja. Za ograje in fasade deluje tudi lazura, če je premaz redno obnovljen.",
          "Sibirski macesen brez premaza posivi v enakomerno srebrno patino. To ni propadanje — je UV razgradnja površinske plasti, globoke nekaj desetink milimetra. Če želite ohraniti topel ton, nanesite olje enkrat na eno do dve leti, najbolje spomladi po čiščenju.",
          "Novega lesa ne premazujte takoj. Počakajte, da se površina po montaži nekoliko odpre — običajno štiri do osem tednov — sicer olje ne prodre.",
        ],
      },
      {
        h2: "Dimenzije, ki jih uporabljamo",
        list: [
          "Terasne deske: 21 mm pri razmiku nosilcev do 40 cm, 27 mm do 60 cm",
          "Podkonstrukcija terase: 45 × 70 mm ali aluminij enakega prereza",
          "Fasadna obloga: 19–21 mm debeline, širina do 145 mm zaradi zvijanja",
          "Stebri nadstreška: 120 × 120 mm za enojni, 140 × 140 mm za dvojni razpon",
          "Ograjne letve: 20 × 90 mm ali 27 × 70 mm glede na želeno senco",
        ],
      },
    ],
    faq: [
      {
        q: "Kateri les je najboljši za teraso?",
        a: "Sibirski macesen za večino primerov — dobra odpornost pri razumni ceni. Cumaru in ipe sta dražja, a praktično ne delata trsk in zdržita desetletja tudi brez premazov; smiselna sta ob bazenu in na polnem soncu.",
      },
      {
        q: "Je domači macesen slabši od sibirskega?",
        a: "Ni slabši, je pa manj trajen, ker hitreje raste — širše letnice, več grč in več beljave pomenijo razred 3–4 namesto 3 in nekaj let krajšo dobo. Na zaščitenih legah, pri ograjah in drvarnicah je zaradi nižje cene boljša izbira; na terasi in južni fasadi se sibirski povrne.",
      },
      {
        q: "Se splača akacija ali tik?",
        a: "Oba sta v razredu 1 do 2 in zdržita desetletja, oba pa staneta toliko kot cumaru ali ipe. Akacija se med sušenjem zvija in je redko na voljo v dolgih ravnih deskah, tik pa je večinoma plantažni. Če je cena odločilna, za isti denar dobite stabilnejši tropski les ali dvakrat več sibirskega macesna.",
      },
      {
        q: "Zakaj macesen posivi?",
        a: "Zaradi UV razgradnje površinske plasti, globoke nekaj desetink milimetra. Les pod njo ostane nedotaknjen in terasa zdrži enako dolgo. Če vam siva ni všeč, nanesite olje enkrat na eno do dve leti.",
      },
      {
        q: "Kdaj prvič naoljiti novo teraso?",
        a: "Ne takoj po montaži. Počakajte štiri do osem tednov, da se površina odpre, sicer olje ne prodre. Prej teraso samo operite z vodo.",
      },
      {
        q: "Kakšna debelina terasnih desk je dovolj?",
        a: "21 mm pri razmiku nosilcev do 40 cm, 27 mm do 60 cm. Prevelik razmik pri tanki deski je najpogostejša napaka pri cenenih izvedbah in se pokaže kot pruženje pod nogami.",
      },
    ],
    related: ["lesene-terase", "lesene-fasade", "lesene-ograje", "lesene-pergole", "balkonske-ograje", "vrtne-lope-ute-hiske"],
  },
  {
    slug: "gradbeno-dovoljenje-za-nadstresek",
    pinned: true,
    topic: "Dovoljenja",
    readMinutes: 6,
    fotoGroup: "nadstreski-za-avto",
    title: "Ali za nadstrešek potrebujete gradbeno dovoljenje?",
    metaTitle: "Ali za nadstrešek potrebujete gradbeno dovoljenje?",
    metaDescription:
      "Kdaj je nadstrešek enostaven objekt, kdaj potrebujete soglasje soseda in kaj pomenijo odmiki od meje in od ceste. Kaj preveriti pred naročilom.",
    excerpt:
      "Kdaj je nadstrešek enostaven objekt, kdaj potrebujete soglasje soseda in kaj pomenijo odmiki od parcelne meje.",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    targets: [
      "gradbeno dovoljenje za nadstrešek",
      "gradbeno dovoljenje za nadstrešek za avto",
      "nadstrešek brez gradbenega dovoljenja",
      "nadstrešek odmik od ceste",
      "nadstrešnice",
      "gradbeno dovoljenje za nadstrešnico",
      "kdaj potrebujem soglasje za nadstrešek",
      "terasa gradbeno dovoljenje",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Za manjši nadstrešek pri stanovanjski hiši v večini primerov gradbeno dovoljenje ni potrebno, ker se obravnava kot enostaven objekt. Odločilne so tri številke: tlorisna površina, višina in odmik od parcelne meje.",
          "Ker meje določa občinski prostorski akt in se med občinami razlikujejo, je edini zanesljiv odgovor tisti, ki ga dobite na svoji občini. Spodaj je opisano, kaj preveriti in kaj vprašati.",
        ],
      },
      {
        h2: "Kaj je enostaven objekt",
        body: [
          "Enostaven objekt je manjša konstrukcija, za katero ni potrebno gradbeno dovoljenje, mora pa biti skladna s prostorskim aktom. Nadstrešek za avto, nadstrešek nad vhodom in manjša vrtna lopa v to skupino praviloma sodijo.",
          "Skladnost s prostorskim aktom pomeni, da objekt ustreza predpisanim odmikom, višini in deležu pozidanosti parcele. Če katera od teh omejitev ni izpolnjena, objekt ni več enostaven, tudi če je majhen.",
        ],
      },
      {
        h2: "Odmik od parcelne meje",
        body: [
          "To je najpogostejši zaplet. Prostorski akti običajno zahtevajo določen odmik objekta od sosednje parcele. Če želite postaviti bližje, potrebujete pisno soglasje soseda.",
          "Soglasje priporočamo pridobiti pred naročilom, ne po njem. Sosed, ki soglasja ne da, lahko postavljen objekt prijavi, in odstranitev je bistveno dražja od premika načrta za pol metra.",
        ],
      },
      {
        h2: "Odmik od ceste",
        body: [
          "Ob javni cesti veljajo dodatni odmiki, ki jih določa cestno podjetje ali občina, in so pogosto večji od odmikov od sosednje parcele. Pri objektih ob regionalni ali državni cesti je potrebno soglasje upravljavca.",
          "Preverite tudi preglednost pri izvozu — nadstrešek, ki zakrije pogled na cesto, lahko postane sporen tudi, če formalno ustreza odmiku.",
        ],
      },
      {
        h2: "Kaj vprašati na občini",
        list: [
          "Katera vrsta objekta velja za našo parcelo kot enostaven objekt",
          "Največja dovoljena tlorisna površina in višina",
          "Najmanjši odmik od parcelne meje in od ceste",
          "Največji dovoljeni delež pozidanosti parcele",
          "Ali je parcela v območju s posebnim varstvenim režimom",
        ],
      },
      {
        h2: "Kaj naredimo mi",
        body: [
          "Postopka na občini ne vodimo namesto vas, ker je vezan na lastnika. Ob ogledu pa izmerimo dejanske odmike, pripravimo skico z merami in vam povemo, kje je meja, ki bi jo predlagana izvedba prekoračila.",
          "Če se izkaže, da želena velikost ni izvedljiva brez dovoljenja, predlagamo varianto, ki v okvir sodi.",
        ],
      },
    ],
    related: ["nadstreski-za-avto", "leseni-nadstreski", "vrtne-lope-ute-hiske", "lesene-pergole"],
  },
  {
    slug: "les-ali-wpc",
    pinned: true,
    topic: "Material",
    readMinutes: 7,
    fotoGroup: "wpc-terase",
    title: "Les ali WPC: primerjava po šestih kriterijih",
    metaTitle: "Les ali WPC — primerjava za teraso in ograjo",
    metaDescription:
      "Les ali WPC za teraso in ograjo: videz, vzdrževanje, cena v desetih letih, segrevanje na soncu, popravljivost in življenjska doba. Kdaj se splača kateri.",
    excerpt:
      "Videz, vzdrževanje, cena v desetih letih, segrevanje na soncu in popravljivost — kdaj se splača kateri material.",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    targets: ["wpc terasa", "wpc ograje", "les ali wpc", "wpc deske za teraso", "wpc plošče"],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Les izberite, če vam je pomemben videz in vas vzdrževanje ne moti. WPC izberite, če je površina težko dostopna, če vzdrževanja ne boste opravljali ali če po terasi hodijo bosi otroci.",
          "Razlika v ceni ob nakupu je približno 20 do 30 odstotkov v korist lesa. V desetih letih se, če vzdrževanje štejete kot strošek, izenači.",
        ],
      },
      {
        h2: "Videz",
        body: [
          "Les ima nepredvidljivo teksturo in se s časom spreminja. Nekomu je to glavna vrednost, drugemu težava. WPC je enoten in ostane tak, kot je bil ob nakupu — kar je prednost za tiste, ki želijo mirno površino brez presenečenj.",
        ],
      },
      {
        h2: "Vzdrževanje",
        body: [
          "Lesena terasa potrebuje čiščenje enkrat letno in oljenje vsako do vsako drugo leto, če želite ohraniti ton. WPC potrebuje samo pranje. Pri ograji na višjem balkonu je razlika največja, ker je dostop za vzdrževanje zamuden.",
        ],
      },
      {
        h2: "Cena v desetih letih",
        body: [
          "Pri terasi 30 m² je razlika v nakupu približno 600 do 1.200 €. Oljenje lesene terase stane približno 4 do 8 € na m² materiala in dan dela vsaki dve leti. V desetih letih se stroška izenačita — če delo opravljate sami, les ostane cenejši.",
        ],
      },
      {
        h2: "Segrevanje na soncu",
        body: [
          "WPC se na neposrednem soncu segreje bolj kot les, temne barve bolj kot svetle. Če je terasa v celoti na južni strani brez sence, to upoštevajte pri izbiri barve ali predvidite senčenje.",
        ],
      },
      {
        h2: "Popravljivost",
        body: [
          "Les je mogoče pobrusiti in praske izginejo. WPC-ja ni mogoče pobrusiti — globlja praska ostane. To je pri WPC glavna slabost in razlog, da pod stole priporočamo podložke.",
        ],
      },
      {
        h2: "Življenjska doba",
        body: [
          "Ob pravilni podkonstrukciji oba materiala zdržita 20 let in več. Odločilna ni površina, ampak kaj je pod njo — podkonstrukcija in prezračevanje. Zato je pri obeh materialih smiselno vprašati izvajalca, kaj bo pod deskami, ne samo kaj bo na njih.",
        ],
      },
    ],
    related: ["lesene-terase", "wpc-terase", "lesene-ograje", "balkonske-ograje"],
  },
  {
    slug: "koliko-stane-lesena-terasa",
    pinned: false,
    topic: "Cene",
    readMinutes: 8,
    fotoGroup: "lesene-terase",
    title: "Koliko stane lesena terasa",
    metaTitle: "Koliko stane lesena terasa — cena na m² po vrsti lesa",
    metaDescription:
      "Iz česa je sestavljena cena lesene terase: material, podkonstrukcija, montaža in pripravljalna dela. Okvirni razponi na m² po vrstah lesa in kaj ceno dvigne.",
    excerpt:
      "Iz česa je sestavljena cena na kvadratni meter, kje so razlike med vrstami lesa in katere postavke ljudje najpogosteje spregledajo.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "cena lesene terase",
      "koliko stane lesena terasa",
      "cena terase na m2",
      "cena macesnove terase",
      "lesena terasa cena m2",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Lesena terasa s podkonstrukcijo in montažo stane okvirno od 90 do 190 € na kvadratni meter. Spodnja meja pomeni sibirski macesen z vidnim privijanjem na leseni podkonstrukciji, zgornja tropski les, kot sta cumaru ali ipe, s skritim pritrjevanjem na nastavljivih podstavkih.",
          "Razpon je širok, ker cena terase ni cena desk. Deske so pogosto manj kot polovica zneska. Ostalo so podkonstrukcija, pritrdilni material, priprava podlage, zaključni robovi in delo.",
        ],
      },
      {
        h2: "Iz česa je sestavljena cena",
        body: [
          "Ko primerjate dve ponudbi, primerjajte te postavke. Če jih ponudba ne razčleni, ni mogoče vedeti, kaj je ceneje.",
        ],
        list: [
          "Terasne deske — od približno 35 €/m² za sibirski macesen do 110 €/m² in več za ipe.",
          "Podkonstrukcija — grede, distančniki in prezračevalni razmik; okvirno 15 do 30 €/m².",
          "Pritrdilni material — nerjavni vijaki ali skriti sistem sponk; skriti sistem podraži za 10 do 20 €/m².",
          "Priprava podlage — betonske plošče, nastavljivi podstavki ali gramozna blazina; odvisno od stanja terena.",
          "Zaključki — obroba, prehodi, stopnice, izrezi okoli odtokov in stebrov.",
          "Montaža — običajno 25 do 45 €/m², odvisno od zahtevnosti oblike in dostopa.",
        ],
      },
      {
        h2: "Kaj ceno dvigne bolj, kot ljudje pričakujejo",
        body: [
          "Oblika. Pravokotna terasa je najcenejša na kvadratni meter. Vsak vogal, izrez in polkrožni rob pomeni več razreza, več odpadka in več časa.",
          "Stopnice. Ena stopnica po celotni širini terase lahko stane toliko kot več kvadratnih metrov tlaka, ker ima svojo nosilno konstrukcijo in tri vidne strani.",
          "Višina nad tlemi. Terasa 15 cm nad ploščo je preprosta. Terasa 80 cm nad brežino potrebuje nosilno konstrukcijo, ograjo in dostop, kar ni več terasa, ampak majhen objekt.",
          "Dostop. Če materiala ni mogoče pripeljati do mesta vgradnje, se čas montaže podaljša.",
        ],
      },
      {
        h2: "Kje se prihranek ne izplača",
        body: [
          "Pri podkonstrukciji. Premajhen razmik med gredami se pozna kot mehak občutek pod nogo, prevelik razmik pa kot upogib desk že v prvem letu. Za večino terasnih desk debeline 21 mm je razmik 40 do 50 cm, za tanjše manj.",
          "Pri prezračevanju. Deska, ki se ne more sušiti s spodnje strani, se zvija in razpoka, ne glede na to, kateri les je. Zračni sloj pod podkonstrukcijo in odmik od tal sta pogoj za življenjsko dobo, ne dodatek.",
          "Pri vijakih. Navadni vijaki na zunanjem lesu pustijo črne sledi po prvi zimi. Nerjavna izvedba stane nekaj več in se vidi deset let.",
        ],
      },
      {
        h2: "Kako pride do številke v ponudbi",
        body: [
          "Po ogledu izmerimo dejansko površino, preverimo podlago in odmike ter zapišemo, kaj je vključeno. Ponudba je razdeljena po postavkah zgoraj, da je razvidno, kaj je material in kaj delo. Okvirni razponi za vse storitve so objavljeni na strani Cenik — namenjeni so temu, da se pred ogledom uskladi pričakovanje o cenovnem razredu.",
        ],
      },
    ],
    faq: [
      {
        q: "Je macesnova terasa res dovolj trpežna?",
        a: "Sibirski macesen je v razredu trajnosti 3 po EN 350, kar ob pravilni podkonstrukciji in prezračevanju pomeni okvirno 20 do 25 let. Odloči se pod deskami, ne pri izbiri vrste lesa.",
      },
      {
        q: "Koliko prihranim, če teraso montiram sam?",
        a: "Delo je okvirno tretjina do polovica zneska, torej je prihranek realen. Tveganje je v podkonstrukciji in odtekanju vode — to sta napaki, ki se pokažeta šele po dveh letih in se popravita samo z razgradnjo.",
      },
      {
        q: "Ali cena vključuje odvoz stare terase?",
        a: "Pri nas je odstranitev in odvoz posebna postavka, ker se obseg zelo razlikuje. Če je stara podkonstrukcija zdrava, jo je včasih mogoče ohraniti, kar zniža ceno.",
      },
    ],
    related: ["lesene-terase", "wpc-terase"],
  },
  {
    slug: "vzdrzevanje-lesene-terase",
    pinned: false,
    topic: "Vzdrževanje",
    readMinutes: 7,
    fotoGroup: "lesene-terase",
    title: "Vzdrževanje lesene terase: kdaj brušenje, kdaj oljenje",
    metaTitle: "Vzdrževanje lesene terase — oljenje, brušenje in čiščenje",
    metaDescription:
      "Kdaj teraso samo očistiti, kdaj naoljiti in kdaj pobrusiti. Kateri premaz za sibirski macesen, kako pogosto in kaj storiti s sivino in zelenimi oblogami.",
    excerpt:
      "Kdaj zadošča čiščenje, kdaj je čas za olje in kdaj se je treba lotiti brušenja — po opaznih znakih, ne po koledarju.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "vzdrževanje lesene terase",
      "oljenje lesene terase",
      "premaz za sibirski macesen",
      "osmo olje za macesen",
      "brušenje lesene terase",
      "čiščenje lesene terase",
    ],
    sections: [
      {
        h2: "Trije posegi in kdaj kateri",
        body: [
          "Vzdrževanje lesene terase se zdi bolj zapleteno, kot je. So trije posegi, ki se razlikujejo po tem, koliko dela zahtevajo in kaj rešijo.",
        ],
        list: [
          "Čiščenje — enkrat ali dvakrat letno, spomladi in pred zimo. Metla, voda in mehka krtača.",
          "Oljenje — vsako do vsako drugo leto, ko se voda na deski ne zbira več v kapljice, ampak se takoj vpije.",
          "Brušenje — vsakih pet do deset let ali ko je površina razpokana in groba na dotik.",
        ],
      },
      {
        h2: "Kdaj je čas za olje",
        body: [
          "Najbolj zanesljiv test je kozarec vode. Če kapljica ostane na površini, je zaščita še v redu. Če se vpije v nekaj sekundah in les potemni, je olje izrabljeno.",
          "Olje nanesite na suho in čisto teraso pri temperaturi nad 10 °C in ne na neposrednem soncu, ker se takrat posuši prehitro in ostanejo sledi. Dva tanka nanosa sta boljša od enega debelega, odvečno olje pa je treba po 20 do 30 minutah pobrisati, drugače postane lepljivo.",
          "Za sibirski macesen uporabljamo olja na osnovi naravnih olj s pigmentom. Pigment ni kozmetika — je zaščita pred UV žarki, ki les sivijo. Brezbarvno olje ščiti pred vlago, ne pa pred sivenjem.",
        ],
      },
      {
        h2: "Sivina ni napaka",
        body: [
          "Vsak zunanji les sčasoma posivi. To je površinski pojav v zgornjem delu milimetra in ne vpliva na nosilnost ali trajnost. Če vam je srebrno siva patina ljuba, terase ni treba oljiti — potrebuje pa čiščenje, da se na njej ne naselijo alge.",
          "Če želite ohraniti topel odtenek lesa, je oljenje s pigmentom edini način in ga je treba ponavljati. Odločitev je estetska, ne tehnična.",
        ],
      },
      {
        h2: "Zelene obloge in spolzkost",
        body: [
          "Zelena prevleka je alga in pomeni, da se na tistem mestu voda predolgo zadržuje. Najprej preverite vzrok: zamašena reža med deskami, listje pod teraso, premajhen naklon ali senca cel dan.",
          "Čistilo za les odstrani algo, a se vrne, dokler vzrok ostaja. Reže med deskami je treba vsako jesen sprostiti, listje pod teraso pa pobrati — tam je največ vlage in tudi tam se terase najprej pokvarijo.",
        ],
      },
      {
        h2: "Česa ne uporabljati",
        list: [
          "Visokotlačnega čistilnika na kratki razdalji — dvigne vlakna in površina se po tem umaže hitreje.",
          "Klora in belil — razgradijo lignin in les postane sivo mehak.",
          "Lakov in lazur, ki tvorijo film — na terasi se film odlušči in za popravilo je treba vse pobrusiti.",
          "Preprog in gumijastih podlog, ki ostanejo na deski celo leto — pod njimi les ostane moker.",
        ],
      },
      {
        h2: "Kdaj brušenje in kdaj menjava",
        body: [
          "Brušenje je smiselno, dokler je deska dovolj debela in podkonstrukcija zdrava. Odvzame se nekaj desetink milimetra, površina se odpre in ponovno naoljí. Terasa po tem izgleda kot nova in postopek je bistveno cenejši od zamenjave.",
          "Menjava je potrebna, ko so deske razpokane po celotni debelini, ko se vijaki ne držijo več ali ko je podkonstrukcija trhla. Če ste v dvomih, vam ob ogledu povemo, katera od dveh možnosti je smiselna — tudi kadar je za nas manjši posel.",
        ],
      },
    ],
    faq: [
      {
        q: "Kako pogosto je treba naoljiti teraso?",
        a: "Praviloma vsako do vsako drugo leto. Odloča lega: terasa na južni strani brez sence potrebuje olje vsako leto, senčna terasa pod nadstreškom pa lahko vzdrži tri leta.",
      },
      {
        q: "Ali je treba novo teraso takoj naoljiti?",
        a: "Da, najbolje v prvih tednih po montaži, ko je les še svež. Prvi nanos je tisti, ki največ prispeva k barvni obstojnosti.",
      },
      {
        q: "Se WPC terasa vzdržuje enako?",
        a: "Ne. WPC se ne olji in ne brusi, potrebuje pa enako čiščenje in sproščanje rež. Zato je vzdrževanje res minimalno, a popravilo poškodbe praktično ni mogoče.",
      },
    ],
    related: ["lesene-terase", "wpc-terase"],
  },
  {
    slug: "koliko-stane-nadstresek-za-avto",
    pinned: false,
    topic: "Cene",
    readMinutes: 6,
    fotoGroup: "nadstreski-za-avto",
    title: "Koliko stane nadstrešek za avto",
    metaTitle: "Koliko stane nadstrešek za avto — cena za eno in dve mesti",
    metaDescription:
      "Okvirne cene lesenega nadstreška za avto za eno in dve parkirni mesti, iz česa je sestavljena cena in kaj vpliva na temelje in kritino.",
    excerpt:
      "Okvirni znesek za eno in za dve parkirni mesti, kaj prinesejo temelji in kritina ter zakaj sta dva nadstreška enake velikosti lahko različno draga.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "cena nadstreška za avto",
      "koliko stane nadstrešek za avto",
      "leseni nadstrešek za avto cena",
      "nadstrešek za dva avtomobila cena",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Leseni nadstrešek za eno parkirno mesto, okvirno 3 × 5 m, s konstrukcijo, kritino in montažo se začne pri približno 2.900 €, z zahtevnejšimi izvedbami do okoli 4.500 €. Za dve mesti, okvirno 6 × 5 m, je razpon približno 4.500 do 8.000 €. Temelji se obračunajo posebej, ker se po lokacijah preveč razlikujejo.",
          "Dve mesti nista dvakrat dražji od enega, ker se stebri, orodje in prihod delijo. Na kvadratni meter je večji nadstrešek praviloma ugodnejši.",
        ],
      },
      {
        h2: "Kaj je v ceni",
        list: [
          "Temelji — betonski točkovni temelji in jeklena sidra, ki steber dvignejo nad tla.",
          "Nosilna konstrukcija — stebri, vezi in špirovci iz smrekovega lameliranega ali masivnega lesa.",
          "Kritina — pločevina, bitumenski skodli, polikarbonat ali steklo; razlika med najcenejšo in najdražjo je lahko 1.500 € pri isti konstrukciji.",
          "Odvodnjavanje — žlebovi in odtočne cevi, po potrebi priklop na obstoječi sistem.",
          "Površinska obdelava — lazura ali olje v dveh nanosih.",
          "Montaža in prevoz materiala.",
        ],
      },
      {
        h2: "Zakaj sta dva enako velika nadstreška različno draga",
        body: [
          "Snežna obtežba. Ta se po Sloveniji zelo razlikuje in določa presek špirovcev in razmik med njimi. Nadstrešek v Zasavju in nadstrešek enakih mer na Jezerskem nista ista konstrukcija.",
          "Način prizidave. Samostoječi nadstrešek stoji na štirih ali šestih stebrih. Nadstrešek, prislonjen na hišo, ima na eni strani sidranje v fasado, kar pomeni predrtje izolacije in skrbno tesnjenje — manj lesa, več natančnega dela.",
          "Podlaga. Če je pod predvidenimi temelji že betonska plošča, so temelji preprostejši. Če je nasuto ali brežina, je treba kopati globlje.",
          "Naklon in odtok vode. Ravna streha z EPDM membrano je drugačna postavka kot enokapnica s pločevino.",
        ],
      },
      {
        h2: "Na kaj misliti pred ponudbo",
        body: [
          "Izmerite dolžino in širino avtomobila z odprtimi vrati, ne le gabarite. Za udobno uporabo sta za eno mesto smiselni širina vsaj 3 m in dolžina 5 m, za dve mesti širina 6 m.",
          "Preverite odmik od parcelne meje in od ceste — o tem več v članku o gradbenem dovoljenju. Odmik je pogosto tisto, kar določi končno velikost.",
          "Če boste kdaj pod nadstrešek napeljali elektriko za polnilnico, je ceneje, da se cev položi ob gradnji temeljev.",
        ],
      },
    ],
    faq: [
      {
        q: "Je kovinski nadstrešek cenejši od lesenega?",
        a: "Pri najpreprostejših tipskih izvedbah je kovinski pogosto cenejši, pri nadstreških po meri se razlika izgubi. Les je hvaležnejši, kadar mora biti nadstrešek usklajen s fasado ali ograjo.",
      },
      {
        q: "Koliko časa traja postavitev?",
        a: "Temelji potrebujejo teden dni, da dovolj vežejo, sama montaža konstrukcije in kritine pa običajno dva do tri dni.",
      },
      {
        q: "Ali lahko nadstrešek postavim na obstoječo betonsko ploščo?",
        a: "Pogosto da, če je plošča dovolj debela in nosilna. Ob ogledu preverimo debelino in način sidranja, ker sidro v premalo nosilno ploščo je najpogostejša napaka pri samogradnji.",
      },
    ],
    related: ["nadstreski-za-avto", "leseni-nadstreski"],
  },
  {
    slug: "dimenzije-lesa-za-nadstresek",
    pinned: false,
    topic: "Material",
    readMinutes: 7,
    fotoGroup: "leseni-nadstreski",
    title: "Kakšne dimenzije lesa za nadstrešek",
    metaTitle: "Dimenzije lesa za nadstrešek — stebri, špirovci, razmiki",
    metaDescription:
      "Običajni preseki stebrov, vezi in špirovcev pri lesenem nadstrešku, kako na dimenzijo vplivata razpon in snežna obtežba ter kje se prihranek ne izplača.",
    excerpt:
      "Kateri preseki stebrov in špirovcev se pri nadstreških uporabljajo najpogosteje in zakaj sta razpon in snežna obtežba pomembnejša od tabele.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "dimenzije lesa za nadstrešek",
      "kakšen les za nadstrešek",
      "presek špirovcev nadstrešek",
      "debelina stebrov nadstrešek",
    ],
    sections: [
      {
        h2: "Najprej poštena opomba",
        body: [
          "Dimenzije lesa za nadstrešek niso stvar navade, ampak izračuna. Odločata razpon med podporami in snežna obtežba na lokaciji, ki se po Sloveniji razlikuje za večkratnik. Spodnje številke so tiste, ki jih v praksi vidimo najpogosteje pri nadstreških do približno 6 m razpona v nižinskem delu — ne pa nadomestilo za statični pregled pri večjih razponih ali v snežnih območjih.",
        ],
      },
      {
        h2: "Stebri",
        body: [
          "Pri nadstreških do višine približno 2,5 m in razponu do 5 m so najpogostejši preseki 12 × 12 cm in 14 × 14 cm. Presek 10 × 10 cm se sicer uporablja, vendar pri daljših razponih izgleda tanek in konstrukcija deluje nestabilno, tudi če računsko zdrži.",
          "Steber nikoli ne sme stati neposredno na betonu. Jeklena noga, ki ga dvigne 3 do 5 cm nad tla, je najcenejši del nadstreška in hkrati tisti, ki najbolj podaljša njegovo življenjsko dobo — spodnji prerez je edini, ki vpija vodo po vlaknih.",
        ],
      },
      {
        h2: "Vezi in nosilci",
        body: [
          "Vzdolžna vez, ki povezuje stebre in nosi špirovce, je pri razponih do 4 m običajno 12 × 20 cm ali 14 × 20 cm. Pri razponih nad 4,5 m se namesto masivnega lesa pogosto uporabi lamelirani les (BSH), ki pri enakem preseku prenese več in se manj zvija.",
        ],
      },
      {
        h2: "Špirovci in razmiki",
        body: [
          "Za špirovce so najpogostejši preseki 8 × 16 cm, 8 × 18 cm in 10 × 20 cm, pri razmikih od 70 do 90 cm.",
          "Med presekom in razmikom je izmenjava: tanjši špirovci na manjšem razmiku ali močnejši na večjem. Pri vidni konstrukciji, kjer je špirovec del videza, se pogosto izbere močnejši presek na večjem razmiku, ker je slika mirnejša.",
        ],
        list: [
          "Pločevinasta kritina — najlažja, dovoljuje večje razmike.",
          "Bitumenski skodli na opažu — potreben polni opaž, torej gostejši razmik.",
          "Polikarbonat in steklo — steklo je bistveno težje in zahteva svojo podkonstrukcijo.",
        ],
      },
      {
        h2: "Vrsta lesa za konstrukcijo",
        body: [
          "Za nosilno konstrukcijo nadstreška se v Sloveniji najpogosteje uporablja smreka — tehnično sušena na vlažnost okoli 15 % in skobljana. Za vidne dele, ki so izpostavljeni dežju, je macesen trpežnejši, a dražji in bolj nagnjen k smolenju.",
          "Sveže žagan les iz bližnje žage je cenejši in za konstrukcijo slaba izbira: med sušenjem se skrči in zvije, spoji se odprejo in vijaki popustijo. Razlika v ceni se izgubi pri prvem popravilu.",
        ],
      },
      {
        h2: "Kje se prihranek ne izplača",
        list: [
          "Pri jeklenih nogah stebrov in sidrih — najcenejša postavka z največjim vplivom na trajnost.",
          "Pri debelini opaža pod kritino — premehak opaž se med hojo po strehi udira.",
          "Pri površinski obdelavi pred montažo — po montaži do nekaterih ploskev ni več dostopa.",
          "Pri žlebovih — voda, ki pada s strehe ob steber, ga uniči prej kot karkoli drugega.",
        ],
      },
    ],
    faq: [
      {
        q: "Ali za nadstrešek potrebujem statični izračun?",
        a: "Za manjše nadstreške pri stanovanjski hiši praviloma ne, ker gre za enostavne objekte. Pri večjih razponih, v snežnih območjih ali pri sidranju v fasado pa je pregled smiseln — tudi če ni formalno zahtevan.",
      },
      {
        q: "Kaj pomeni oznaka C24 na lesu?",
        a: "To je trdnostni razred konstrukcijskega lesa po standardu. Za nosilne dele nadstreška je C24 običajna izbira, saj pomeni, da je les razvrščen in preverjen, ne le razžagan.",
      },
      {
        q: "Lahko uporabim tanjše stebre, če jih postavim več?",
        a: "Načeloma da in računsko je to pogosto v redu, vendar več stebrov pomeni manj prostora za manevriranje z avtom. Pri nadstreških za avto je razpon vreden nekaj več lesa.",
      },
    ],
    related: ["leseni-nadstreski", "nadstreski-za-avto", "lesene-pergole"],
  },
  {
    slug: "zascita-lesene-fasade",
    topic: "Vzdrževanje",
    readMinutes: 8,
    fotoGroup: "lesene-fasade",
    title: "Kako zaščititi leseno fasado: premazi, patina in obnova",
    metaTitle: "Zaščita lesene fasade — premazi, patina in obnova",
    metaDescription:
      "Tri poti za leseno fasado: pustiti, da posivi, pigmentiran premaz ali predhodno siv premaz. Kdaj je čas za obnovo, kako jo izvesti in kaj lesu škodi.",
    excerpt:
      "Ali leseno fasado sploh je treba premazovati, kdaj je čas za obnovo in zakaj sivina ni okvara, ampak odločitev.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "zaščita lesene fasade",
      "premaz za leseno fasado",
      "obnova lesene fasade",
      "lazura za leseno fasado",
      "olje za leseno fasado",
      "siva patina les",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Lesena fasada ne potrebuje premaza, da bi zdržala. Potrebuje ga, če želite ohraniti barvo. To je celotna razlika in vredno jo je razumeti pred nakupom, ker od nje visi, koliko dela vas čaka naslednjih dvajset let.",
          "Poti so tri: pustiti, da fasada posivi sama, obnavljati pigmentiran premaz vsaki dve do štiri leta, ali že na začetku nanesti premaz sive barve, ki staranje izenači. Vsaka je pravilna, vsaka pa je druga obljuba glede vzdrževanja.",
        ],
      },
      {
        h2: "Zakaj les posivi",
        body: [
          "Sončni UV žarki razgradijo lignin, snov, ki v lesu povezuje vlakna. Razgrajena plast se izpere z dežjem in ostane srebrno siva površina, globoka nekaj desetink milimetra. Les pod njo je nedotaknjen.",
          "To torej ni gniloba in ne propadanje. Trajnost lesene fasade odloči prezračevana konstrukcija za oblogo, ne premaz na njej. Fasada iz sibirskega macesna brez vsakega premaza zdrži enako dolgo kot premazana, le drugače izgleda.",
          "Kar pa dela premaz, je nekaj drugega: upočasni vlaženje in sušenje, zato se les manj razteza in krči, manj razpoka in manj deloma odstopi okoli grč. To je resničen, a postopen učinek, ne pogoj za obstanek.",
        ],
      },
      {
        h2: "Tri poti in kaj katera pomeni",
        list: [
          "Brez premaza — nič vzdrževanja, fasada v dveh do treh letih posivi, sprva neenakomerno",
          "Pigmentirano olje ali lazura — topel ton lesa ostane, obnova vsaki 2 do 4 leta, odvisno od lege",
          "Predhodno siv premaz — siva od prvega dne in enakomerna, obnova približno vsakih 5 let",
        ],
        body: [
          "Tretja pot je tista, ki jo ljudje najmanj poznajo, in pogosto najbolj ustreza. Sivi premaz ne poskuša ustaviti staranja, ampak ga posnema — zato razlika med osončeno in senčno stranjo, ki sivenje sicer naredi opazno, sploh ne nastane.",
        ],
      },
      {
        h2: "Zakaj fasada ne posivi enakomerno",
        body: [
          "Sivenje potrebuje sonce in dež. Na južni in zahodni steni je oboje, zato ta strani posivita najhitreje. Severna stena, ploskve pod napuščem in pasovi nad okenskimi policami ostanejo dlje topli, ker dežja tja preprosto ne pride.",
          "Rezultat je hiša, ki je z ene strani srebrna, z druge pa še vedno medena. Če vas to moti, je odgovor sivi premaz na začetku, ne pa poznejše popravljanje — dosivevanje s premazom je bistveno težje kot izenačenje od prvega dne.",
        ],
      },
      {
        h2: "Kdaj je čas za obnovo",
        body: [
          "Koledar je slab pokazatelj, ker je razlika med južno in severno steno lahko dve leti. Zanesljivejši so znaki na sami fasadi.",
        ],
        list: [
          "Voda se na deski ne zbira več v kapljice, ampak se takoj vpije",
          "Barva je na osončenih delih opazno bledejša kot pod napuščem",
          "Površina je na otip groba in dviguje vlakna",
          "Okoli grč in na spojih se pojavljajo drobne razpoke",
        ],
      },
      {
        h2: "Kako obnovimo premaz",
        body: [
          "Najprej čiščenje: mehka krtača, voda in po potrebi čistilo za les, ki odstrani alge in prah. Visokotlačnega čistilnika z bližine ne uporabljamo, ker dvigne vlakna in površina se po tem umaže hitreje, kot se je prej.",
          "Fasada mora biti popolnoma suha, zato po pranju počakamo dva do tri dni. Premaz nanašamo pri temperaturi nad 10 °C in ne na neposrednem soncu — na vroči deski se posuši, preden se razlije, in ostanejo sledi čopiča.",
          "Dva tanka nanosa sta boljša od enega debelega. Pri oljih odvečno olje po 20 do 30 minutah pobrišemo, sicer ostane lepljivo in nase veže prah.",
          "Če je stara zaščita lazura, ki se lušči, je pred nanosom potrebno brušenje do zdrave podlage. Prav zato na fasadah priporočamo olja in odprte lazure — ker se ne luščijo in obnova ne zahteva brušenja.",
        ],
      },
      {
        h2: "Kaj lesu škodi",
        list: [
          "Laki in debeloslojne lazure, ki naredijo film — ta poči in pod njim ostane vlaga",
          "Visokotlačni čistilnik z bližine",
          "Klor in belila, ki razgradijo lignin in pustijo sivo mehko površino",
          "Zemlja, grmovje ali naslonjena drva ob spodnjem robu fasade, kjer mora biti zračna reža",
          "Zaprta prezračevalna reža spodaj ali zgoraj — takrat noben premaz ne pomaga",
        ],
      },
    ],
    faq: [
      {
        q: "Ali je treba novo leseno fasado takoj premazati?",
        a: "Če želite ohraniti barvo, da — najbolje v prvih tednih po montaži. Prvi nanos najbolj vpliva na to, kako dolgo bo ton obstal. Če ste se odločili za sivo patino, ne premazujte nič.",
      },
      {
        q: "Kako pogosto je treba obnoviti premaz na fasadi?",
        a: "Pigmentirano olje ali lazura vsaki dve do štiri leta, sivi premaz približno vsakih pet. Na južni in zahodni steni na spodnji meji, na severni in pod napuščem na zgornji.",
      },
      {
        q: "Ali lahko sivo fasado spet spravim v prvotno barvo?",
        a: "Deloma. S čistilom za les in brušenjem se sivina odstrani, ker je globoka le nekaj desetink milimetra, vendar je to na celotni hiši veliko dela in rezultat ni nikoli povsem enak novemu lesu.",
      },
      {
        q: "Je fasada brez premaza slabša izbira?",
        a: "Ne. Trajnost odloči prezračevana konstrukcija za oblogo, ne premaz. Fasada brez premaza je manj dela in enako zdrži, le srebrno siva postane.",
      },
    ],
    related: ["lesene-fasade", "lesene-terase"],
  },
  {
    slug: "najboljsi-cas-za-izvedbo",
    topic: "Načrtovanje",
    readMinutes: 6,
    fotoGroup: "lesene-terase",
    title: "Kdaj v letu je najboljši čas za postavitev terase ali nadstreška",
    metaTitle: "Kdaj postaviti teraso ali nadstrešek — najboljši čas v letu",
    metaDescription:
      "Kaj v resnici omejuje termin izvedbe: zmrzal pri betoniranju, vlažnost lesa pri montaži in čakalna doba spomladi. Kdaj oddati povpraševanje za pomlad.",
    excerpt:
      "Montaža je mogoča skoraj vse leto. Omejujeta jo dve stvari — beton pri zmrzali in čakalna doba spomladi — in obe je mogoče načrtovati.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "kdaj postaviti teraso",
      "najboljši čas za izvedbo terase",
      "montaža terase pozimi",
      "kdaj postaviti nadstrešek",
      "čakalna doba terasa",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Terase in nadstreške postavljamo vse leto. Edino pravo tehnično omejitev prinese zmrzal, in še ta zadeva samo betonska dela. Vse ostalo — konstrukcija, deske, kritina, kleparski zaključki — je izvedljivo tudi pozimi.",
          "Če bi morali izbrati eno obdobje, bi bilo to zgodnja jesen: les je po poletju v ravnovesju, temperature še dopuščajo oljenje, terminov pa je bistveno več kot maja.",
        ],
      },
      {
        h2: "Kaj res omejuje zima",
        body: [
          "Beton. Pod približno 5 °C vezanje močno upočasni, pri zmrzali pa voda v svežem betonu zmrzne in struktura se poruši — temelj izgleda dokončan, nosilnosti pa nima. Zato pri trajni zmrzali točkovnih temeljev ne betoniramo, razen z zimskimi dodatki in zaščito, kar podraži.",
          "Če temelji že obstajajo ali se sidramo v obstoječo betonsko ploščo, ta omejitev odpade in je januar enako dober kot junij.",
          "Druga zimska omejitev je premaz: olja in lazure potrebujejo temperaturo nad 10 °C in suho podlago. Zato pozimi montiramo, oljenje pa prestavimo na pomlad. To ni slabo — les se v tem času tako ali tako umiri.",
        ],
      },
      {
        h2: "Vlažnost lesa je pomembnejša od meseca",
        body: [
          "Terasne deske se z vlago raztezajo in krčijo prečno na vlakna. Če v vročem in suhem juliju položimo zelo suhe deske s tesnimi režami, se te čez zimo navlažijo, nabreknejo in reže se zaprejo — voda potem ne odteka.",
          "Če pa deske vgradimo mokre pozno jeseni, se čez poletje posušijo in reže se razprejo bolj, kot je lepo.",
          "Zato razmik med deskami prilagodimo stanju lesa ob montaži, ne tabeli. To je detajl, po katerem se prepozna izvedba, in je razlog, da lesa ne dostavljamo teden prej na dvorišče pod folijo.",
        ],
      },
      {
        h2: "Čakalna doba je pravi razlog za zgodnje povpraševanje",
        body: [
          "Povpraševanja se v Sloveniji začnejo kopičiti marca, ko se ljudje prvič usedejo ven in ugotovijo, da bi bilo lepo imeti teraso. Takrat je čakalna doba najdaljša v letu.",
          "Od potrditve ponudbe do montaže mine običajno tri do šest tednov. Če želite teraso uporabljati maja, je povpraševanje smiselno oddati februarja. Za jesensko uporabo nadstreška zadošča junij.",
          "Ogled in ponudba sta mogoča kadarkoli, tudi pozimi, in nista vezana na termin izvedbe. Marsikatera stranka ogled opravi januarja, izvedbo pa naroči za april — takrat ima izbiro termina in ne obratno.",
        ],
      },
      {
        h2: "Po mesecih",
        list: [
          "Januar–februar — ogledi, ponudbe, montaža na obstoječih temeljih; najmanj čakanja",
          "Marec–maj — največ povpraševanj, najdaljša čakalna doba, idealne razmere",
          "Junij–avgust — vse mogoče; pri vročini oljenje zgodaj zjutraj ali zvečer",
          "September–oktober — po naši izkušnji najboljše okno: razmere in termini hkrati",
          "November–december — montaža da, betoniranje odvisno od vremena, oljenje spomladi",
        ],
      },
    ],
    faq: [
      {
        q: "Ali je mogoče teraso postaviti pozimi?",
        a: "Da, če temelji že obstajajo ali se sidramo v obstoječo ploščo. Nove točkovne temelje pri trajni zmrzali odsvetujemo, ker beton ne veže pravilno. Oljenje v vsakem primeru prestavimo na pomlad.",
      },
      {
        q: "Kdaj moram oddati povpraševanje, da bo terasa gotova maja?",
        a: "Februarja. Ogled uskladimo v tednu dni, od potrditve ponudbe do montaže pa mine tri do šest tednov — spomladi prej šest kot tri.",
      },
      {
        q: "Je pozna jesen slab čas za montažo?",
        a: "Ni, pogosto je celo najboljši. Terminov je več, les je v ravnovesju, edino oljenje počaka na pomlad.",
      },
    ],
    related: ["lesene-terase", "leseni-nadstreski", "nadstreski-za-avto", "lesene-fasade", "krovstvo-kleparstvo", "ravne-strehe-epdm"],
  },
  {
    slug: "nadstresek-za-toplotno-crpalko",
    topic: "Oprema",
    readMinutes: 6,
    fotoGroup: "leseni-nadstreski",
    title: "Nadstrešek za toplotno črpalko: zakaj se splača",
    metaTitle: "Nadstrešek za toplotno črpalko — zakaj in kakšne mere",
    metaDescription:
      "Pred čim nadstrešek zunanjo enoto toplotne črpalke res zaščiti, koliko prostora mora ostati za pretok zraka in katere napake zmanjšajo učinkovitost.",
    excerpt:
      "Pred čim nadstrešek zunanjo enoto res zaščiti, česa ne reši in koliko prostora mora ostati, da ne škodi bolj, kot koristi.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "nadstrešek za toplotno črpalko",
      "streha za toplotno črpalko",
      "zaščita zunanje enote toplotne črpalke",
      "nadstrešek za klimo",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Nadstrešek nad zunanjo enoto je smiseln, a ne iz razloga, ki ga navadno pričakujemo. Enota je narejena za delo na prostem in dež ji ne škodi. Škodijo ji sneg, ki se nabere na pokrovu, led, ki pozimi kaplja s strešnega roba naravnost nanjo, listje v ventilatorju in poletno sonce na ohišju.",
          "Pošteno pa je povedati tudi, česa nadstrešek ne naredi: ne zniža računa za elektriko v kakšni opazni meri in ne utiša naprave. Kar naredi, je daljša življenjska doba lamel in manj odtaljevalnih ciklov v snegu.",
        ],
      },
      {
        h2: "Pred čim ščiti",
        list: [
          "Sneg na pokrovu, ki obtežuje ohišje in ob taljenju zamaka elektroniko",
          "Led in voda, ki kaplja s strehe ali z napušča naravnost na enoto",
          "Listje in iglice, ki se naberejo v uparjalniku in zmanjšajo pretok zraka",
          "Poletno sonce na ohišju, ki dvigne temperaturo okolice pri hlajenju",
          "Toča",
        ],
      },
      {
        h2: "Najpomembnejše pravilo: zrak mora skozi",
        body: [
          "Toplotna črpalka deluje tako, da skozi uparjalnik potegne veliko količino zraka. Če ji ta zrak omejimo, pade učinkovitost, naprava pa dela dlje za isti učinek. Nadstrešek, ki je prenizek ali zaprt s strani, torej naredi več škode kot koristi.",
          "Zato ga izvedemo brez stranskih sten, razen če proizvajalec izrecno dovoli, in dovolj visoko nad enoto. Vsak proizvajalec predpiše svoje najmanjše odmike — nad enoto, pred izpihom in za zajemom — in ti so za nas merodajni. Če navodil nimate, jih pred ogledom poiščite ali nam pošljite oznako modela.",
          "Druga pogosta napaka je nadstrešek, ki zrak z izpiha vrača nazaj v zajem. Naprava potem hladi zrak, ki ga je sama ohladila, in pozimi se to pokaže kot pogostejše odtaljevanje.",
        ],
      },
      {
        h2: "Kakšne mere",
        list: [
          "Streha naj sega vsaj 20 cm čez enoto na vsako stran, da voda kaplja mimo",
          "Prosta višina nad enoto po navodilih proizvajalca, praviloma vsaj 30 cm",
          "Pred izpihom naj ostane prosto najmanj toliko, kot zahteva proizvajalec",
          "Brez stranskih sten; če je zaslon nujen zaradi videza, naj bo lamelni in odmaknjen",
          "Naklon strešine stran od stene, z žlebom, če kapljanje moti",
        ],
      },
      {
        h2: "Kaj je pod enoto",
        body: [
          "Pri ogrevanju zunanja enota izloča kondenz, pozimi tudi vodo od odtaljevanja. Ta voda mora nekam — pod enoto zato pripravimo gramozno posteljico ali odtok, sicer se pozimi tvori ledena gomila, ki sčasoma sega do enote same.",
          "Enota naj bo dvignjena od tal na konzolah ali podstavku, dovolj visoko, da je pod njo tudi ob snegu prostor. Nadstrešek in dvignjen podstavek delujeta v paru; sam nadstrešek problema pod enoto ne reši.",
        ],
      },
      {
        h2: "Kako ga naredimo",
        body: [
          "Izvedemo ga kot majhno leseno konstrukcijo, prislonjeno na steno ali samostoječo, s kritino po izbiri — največkrat pločevina ali prosojni polikarbonat. Les uskladimo z ostalimi elementi na hiši, da naprava ni videti kot naknadno pokrpana.",
          "Enako izvedbo pogosto naredimo tudi za hiško robotske kosilnice, za smetnjake in za kolesa, saj gre za isto konstrukcijo v drugem merilu.",
        ],
      },
    ],
    faq: [
      {
        q: "Ali nadstrešek izboljša učinkovitost toplotne črpalke?",
        a: "Neposredno ne bistveno. Posredno da: manj snega in ledu pomeni manj odtaljevalnih ciklov pozimi, senca pa poleti pri hlajenju nekoliko zniža temperaturo okolice. Glavna korist je daljša življenjska doba enote, ne nižji račun.",
      },
      {
        q: "Ali lahko zunanjo enoto zaprem v omarico?",
        a: "Odsvetujemo. Zaprta omarica omeji pretok zraka in vrača ohlajen zrak nazaj v zajem, kar zniža učinkovitost. Če je zakrivanje nujno, naredimo lamelni zaslon z režami in z odmikom po navodilih proizvajalca.",
      },
      {
        q: "Ali nadstrešek zmanjša hrup?",
        a: "Ne. Hrup nastane v ventilatorju in kompresorju, trda ploskev nad enoto pa zvok lahko celo odbije. Za hrup so rešitev protihrupni zasloni in postavitev, ne nadstrešek.",
      },
      {
        q: "Koliko stane tak nadstrešek?",
        a: "Manjši nadstrešek nad zunanjo enoto se začne pri približno 450 €, odvisno od mer, kritine in načina pritrditve. Natančno ceno določimo po ogledu.",
      },
    ],
    related: ["leseni-nadstreski", "vrtne-lope-ute-hiske"],
  },
  {
    slug: "polnjenje-visoke-grede",
    // Namerno ni pripet: povpraševanje po visokih gredah je izrazito sezonsko in
    // smo zdaj v najnižji točki leta. Pred pomladjo ga velja pripeti na vrh.
    pinned: false,
    topic: "Načrtovanje",
    readMinutes: 7,
    fotoGroup: "visoke-grede",
    title: "Kako napolniti visoko gredo",
    metaTitle: "Polnjenje visoke grede — plasti od dna do vrha",
    metaDescription:
      "Katere plasti gredo v visoko gredo in v kakšnem vrstnem redu: veje, listje, kompost in zemlja. Koliko materiala potrebujete in kaj vanjo ne sodi.",
    excerpt:
      "Štiri plasti od dna do vrha, izračun potrebne količine in razlaga, zakaj se greda prvo leto posede za pet do petnajst centimetrov.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "visoka greda plasti",
      "visoka greda sestava",
      "visoka greda sestava plasti",
      "polnjenje visoke grede",
      "s čim napolniti visoko gredo",
      "kako sestaviti visoko gredo",
      "zakaj se posede visoka greda",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Visoka greda se polni v štirih plasteh, od grobe na dnu do najbolj drobne na vrhu: veje, listje in trava, zrel kompost ali hlevski gnoj, na vrhu pa 25 do 30 cm vrtne zemlje s kompostom. Spodnje plasti dajo zračnost in odtekanje, zgornja pa hrano in prostor za korenine.",
          "Ta vrstni red ni okrasen. Veje na dnu z razpadanjem nekaj let sproščajo hranila in greda v tem času skoraj ne potrebuje dognojevanja — to je bistvo visoke grede in razlog, zakaj se je sploh splača narediti tako, namesto da bi jo do vrha napolnili z zemljo.",
        ],
      },
      {
        h2: "Plast za plastjo, od dna navzgor",
        body: [
          "Na dno gre najprej mreža proti voluharju, če greda stoji na travi. Nanjo pride prva plast.",
          "Prva plast, približno tretjina višine: grobo vejevje, razrezane veje iz obrezovanja, deli debel. Naloga te plasti je zračnost in odtekanje vode, hranila pa sprošča počasi, več let. Debelejše veje razpadajo dlje, zato so za to plast boljše od drobnih.",
          "Druga plast, približno 10 do 15 cm: obrnjene travne ruše, listje, pokošena trava, slama. Ta plast zapolni luknje med vejami, da zemlja z vrha ne izpere v praznine.",
          "Tretja plast, približno 10 do 20 cm: zrel kompost ali dobro preležan hlevski gnoj. To je glavni vir hranil za prvi dve sezoni.",
          "Zgornja plast, 25 do 30 cm: kakovostna vrtna zemlja, pomešana s kompostom. V tej plasti se dogaja skoraj vse — večina zelenjave ima korenine plitvejše od 30 cm, korenovke pa potrebujejo vsaj 40 cm.",
        ],
        list: [
          "Mreža proti voluharju, če greda stoji na travi",
          "1. veje in grobo vejevje — približno tretjina višine",
          "2. obrnjena ruša, listje, trava — 10 do 15 cm",
          "3. zrel kompost ali preležan gnoj — 10 do 20 cm",
          "4. vrtna zemlja s kompostom — 25 do 30 cm",
        ],
      },
      {
        h2: "Koliko materiala potrebujete",
        body: [
          "Prostornina grede je dolžina krat širina krat višina. Greda 200 × 80 × 60 cm ima 0,96 kubičnega metra, torej skoraj kubik — in to je količina, ki jo je treba pripeljati in naložiti. Zato se material splača naročiti po enotah, ne po vrečah.",
          "Za tako gredo potrebujete približno 0,3 m³ vej, 0,15 m³ listja in trave, 0,2 m³ komposta in 0,3 m³ vrtne zemlje. Veje in listje imate najverjetneje doma; kupiti je treba predvsem zgornji dve plasti.",
          "Zemlja v vrečah je najdražja možna pot. Pri enem kubiku gre za približno štirideset vreč po 25 litrov; ista količina v razsutem stanju od lokalnega dobavitelja stane bistveno manj. Zato pri naročilu gred vedno povemo, koliko materiala bo šlo vanje — da ga lahko naročite skupaj z dostavo in ne po vrečah.",
        ],
      },
      {
        h2: "Zakaj se greda posede",
        body: [
          "Prvo leto se greda posede za pet do petnajst centimetrov in to ni napaka — pomeni, da spodnje plasti razpadajo, torej da greda deluje tako, kot je zamišljena. Organski material se s časom zmanjša na del svoje prvotne prostornine.",
          "Zato gredo napolnite do vrha in ne pustite roba, ampak računajte, da boste spomladi dosuli. Vsako pomlad se doda pet do deset centimetrov komposta in zemlje, kar hkrati nadomesti posedanje in obnovi hranila.",
          "Po petih do sedmih letih so spodnje plasti razpadle in greda je skoraj v celoti zemlja. Takrat je smiselna prenova: zgornjo zemljo odložite ob strani, spodnje plasti nadomestite s svežim vejevjem in zemljo vrnete nazaj. Stara zemlja iz grede je odlična za cvetlične korita in za nasipanje vrta.",
        ],
      },
      {
        h2: "Česa v gredo ne dajajte",
        body: [
          "Sveži hlevski gnoj gori in v prvi sezoni požge korenine — uporabiti je treba preležanega, star vsaj pol leta. Enako velja za svežo pokošeno travo v debeli plasti: zbije se, začne gniti brez zraka in zaudarja.",
          "Vej orehov in nekaterih iglavcev je bolje ne uporabiti v prvi plasti, ker vsebujejo snovi, ki zavirajo kalitev sosednjih rastlin. Za orehe je to dobro znano, pri iglavcih pa gre bolj za zakisanje zemlje.",
          "V gredo ne sodijo obdelan les, iverne plošče, barvan les in vse, kar je bilo kadar koli impregnirano. V posodi, v kateri raste hrana, to preprosto ni razprava, ki jo je treba imeti.",
          "Nazadnje: plevel s koreninami in semeni sodi v smeti, ne v gredo. Gredo boste polnili enkrat, plevel iz nje pa pulili vsako leto.",
        ],
        list: [
          "Svež hlevski gnoj — le preležan, star vsaj pol leta",
          "Debela plast sveže trave — se zbije in zagnije",
          "Orehove veje in iglavci v prvi plasti",
          "Obdelan, barvan ali impregniran les",
          "Plevel s koreninami in semeni",
        ],
      },
      {
        h2: "Kaj saditi prvo in kaj drugo leto",
        body: [
          "Prvo leto je v gredi največ hranil, zato so na vrsti rastline, ki jih največ porabijo: paradižnik, kumare, bučke, zelje, por. Če te sadite tretje leto, bodo že potrebovale dognojevanje.",
          "Drugo in tretje leto pridejo srednje zahtevne — solata, špinača, korenje, rdeča pesa, čebula. Četrto leto in naprej so na vrsti nezahtevne: fižol, grah, zelišča, jagode.",
          "Ta vrstni red je edino, kar je pri visoki gredi res treba upoštevati čez leta. Vse ostalo se ureja samo od sebe.",
        ],
      },
    ],
    faq: [
      {
        q: "Koliko plasti ima visoka greda?",
        a: "Štiri: grobo vejevje na dnu, nad njim obrnjena ruša z listjem in travo, nato zrel kompost ali preležan gnoj, na vrhu pa 25 do 30 cm vrtne zemlje s kompostom.",
      },
      {
        q: "Zakaj se visoka greda posede?",
        a: "Ker spodnje organske plasti razpadajo. Prvo leto se posede za pet do petnajst centimetrov, kar je znak, da greda deluje. Vsako pomlad dosujte pet do deset centimetrov komposta in zemlje.",
      },
      {
        q: "Koliko zemlje potrebujem za visoko gredo?",
        a: "Greda 200 × 80 × 60 cm ima skoraj kubični meter prostornine, od tega je zgornja plast zemlje približno 0,3 m³. Razsuta zemlja od lokalnega dobavitelja je bistveno cenejša od vreč — kubik pomeni približno štirideset vreč po 25 litrov.",
      },
      {
        q: "Ali lahko visoko gredo napolnim samo z zemljo?",
        a: "Lahko, a s tem izgubite glavno prednost. Veje na dnu z razpadanjem več let sproščajo hranila in dajejo zračnost; greda, napolnjena samo z zemljo, se zbije in potrebuje dognojevanje že prvo sezono. Je pa tudi občutno dražja, ker gre v njo trikrat več zemlje.",
      },
      {
        q: "Kdaj napolniti visoko gredo?",
        a: "Najbolje jeseni, ko je na voljo listje in vejevje od obrezovanja in ima greda čez zimo čas, da se plasti posedejo. Pomladansko polnjenje je prav tako mogoče, le da se prvo posedanje zgodi med sezono.",
      },
    ],
    related: ["visoke-grede", "vrtne-lope-ute-hiske"],
  },
  {
    slug: "mere-nadstreska-za-dva-avta",
    pinned: true,
    topic: "Načrtovanje",
    readMinutes: 8,
    fotoGroup: "nadstreski-za-avto",
    title: "Optimalne mere nadstreška za dva avta",
    metaTitle: "Mere nadstreška za dva avta — širina, dolžina, višina",
    metaDescription:
      "Koliko meri dober nadstrešek za dva avtomobila: svetla širina med stebri, dolžina, višina in razmiki. Kako mere izračunate iz svojih vozil in česa ne pozabiti.",
    excerpt:
      "Zakaj 6 metrov širine ni vedno 6 metrov, kako mere izračunate iz svojih vozil in katera napaka se pokaže šele po montaži.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    targets: [
      "nadstrešek za dva avtomobila",
      "nadstrešek za dva avta",
      "dimenzije nadstreška za dva avta",
      "mere nadstreška za avto",
      "širina nadstreška za dva avtomobila",
      "višina nadstreška za avto",
    ],
    sections: [
      {
        h2: "Kratek odgovor",
        body: [
          "Za dva osebna avtomobila je spodnja razumna meja 6 × 5 m, udobna mera pa 6,5 × 5,5 m. Svetla višina naj bo najmanj 2,2 m, za kombi, strešni kovček ali nosilec za kolesa pa 2,5 m.",
          "Bolj pomembna od teh številk je ena razlika, ki je večina ponudb ne pojasni: tloris strehe in prostor, ki ga dejansko lahko uporabite, nista isto. Odloča svetla širina med stebri, ne mera strehe.",
        ],
      },
      {
        h2: "Zakaj 6 metrov ni vedno 6 metrov",
        body: [
          "Če je nadstrešek širok 6 m, stebri pa so postavljeni v vogale, ostane med njima približno 5,7 m proste širine — steber prereza 12 × 12 cm vzame na vsaki strani svoj del. Kadar so stebri pomaknjeni navznoter, da streha nad njimi previsi, je razlika še večja.",
          "Pri parkiranju šteje samo svetla mera. Zato v ponudbi vedno navedemo obe: tloris strehe in svetlo širino med stebri. Če v tuji ponudbi piše samo ena številka, je vredno vprašati, katera je.",
          "Previs strehe čez stebre je sicer zaželen — pokrije prostor ob avtu in odmakne kapljanje od parkirnega mesta. Le v izračun uporabne širine ga ne smete šteti.",
        ],
      },
      {
        h2: "Kako pridete do svoje širine",
        body: [
          "Namesto da prevzamete tabelo, izmerite svoja vozila. Povprečen družinski avto je širok približno 1,8 m brez ogledal, večji SUV 1,9 do 2,0 m. Za odprtje vrat potrebujete od 60 do 70 cm, da stopite ven brez zvijanja.",
          "Račun je preprost: širina vozila plus širina vozila plus prostor za vrata na treh mestih — ob levem robu, med vozili in ob desnem robu. Pri dveh avtih po 1,85 m in treh presledkih po 65 cm to znese 5,65 m svetle širine, torej nadstrešek 6 m. Pri dveh SUV-jih je isti račun že 6,1 m svetle širine in nadstrešek 6,5 m.",
          "Če boste med vozili kdaj prenašali kolo, vrečke ali otroški sedež, dodajte še 20 cm. Teh 20 cm je najcenejši del nadstreška in edini, ki ga pozneje ni mogoče dokupiti.",
        ],
        list: [
          "Dva osebna avtomobila — svetla širina 5,7 do 6 m",
          "Dva večja SUV-ja — svetla širina 6,1 do 6,5 m",
          "Kombi in osebni avto — svetla širina najmanj 6,3 m",
          "Med vozili najmanj 65 cm, udobno 80 cm",
        ],
      },
      {
        h2: "Dolžina",
        body: [
          "Dolžina 5 m pokrije večino osebnih vozil s približno pol metra rezerve. Za kombi ali avto s kljuko in nosilcem za kolesa računajte 5,5 do 6 m.",
          "Premislite tudi, kaj bo za avtom. Če nameravate ob zadnji stranici imeti polico, kolesa ali zabojnike, jih prištejte k dolžini in ne k širini — širino potrebujete za vrata, dolžino za shranjevanje.",
          "Pri prislonjenem nadstrešku dolžino omejuje tudi naklon: pri enokapnici z naklonom 7 stopinj vsak meter dolžine pomeni približno 12 cm razlike v višini, kar pri 6 m znese 72 cm. To je razlog, da zelo dolgi prislonjeni nadstreški dobijo ravno streho z EPDM membrano namesto naklonjene.",
        ],
      },
      {
        h2: "Višina",
        body: [
          "Svetla višina 2,2 m zadošča za osebno vozilo in je videti sorazmerna. Če imate kombi, strešni kovček ali nosilec za kolesa na strehi, je treba računati 2,5 m ali več — in to izmeriti z vsem, kar je na strehi, ne brez.",
          "Višine pa ni pametno pretiravati. Višji nadstrešek prepušča več dežja in snega pod streho ob vetru, hkrati pa je konstrukcija vitkejša in potrebuje močnejše prečne vezi. Pri dvojnem nadstrešku je 2,2 do 2,5 m območje, v katerem sta zaščita in videz v ravnovesju.",
          "Merite od končne kote tlaka, ne od zemlje. Če boste pod nadstreškom še tlakovali, tlakovci in posteljica vzamejo 10 do 15 cm.",
        ],
      },
      {
        h2: "Ena konstrukcija ali dve",
        body: [
          "Nadstrešek za dva avtomobila postavimo kot eno konstrukcijo s skupno streho in ne kot dva ločena. Razlogov je več: srednji steber odpade ali se pomakne nazaj, kritina nima stika na sredini, kjer voda najpogosteje zateka, in cena na kvadratni meter je nižja, ker se stebri, temelji in prihod delijo.",
          "Na kvadratni meter je dvojni nadstrešek praviloma za petino do tretjino cenejši od dveh enojnih. To je tudi razlog, da se pri načrtovanju splača vprašati, ali boste čez nekaj let potrebovali prostor za drugo vozilo — razširitev pozneje pomeni nove temelje in novo streho, ne le dodatnih nekaj kvadratov.",
        ],
      },
      {
        h2: "Pogoste napake",
        list: [
          "Mere vzete po tlorisu strehe namesto po svetli širini med stebri",
          "Višina izmerjena brez strešnega kovčka ali nosilca za kolesa",
          "Pozabljena končna kota tlaka — nadstrešek se po tlakovanju zniža za 10 do 15 cm",
          "Steber postavljen tam, kjer se odpirajo vrata voznika",
          "Brez žleba — voda pada ob steber in podira tla okoli temelja",
          "Brez prazne cevi za elektriko; polnilnica se pozneje napeljuje po vrhu",
        ],
      },
      {
        h2: "Odmiki od meje",
        body: [
          "Mere, ki jih izračunate iz vozil, so želja. Kar je dopustno, določata odmik od parcelne meje in od ceste, ki ju predpisuje občinski prostorski akt in se po občinah razlikuje. Pogosto je prav odmik tisti, ki določi končno širino, ne velikost avtomobilov.",
          "Kaj velja za manjše objekte pri stanovanjski hiši in kdaj je potrebno soglasje soseda, je razloženo v članku o gradbenem dovoljenju za nadstrešek. Ob ogledu odmike preverimo na mestu in vam povemo, kaj je v vašem primeru mogoče.",
        ],
      },
    ],
    faq: [
      {
        q: "Kakšne so minimalne mere nadstreška za dva avta?",
        a: "Spodnja razumna meja je 6 × 5 m z najmanj 5,7 m svetle širine med stebri. Pod tem se vrata obeh vozil odpirajo s previdnostjo in med avtoma ni več mogoče prehoditi.",
      },
      {
        q: "Koliko prostora je treba pustiti med avtomobiloma?",
        a: "Najmanj 65 cm, udobno 80 cm. Pri 65 cm vrata odprete dovolj za izstop, pri 80 cm pa greste mimo tudi s kolesom ali vrečkami.",
      },
      {
        q: "Kakšna višina nadstreška za avto je prava?",
        a: "2,2 m za osebno vozilo, 2,5 m ali več za kombi, strešni kovček ali nosilec za kolesa. Merite od končne kote tlaka in z vsem, kar bo na strehi vozila.",
      },
      {
        q: "Je dvojni nadstrešek dvakrat dražji od enojnega?",
        a: "Ne. Na kvadratni meter je praviloma za petino do tretjino cenejši, ker se stebri, temelji, orodje in prihod delijo. Zato se splača že ob prvem nadstrešku premisliti, ali bo kdaj potrebno mesto za drugo vozilo.",
      },
    ],
    related: ["nadstreski-za-avto", "leseni-nadstreski"],
  },
];

/** Prazno: vse načrtovane teme so objavljene. Razdelek "V pripravi" se takrat
 *  na strani Nasveti sam skrije. */
export const plannedArticles: string[] = [];

/**
 * POVEZOVANJE MED STORITVAMI IN NASVETI
 *
 * Polje `related` v članku našteva storitve, ki jih članek zadeva. Doslej je
 * teklo samo v eno smer: članek je povezal na storitev, storitev pa na članek
 * ni. Posledica je bila, da je enajst od dvanajstih člankov prejelo eno samo
 * notranjo povezavo — iz vozlišča /nasveti — in zato ni imelo ne teže ne
 * konteksta, iz katerega bi iskalnik razbral, čemu pripadajo.
 *
 * Obe funkciji spodaj obrneta isto polje, zato se seznama ne moreta raziti:
 * novi članek se sam pojavi na pripadajočih storitvenih straneh in med
 * sorodnimi nasveti, brez vzporednega seznama, ki bi ga bilo treba vzdrževati.
 */

/** Članki, ki zadevajo dano storitev. Najprej temeljni, nato novejši. */
export function articlesForService(serviceSlug: string, limit = 3): Article[] {
  return articles
    .filter((a) => !a.placeholder && a.related.includes(serviceSlug))
    .sort((a, b) =>
      a.cornerstone === b.cornerstone
        ? b.datePublished.localeCompare(a.datePublished)
        : a.cornerstone
          ? -1
          : 1,
    )
    .slice(0, limit);
}

/**
 * Sorodni nasveti: članki, ki se s tem člankom ujemajo v vsaj eni storitvi.
 * Več skupnih storitev pomeni tesnejšo sorodnost, zato so taki prvi.
 */
export function relatedArticles(slug: string, limit = 3): Article[] {
  const a = articles.find((x) => x.slug === slug);
  if (!a) return [];
  return articles
    .filter((x) => x.slug !== slug && !x.placeholder)
    .map((x) => ({ x, skupnih: x.related.filter((r) => a.related.includes(r)).length }))
    .filter((p) => p.skupnih > 0)
    .sort((p, q) =>
      q.skupnih - p.skupnih || q.x.datePublished.localeCompare(p.x.datePublished),
    )
    .slice(0, limit)
    .map((p) => p.x);
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
