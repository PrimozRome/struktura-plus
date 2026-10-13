# Struktura Plus — design sistem

Verzija 1.0 · 21. 9. 2026

Vizualni jezik za novo spletno stran. Smer: **sodobna obrt** — čist, zračen layout,
velike fotografije izvedenih projektov, topli leseni toni, serif za naslove.
Deluje kot arhitekturni studio, ne kot katalog žage.

Podjetje se preimenuje iz **Lignum Mont** v **Struktura Plus**. Domena ostaja
`strukturaplus.si`. Staro ime se na novi strani ne pojavlja nikjer razen v eni
vrstici v razdelku O nas.

---

## 1. Osnovna načela

**Fotografija nosi stran, ne grafika.** Ta obrt se prodaja z rezultatom. Vsaka
storitvena stran ima vsaj 6 fotografij izvedenih del. Nobene stock fotografije.

**Zadržana geometrija.** Radij `4 px` na gumbih in vnosnih poljih, `10 px` na
karticah in slikah, `14 px` na velikih panelih. Dovolj, da kartica deluje kot
predmet in ne kot izrezan pravokotnik, premalo, da bi stran dobila videz
aplikacije. Značke in filtri so edini polno zaobljeni (`--radius-pill`).

**Rob pred senco.** Ločevanje ploskev delamo s 1 px robom v barvi `--border`,
ne s sencami. Sence so rezervirane za plavajoče elemente (spustni meni, modal).

**En poudarek.** Jantar se na posamezni strani pojavi na največ treh mestih:
nadnaslov razdelka, aktivni element navigacije, fokusni obroč. Vse ostalo je les,
pesek in fotografija.

**Vsak zaslon pove ceno ali naslednji korak.** Nobena storitvena stran ne sme
obstajati brez cenovnega razpona in gumba za povpraševanje.

---

## 2. Logotip

Emblem iz obstoječega logotipa je ohranjen nespremenjen. Zamenjano je samo
besedilo (Lora Bold namesto prejšnje serif pisave).

| Datoteka | Uporaba |
| --- | --- |
| `public/brand/logo-horizontal.png` | glava strani, e-podpis, dokumenti |
| `public/brand/logo-horizontal-inverse.png` | glava na temni podlagi, noga |
| `public/brand/logo-stacked.png` | vizitke, tisk, deljena vsebina |
| `public/brand/logo-stacked-inverse.png` | isto na temni podlagi |
| `public/brand/mark.png` | sam emblem — avatarji, vodni žig na fotografijah |
| `public/brand/monogram-512.png` | poenostavljen "S" — favicon, majhne velikosti |
| `public/icon-512.png`, `icon-192.png`, `apple-touch-icon.png` | PWA in domači zaslon |
| `public/favicon.ico` (16/32/48) | zavihek brskalnika |
| `public/og-image.png` | privzeta slika za deljenje (1200×630) |

**Pravila:**

- Najmanjša širina vodoravnega logotipa: 180 px. Pod tem uporabi sam emblem.
- Prosti prostor okoli logotipa: vsaj višina črke "S" iz napisa na vseh straneh.
- Logotipa ne raztezaj, ne obračaj, ne dodajaj sence, ne spreminjaj barve lesa.
- Na fotografijah vedno inverzna različica, na temni prekrivni plasti (`rgba(27,20,16,0.45)`).
- Emblem pri velikostih pod 48 px ni berljiv — takrat monogram.

---

## 3. Barve

Vse lesene barve so izluščene neposredno iz logotipa (k-means, odtenek 24–35°).
Paleta ni izmišljena — je barva materiala, s katerim naročnik dela.

### Les — primarna lestvica

| Žeton | Hex | Kontrast na svetli podlagi | Uporaba |
| --- | --- | --- | --- |
| `les-50` | `#FBF6F0` | — | najsvetlejše ozadje razdelka |
| `les-100` | `#F4E9DC` | — | mehko ozadje kartice, primary-soft |
| `les-200` | `#E7D2B8` | — | ločila, obrobe na temni podlagi, selection |
| `les-300` | `#D6B48C` | — | primarna barva v temni temi |
| `les-400` | `#BE9161` | 2.6 | dekorativno, ikone na temnem |
| `les-500` | `#A2754D` | 3.9 | robovi, UI elementi (ne besedilo) |
| `les-600` | `#875D3A` | 5.5 | besedilo AA |
| `les-700` | `#6E4628` | 7.8 | povezave, sekundarni gumb |
| `les-800` | `#4F2D16` | 11.7 | **primarni gumb** |
| `les-900` | `#38200F` | 14.6 | primarni gumb hover |
| `les-950` | `#231309` | 17.3 | glavno besedilo, temno ozadje |

### Pesek — topel nevtralni sistem

`#FCFAF7` `#F6F1EA` `#EBE3D8` `#DAD0C2` `#B6A896` `#8C7E6B` `#6B5E4E` `#514738`
`#3A3227` `#26201A` `#17130F`

Nevtralne barve niso čisto sive — imajo enak topel odtenek kot les (~32°), zato
delujejo izbrane, ne privzete. `pesek-600` je najsvetlejši, ki še doseže AA za
pomožno besedilo.

### Cink — hladna konstrukcijska lestvica

`#F5F7F8` … `#111416`

Referenca na kovinski del dejavnosti (alu nadstreški, kleparstvo, žlebovi).
Uporabi za tehnične razdelke, tabele s specifikacijami in nogo strani. Nikoli
kot glavno ozadje — hladna barva na tej strani samo podpira toplo.

### Jantar — edini poudarek

| Žeton | Hex | Kje |
| --- | --- | --- |
| `jantar` | `#C8801F` | dekorativno, velike ploskve, temna podlaga |
| `jantar-strong` | `#9E5F11` | nadnaslovi in ikone na svetli podlagi (4.9:1) |
| `jantar-soft` | `#E0A24A` | poudarek v temni temi (8.2:1) |
| `jantar-ring` | `#BC7518` | fokusni obroč na svetli podlagi (3.5:1) |

### Semantične

`uspeh #2E7D52` · `opozorilo #B45309` · `napaka #B3261E`

Opozorilo je barvno blizu jantarju, zato ga vedno spremlja ikona in besedilo —
nikoli sama barva.

### Svetla stran, temni poudarki

Stran je namerno **samo svetla**. Semantične podlage:

| Žeton | Vrednost | Kje |
| --- | --- | --- |
| `--bg` | `#FCF9F4` | privzeta podlaga strani |
| `--bg-subtle` | `#F5EDE1` | izmenjujoči razdelek — ritem delamo z menjavo podlage |
| `--bg-muted` | `#EFE6D8` | poudarjeni blok: cenovni okvir, opomba |
| `--surface` | `#FFFFFF` | kartica, vnosno polje, spustni meni |
| `--bg-inverse` | `les-950` | **samo** noga in trak s pozivom |

Temna paleta v `tokens.css` ostaja definirana, a **ni aktivna**: v `:root` je
`color-scheme: light` in bloka `@media (prefers-color-scheme: dark)` ni. To je
odločitev, ne pozabljivost — pri obrtniški strani s fotografijami lesa temno
ozadje popači zaznavo barve materiala, stranka pa bo posnetek primerjala z
vzorcem na ogledu.

Za kasnejšo aktivacijo temne teme: na `<html>` nastavi `data-theme="dark"` in v
`:root` vrni `color-scheme: light dark`. Blok `:root[data-theme="dark"]` je že
napisan in preverjen.

### Pravilo uporabe

V komponentah uporabljaj **samo semantične žetone** (`--bg`, `--text`,
`--primary`, `--border` …), nikoli surovih lestvic in nikoli literalnih hex
vrednosti.

---

## 4. Tipografija

| Vloga | Pisava | Teže |
| --- | --- | --- |
| Naslovi, logotip | **Lora** | 500, 600, 700 |
| Besedilo, vmesnik | **Archivo** | 400, 500, 600, 700 |

Obe sta na Google Fonts, obe polno podpirata šumnike (č, š, ž). Lora je ista
pisava kot v logotipu, zato napis in naslovi govorijo isti jezik. Archivo je
grotesk iz družine ameriških napisnih pisav — deluje trdno pri majhnih velikostih
in v tabelah s podatki.

V Next.js naloži prek `next/font/google` s `subsets: ['latin', 'latin-ext']` —
`latin-ext` je obvezen, sicer se šumniki izrisujejo iz nadomestne pisave.

### Lestvica

| Žeton | Velikost | Vrstica | Uporaba |
| --- | --- | --- | --- |
| `display-xl` | 40 → 68 px | 1.06 | hero naslov domače strani |
| `display-lg` | 32 → 52 px | 1.1 | H1 na podstraneh |
| `h2` | 26 → 36 px | 1.18 | naslovi razdelkov |
| `h3` | 20 → 24 px | 1.18 | podnaslovi, naslovi kartic |
| `h4` | 18 px | 1.45 | naslovi v FAQ |
| `body-lg` | 18 px | 1.7 | uvodni odstavek |
| `body` | 16 px | 1.7 | tekoče besedilo |
| `body-sm` | 15 px | 1.6 | metapodatki, opisi kartic |
| `caption` | 13 px | 1.5 | podnapisi slik, drobni tisk |
| `eyebrow` | 12 px | 1.0 | nadnaslov, verzalke, razmik 0.14em |

Tekoča vsebina največ **68 znakov** v vrstici (`--measure`). Naslovi dobijo
`text-wrap: balance`, odstavki `text-wrap: pretty`.

---

## 5. Prostor in postavitev

Osnova 4 px. Vsebnik 1240 px, ozek vsebnik za članke 736 px.
Stranski odmik `clamp(20px, 4vw, 48px)`, navpični razmik razdelka
`clamp(64px, 8vw, 128px)`.

Mreža 12 stolpcev, razmik 24 px. Na širini pod 768 px vse v en stolpec.

Ritem strani: vsak razdelek se od sosednjega loči z zamenjavo ozadja
(`--bg` → `--bg-subtle` → `--bg`), ne z dodatnimi črtami.

---

## 6. Komponente

### Gumb

| Različica | Videz | Kdaj |
| --- | --- | --- |
| **primary** | `--primary` polnilo, `--primary-fg` besedilo, radij 2 px | en na zaslon: "Pridobi ponudbo" |
| **secondary** | prozorno, 1 px `--border-strong` rob, `--text` besedilo | "Poglej reference" |
| **ghost** | brez roba, samo besedilo z podčrtajem ob prehodu | povezave znotraj vsebine |

Višina 44 px (mobilno 48 px — dotik), vodoravni odmik 24 px, teža 600,
razmik med črkami 0.01em. Prehod 150 ms.

### Vnosno polje

Polnilo `--surface`, rob 1 px `--border`, radij 2 px, višina 48 px.
Ob fokusu 2 px `--ring` z odmikom 2 px. Napaka: rob `--napaka` + besedilo pod
poljem z ikono. Oznaka polja je vedno vidna nad poljem, nikoli samo placeholder.

### Kartica storitve

Fotografija 4:3, pod njo nadnaslov (`eyebrow`), naslov (h3), dve vrstici opisa,
cenovni razpon v krepkem, povezava "Več o storitvi →". Rob 1 px, brez sence.
Ob prehodu se fotografija poveča za 2 %, rob potemni na `--border-strong`.

### Kartica projekta

Fotografija 3:2, naslov, pod njim vrstica metapodatkov: kraj · material · leto.
Ti trije podatki so obvezni — so vir dolgega repa v iskalniku
("nadstrešek Celje", "terasa sibirski macesen").

### FAQ

Harmonika, zaprta ob nalaganju, prvo vprašanje odprto. Vprašanje je h4, odgovor
body. Ločilo med vprašanji 1 px `--border`. Vsak FAQ na strani mora biti tudi v
`FAQPage` schemi.

### Cenovni blok

Poudarjeni okvir z ozadjem `--bg-muted`: razpon ("90–140 €/m² z montažo"),
pod njim tri postavke, kaj na ceno vpliva, in povezava na povpraševanje.
To je element, ki ga konkurenca nima — naj bo viden.

### Traku s pozivom (CTA band)

Poln razdelek v `--bg-inverse` z inverznim logotipom, naslovom, eno vrstico in
primarnim gumbom. Enkrat na stran, pred nogo.

### Glava

Prozorna nad hero sliko, ob drsenju polnilo `--surface` z 1 px spodnjim robom.
Telefon je vedno viden — na mobilnem kot ikona, na namizju kot besedilo.
`position: sticky; top: env(safe-area-inset-top, 0px)`.

### Noga

`--bg-inverse`, štirje stolpci: logotip in en stavek, storitve, podjetje, kontakt
z NAP podatki v točno enakem zapisu kot v Google Business Profile.

---

## 7. Fotografija

Razmerja: hero 16:9 ali 21:9, kartica storitve 4:3, kartica projekta 3:2,
galerija projekta mešano z `object-fit: cover`.

Obdelava: naravne barve, brez močnih filtrov. Les mora biti v resnični barvi —
stranka bo primerjala z vzorcem.

Vsaka slika ima opisen `alt` v slovenščini, ki pove **kaj** in **iz česa**:
"Lesena terasa iz sibirskega macesna z vgrajenimi stopnicami, izvedba v Zasavju".

Format WebP/AVIF prek `next/image`, `sizes` vedno nastavljen, hero z `priority`.

---

## 8. Dostopnost

- Vse kombinacije besedila v tem dokumentu dosegajo vsaj AA (4.5:1).
- Fokus je vedno viden — `:focus-visible` z 2 px jantarnim obročem.
- Dotikalne tarče vsaj 44×44 px.
- Harmonike, meniji in modali z ustreznimi ARIA atributi in tipkovnico.
- `prefers-reduced-motion` izklopi vse prehode.
- Temna tema mora delovati v vseh treh stanjih: sistemsko, izrecno svetlo,
  izrecno temno. Nikoli ne definiraj barve samo znotraj `@media` bloka.

---

## 9. Arhitektura strani

Izhaja iz SEO analize (september 2026). Vsaka storitev dobi svoj URL — sidra
na eni strani so bila glavni razlog, da stara stran ni rangirala.

```
/                                   domača
/storitve/                          razdelilna stran
/storitve/nadstreski-za-avto/       nadstrešek za avto (1900 iskanj/mes, KD 6)
/storitve/leseni-nadstreski/        leseni nadstreški (320 + terase 720)
/storitve/lesene-ograje/            lesene ograje (480 + 320)
/storitve/lesene-terase/            lesene terase (170 + 140)
/storitve/lesene-fasade/            lesene fasade (320, KD 5)
/storitve/wpc-terase/               WPC terase
/storitve/lesene-pergole/           lesene pergole (210, KD 4)
/storitve/ravne-strehe-epdm/
/storitve/krovstvo-kleparstvo/
/vrste-lesa/                        referenčna stran (sibirski macesen, 590)
/projekti/                          galerija izvedenih del
/projekti/[slug]/                   posamezen projekt
/nasveti/                           članki za dolgi rep
/nasveti/[slug]/
/o-nas/
/kontakt/
/hvala/                             po oddaji obrazca — nujno za merjenje konverzij
```

**Projekti** so galerija izvedenih del (kraj, material, obseg, fotografije).
**Nasveti** so članki, ki ciljajo informativne poizvedbe (gradbeno dovoljenje,
izbira lesa, cene, vzdrževanje). Ločena sta zato, ker ciljata različne iskalne
namene in različne faze odločanja.

---

## 10. Vsebinski ton

Slovenščina, vikanje, brez vzklikov in brez marketinškega napihovanja.
Konkretno pred splošnim: "sibirski macesen, 27 mm, skrito pritrjevanje" je
boljše od "vrhunski materiali".

Naslovi so stvarni: "Nadstrešek za avto po meri", ne "Vaš sanjski nadstrešek".
Gumbi povedo, kaj se zgodi: "Pošlji povpraševanje", ne "Začnimo".

---

## Tekoče besedilo

Dolgo besedilo na storitvenih straneh in v člankih uporablja razred `.sp-prose`.
Ritem je zapisan v žetonih, ne v komponentah:

| Žeton | Vrednost | Kje se vidi |
| --- | --- | --- |
| `--text-prose` | 17 px | osnovna velikost odstavka |
| `--leading-prose` | 1.75 | vodilna črta |
| `--prose-gap` | 24 px | med odstavki in med odstavkom in seznamom |
| `--prose-lead-gap` | 20 px | med naslovom in prvim odstavkom pod njim |
| `--prose-break` | 44–64 px | **nad** naslovom H2, torej prelom med sklopi |
| `--text-reading` | `#2E241B` | barva besedila (mehkejša od `--text`, kontrast 15:1) |

Zrak gre **nad** naslov in ne pod njega — tako naslov ostane vizualno pripet na
svoje besedilo in oko vidi, kje se en sklop konča.

Razmiki so napisani tako, da delujejo tudi kadar so odstavki zaviti v `<section>`:

```css
.sp-prose > * + *,
.sp-prose > section > * + * { margin-block-start: var(--prose-gap); }
```

Prvotna različica je imela samo `> * + *`, kar je ujelo le sekcije — znotraj njih
ni bilo nobenega razmika in besedilo se je zlilo v blok.

## Fotografije

Različice pripravi `scripts/slike.py` iz izvirnikov v `.raw-slike/`. Izhod gre v
`public/slike/<skupina>/<ime>-<širina>.avif|.webp`, širine 400 / 800 / 1200 / 1600
(nikoli nad izvorno ločljivostjo), manifest z merami in alt besedili pa v
`src/content/images.ts`.

Komponenta `Figure` izriše `<picture>` z AVIF in WebP v fiksnem razmerju stranic.
Namerno brez `next/image`: različice so že pripravljene, `next/image` pa doda
odjemalski JS in optimizira znova. Brez fotografije se izriše nevtralen lesen blok
enakih mer, zato zamenjava ne premakne postavitve.

Nove fotografije: v `.raw-slike/`, vpis v `scripts/mapiranje.py`, `python3
scripts/slike.py <skupina>`.

## Kartica ob prehodu z miško

Kartica se odziva kot cel predmet, ne kot napis s povezavo:

| Stanje | Kaj se zgodi |
| --- | --- |
| mirno | senca `--shadow-sm`, rob `--border` |
| `:hover`, `:focus-within` | dvig `translateY(-4px)`, senca `--shadow-lift`, rob `--border-strong`, slika `scale(1.04)` |
| `:active` | spust na `translateY(-1px)` — gumbast odziv na klik |

Trajanje je `--duration-base` (220 ms) za dvig in `--duration-slow` (400 ms) za
sliko, da se slika premika počasneje od okvirja in dvig ne deluje sunkovito.
Pri `prefers-reduced-motion: reduce` premikov ni, senca in rob ostaneta.

Klikljiva je celotna ploskev: naslov nosi razred `.sp-card__link`, ki prek
`::after` prekrije kartico. Prava povezava ostane ena, zato tipkovnica in bralnik
zaslona vidita en cilj — brez ugnezdenih povezav in brez JavaScripta. Povezave v
besedilu kartice ostanejo dosegljive prek `z-index: 2`.

## Drobtinice

Drobtinice so samostojen trak čez celo širino, pripet pod glavo: tanka črta
spodaj, pisava 13 px, višina približno 45 px, notranja poravnava na `--container`.
Niso del naslovnega stolpca.

Razdelek, ki jim sledi, dobi `!pt-[var(--hero-y-top)]`
(`clamp(2.25rem, 4.5vw, 4rem)`) namesto polnega `--section-y`, ker trak že sam
naredi ločnico in polna višina razdelka pod njim ni potrebna.

Prej so stale kot prvi element v `<Container>` naslovnega razdelka. Nad njimi je
bil ves zgornji odmik razdelka (do 128 px), pod njimi pa 24 px — lebdele so v
praznini in stiskale nadnaslov.

## Širine kontejnerjev

| Različica | Širina | Kje |
| --- | --- | --- |
| `site` (privzeto) | 77,5rem / 1240px | pristajalna stran, hub, storitve |
| `article` | 51rem / 816px | članki v Nasvetih |
| `narrow` | 46rem / 736px | pravne strani, obrazci |

Največja širina vrstice (`--measure`) je na besedilnih elementih znotraj
`.sp-prose` in ne na ovoju, zato lahko tabela ali slika zavzame celotno širino
stolpca.

V članku gre `.sp-prose` skupaj z modifikatorjem `.sp-prose--wide`, ki to
omejitev odpravi: notranja širina kontejnerja `article` je 720 px, kar je
približno 74 znakov na vrstico — dovolj ozko za branje in dovolj široko, da
primerjalna tabela s sedmimi stolpci ne potrebuje drsnika. Naslov, podnaslov,
naslovna fotografija, odstavki in tabela tako stojijo v isti navpičnici.

Na storitvenih straneh modifikatorja ni: tam je stolpec širok in omejitev
68 znakov ostane v veljavi.

Če bi bilo 74 znakov preveč, se stolpec zoži z eno vrednostjo —
`--container-article` v `tokens.css`.

## Ločnica med razdelki

Dva zaporedna razdelka z isto podlago (`tone="subtle"` za `tone="subtle"`) se brez
ločnice bereta kot en dolg prazen pas — dvojni odmik razdelka znese do 256 px
praznine. Rešitev ni le črta: zgornjemu razdelku zmanjšamo spodnji odmik, spodnji
dobi `!pt-0`, med njiju pa gre `<hr className="sp-rule" />` z enakim zrakom nad in
pod sabo.

```tsx
<Section tone="subtle" className="!pb-[var(--space-16)]"> … </Section>
<Section tone="subtle" className="!pt-0">
  <Container>
    <hr className="sp-rule mb-[var(--space-16)]" />
    …
```

`.sp-rule` je 2 px visok leseni rez — preliv iz `--les-700` prek `--les-500` in
`--les-300` v prosojno, torej se na desni strani izgubi namesto da bi se zaključil
z robom. Isto pravilo je bilo prej podvojeno še v `theme.css` kot `.rule-wood`;
tam je odstranjeno, veljavno ime je `.sp-rule`.
