# Struktura Plus — spletna stran

Next.js 16 (App Router) + Tailwind v4. Vsa vsebina je v slovenščini, vse strani se
izrišejo strežniško.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # produkcijski build
npm start
```

## Struktura

```
design-system/          žetoni, tema, komponentni razredi, README z načeli
src/content/            VSA VSEBINA — tu se ureja besedilo, ne v komponentah
  business.ts           NAP podatki, navigacija (edini vir resnice)
  services.ts           index 12 storitev
  services/*.ts         vsebina po storitvi (H2, FAQ, cene, ključne besede)
  articles.ts           Nasveti, vključno s temeljnim člankom o vrstah lesa
  woods.ts              primerjalna tabela vrst lesa
  projects.ts           reference (trenutno testne)
  home.ts               FAQ, postopek in razlikovalne točke na domači strani
src/lib/seo.ts          pageMeta() — title, description, canonical, OG za vsako ruto
src/lib/schema.ts       JSON-LD gradniki
src/components/         skupne komponente
src/app/                rute
```

## Strani

| Ruta | Kaj |
| --- | --- |
| `/` | pristajalna stran |
| `/storitve` | razdelilna stran z vsemi dvanajstimi storitvami |
| `/storitve/[slug]` | 12 storitvenih strani iz `src/content/services/` |
| `/cenik` | pregled okvirnih cen (element, ki ga konkurenca nima) |
| `/projekti`, `/projekti/[slug]` | reference — **trenutno noindex, testni vnosi** |
| `/nasveti`, `/nasveti/[slug]` | članki, vključno s temeljnim o vrstah lesa |
| `/o-nas` | zgodba in kompetence — **testno besedilo** |
| `/kontakt` | obrazec za povpraševanje |
| `/hvala` | po oddaji obrazca, noindex — pogoj za merjenje konverzij |
| `/politika-zasebnosti`, `/piskotki`, `/splosni-pogoji` | **testno besedilo** |

## Kaj je narejeno za SEO

Vsaka ruta ima svoj `title`, `description`, `canonical` in `openGraph`. To je bila
največja napaka stare strani — canonical je bil povsod trdo zakodiran na domačo
stran, zato ni indeksirala nič razen nje.

Vse strani so Server Components brez `'use client'`. Vsebina, naslovi in JSON-LD so
v strežniškem HTML-ju; preveriš z `curl -s <url> | grep <besedilo>`.

JSON-LD: `GeneralContractor` in `WebSite` v korenskem layoutu (z `@id`, na katerega
se sklicuje vse ostalo), `Service` + `hasOfferCatalog` na vsaki storitveni strani,
`FAQPage` tam, kjer so vprašanja, `BreadcrumbList` povsod, `Article` na člankih.

`sitemap.ts` in `robots.ts` se generirata iz dejanskih rut. Testni projekti v
sitemap ne gredo, dokler `PROJECTS_READY` ni `true`.

`not-found.tsx` vrne pravi status 404 s slovenskim besedilom.

## Videz

Stran je **samo svetla**: topla peščena podlaga (`#FCF9F4`), izmenjujoči razdelki
v `#F5EDE1`, poudarjeni bloki v `#EFE6D8`. Temne ploskve so rezervirane za nogo in
trak s pozivom.

Samodejnega temnega načina ni — `color-scheme: light` in brez
`@media (prefers-color-scheme: dark)`. Temna paleta v `design-system/tokens.css`
ostaja napisana in preverjena, če bo kdaj potrebna; aktivira se z
`data-theme="dark"` na `<html>`.

Kartice (storitve, projekti, članki) imajo radij 10 px, gumbi in polja 4 px,
veliki paneli 14 px.

Dolgo besedilo je urejeno prek `.sp-prose`: 17 px, vodilna črta 1.75, 24 px med
odstavki in 44–64 px nad naslovi H2. Podrobno v `design-system/README.md`.

## Fotografije

Fotografije so prevzete s prejšnje strani strukturaplus.si in predelane v AVIF in
WebP v štirih širinah. Vir: `.raw-slike/` (ni v gitu), razporeditev po storitvah:
`scripts/mapiranje.py`, predelava: `python3 scripts/slike.py`, manifest:
`src/content/images.ts`.

Ko naročnik dostavi svoje fotografije, se jih odloži v `.raw-slike/`, vpiše v
`mapiranje.py` in skripta se zažene znova — v kodi ni treba spremeniti ničesar.

## Hitrost

- Nič JavaScripta na ravni strani: page-specific JS je 140–186 B, ostalo je React runtime.
- Mobilni meni in FAQ sta `<details>`, ne odjemalske komponente — brez vpliva na INP.
- Obrazec je Server Action, deluje brez JavaScripta.
- Pisavi sta samostojno goščeni (`public/fonts/`), variabilni, z `unicode-range`
  za latin in latin-ext, in prednaloženi. Nič klicev na fonts.googleapis.com.
- Vse slike imajo fiksno razmerje stranic (`Figure`) — brez CLS ob zamenjavi.
- Logotip je ena 29 KB datoteka prek `<picture>`, ne dve prek `next/image`.

---

## Logotip

Logotip je vektorski. Znak je prekrivni spoj dveh tramov, napis je Archivo 700,
pretvorjen v obrise — zato datoteke ne potrebujejo pisave in so ostre pri vsaki
velikosti. Vse različice so v `public/brand/`:

| datoteka | raba |
| --- | --- |
| `logo.svg` | osnovni, vodoravni. To uporablja glava. |
| `logo-inverse.svg` | za temno podlago |
| `logo-stacked.svg`, `logo-stacked-inverse.svg` | zloženo, za kvadratne prostore |
| `logo-mono-dark.svg`, `logo-mono-light.svg` | enobarvno s fiksno barvo — žig, vezenje, faks |
| `logo-mono.svg` | enobarvno s `currentColor` — samo za vgradnjo v kodo, ne prek `<img>` |
| `mark.svg`, `mark-mono.svg` | samo znak |
| `icon-16/32/full.svg` | ikone; 16 je brez zaledja, ker pri tej velikosti šteje vsak piksel |
| `logo-horizontal.png`, `logo-stacked.png` | rastrski izvoz za sheme in zunanje rabe |

Pri enobarvni različici je šiv prava luknja v obrisu (`fill-rule="evenodd"`),
zato spoj ostane viden na katerikoli podlagi.

Razmerje med znakom in napisom je nastavljeno s spremenljivko `FS` v skripti, ki
je logotip ustvarila: napis meri 48 enot, ko je znak visok 100. Višina verzalk s
tem znese 33 % višine znaka. Pri prvotnih 40 enotah je bilo 27 % in znak je
prevladoval; nad 52 enotami napis postane širši od koristnega — logotip v glavi
bi zasedel več kot 210 px in začel stiskati navigacijo.

**Ob dodajanju novih datotek:** prenos prek mostička do računalnika v SVG vrine
oznako C2PA, veliko približno 7,8 KB. Za datoteke, ki se nalagajo ob vsakem
obisku, je to nesorazmerno, zato jo odstranimo — glej `<metadata>` blok.

## ⚠️ Pred zagonom (obvezno)

1. **Cene.** Vsi razponi v `src/content/services/*.ts` so tržne ocene. Naročnik jih
   mora potrditi. Napačna cena na živi strani je večja škoda kot odsotnost cene.
2. **Fotografije.** Storitvene strani imajo fotografije s prejšnje strani. Večina je bila
   tam že pomanjšana in obrezana (izvirna ločljivost 1159–1920 px, pet posnetkov je polnih
   4080 px), zato hero slike na velikih zaslonih niso ostre. Za pergole, WPC terase in
   balkonske ograje so uporabljeni najbližji posnetki, ne točni. Naročnika je vredno
   prositi za izvirnike iz telefona — enkraten posel, velik učinek.

   Naslovna slika je poseben primer: prikaže se čez približno polovico širine zaslona,
   torej okoli 1400 dejanskih pik na zaslonu z dvojno gostoto. Izvirnik mora meriti vsaj
   1600 px po širini, sicer se na velikem zaslonu vidi mehkoba. Pri izbiri naj bo izvedba
   dokončana in pospravljena: brez pregrinjal na pohištvu, brez visečih kablov, brez
   prikolic, lestev in odpadnega materiala v kadru. Sončen posnetek v zeleni sezoni je
   vreden več kot boljša konstrukcija v sivem novembru. Razmerje naj bo 4 : 3 ali širše.
   (Fotografija kovinske pergole z WPC teraso, prejeta 23. 9. 2026, je za naslovno mesto
   premajhna — 1002 px — in ima v kadru vse tri naštete motnje; čaka se boljša.)
3. **Fotografije kovinskih nadstreškov in stopnic.** Strani
   `/storitve/kovinski-nadstreski/` in `/storitve/stopnice/` nimata svojih fotografij —
   s stare strani ni bilo posnetkov povsem kovinskih izvedb ne stopnic. Do dostave se
   izriše nevtralen blok. Obe strani sta vsebinsko pripravljeni, priporočam pa objavo
   šele s fotografijami.
4. **Projekti.** Vsi vnosi v `src/content/projects.ts` so testni. Zamenjaj jih in
   nastavi `PROJECTS_READY = true`. Izmišljene reference ne smejo v produkcijo.
5. **Stran O nas.** Besedilo je Markovo, zapisano po njegovem osnutku in razširjeno.
   Naj ga pred zagonom prebere in potrdi — zlasti ime nekdanjega delodajalca
   (Ecolution), navedbo "že več kot desetletje" in "zadnja leta kot s.p.".
   Fotografije so tri (družina, Marko pri montaži, postavljanje hiške); ostale
   doda naknadno. Družinska fotografija je starejša — na njej sta dve hčerki,
   v besedilu pa tri.
6. **Mnenja.** Vseh trinajst je resničnih, testnih ni več. Eno (WPC ograja) je prišlo
   brez podpisa in je označeno z `nameToBeConfirmed: true`, na strani pa podpisano kot
   "Zadovoljna stranka" — ko ime dobiš, ga vpiši in zastavico odstrani.
   Mnenja se izrišejo na treh mestih: šest izbranih (`featured: true`) na pristajalni,
   vsa na `/mnenja-strank`, posamezno pa še na strani storitve iz polja `service`.
   Novo mnenje torej doda samo en vnos v `src/content/testimonials.ts`.
   **Sheme Review / AggregateRating ne dodajamo in je ne bomo.** Razlog ni pristnost,
   ampak Googlovo pravilo o samopostrežnih ocenah: stran podjetja z oznako
   LocalBusiness ali Organization za mnenja o sebi ni upravičena do zvezdic v
   rezultatih. Zvezdice pridejo iz Google Business Profila (točka 12), ne od tod.
   AggregateRating bi bil poleg tega izmišljen — ta mnenja nimajo številčnih ocen.
   **Review / AggregateRating JSON-LD namerno ni dodan**; dodaj ga šele, ko bodo vsa
   mnenja prava in pridobljena od strank. Označevanje izmišljenih ocen je kršitev
   Googlovih smernic in tvega ročni ukrep.
7. **Pravne strani.** Besedila (`/piskotki`, `/politika-zasebnosti`, `/splosni-pogoji`)
   so prevzeta s stare strani in uskladena z dejansko izvedbo nove. Naj jih vseeno
   pregleda naročnik oziroma pravnik. Posebej preveri troje:
   - **Izjava o IRPS** v 9. točki splošnih pogojev. ZIsRPS zahteva, da ponudnik objavi,
     ali priznava kakšnega izvajalca izvensodnega reševanja potrošniških sporov.
     Zapisana je najpogostejša izbira pri s.p. — da nobenega ne priznava. Če je Marko
     kje registriran, je treba točko popraviti.
   - **Ponudnik za dostavo e-pošte** v 5. točki politike zasebnosti je zaenkrat opisan
     splošno. Ponudnik je Resend — vpiši ga (glej 8. točko spodaj).
   - **Davčna in matična številka** v `business.ts` sta prevzeti s stare strani.
   Napotilo na evropsko platformo ODR je odstranjeno — platforma je 20. julija 2025
   prenehala delovati. Nadomešča jo Evropski potrošniški center (epc.si).
   Datum "zadnja posodobitev" je en sam vir: `legalUpdated` v `business.ts`.
> **Opravljeno 29. 9. 2026 (SEO in E-E-A-T):** notranje povezovanje člankov (vsak
> članek zdaj prejme 2–16 povezav namesto ene), odstranjena pripona v naslovih
> (26 predolgih naslovov → 1 → 0), skrajšanih 15 meta opisov, podpis avtorja in
> avtorski blok na člankih, `Person` kot `author` in `image` v shemi `Article`,
> `llms.txt`, predpomnilnik za `/slike` in `/fonts`, `scroll-padding-top`,
> odstranjeni podvojeni prednalogi pisav. Popravljene tri dejanske napake
> (cena nadstreška, število kriterijev, posedanje grede) in nekaj slovničnih.
> Iz dnevnika odstranjeni osebni podatki, politika zasebnosti dopolnjena s
> prilogami in z imenom obdelovalca (Resend).
>
> **Ostaja odprto:** Google Business Profile in `sameAs`; resnični projekti;
> kontrast robov (1,36:1 in 1,93:1, prag je 3:1); `role="alert"` na obrazcu se
> po preusmeritvi ne prebere; neuspela oddaja izgubi vnos in priloge;
> `/storitve` preskoči raven naslova (h1 → h3); honeypot `company`;
> ni omejitve pogostosti oddaje; `openingHoursSpecification` brez `opens`.

8. **Pošiljanje e-pošte — Resend.** Priklopljeno (`src/lib/posta.ts`). Ob vsaki oddaji
   odideta dve sporočili: lastniku z vsemi polji in priponkami (z "reply-to" na naslov
   stranke) ter potrdilo stranki. Pred zagonom je treba:
   - **potrditi domeno `strukturaplus.si` v Resendu** (SPF in DKIM) — dokler ni potrjena,
     pošiljanje z naslova `info@strukturaplus.si` ne uspe in obrazec pokaže napako;
   - nastaviti `RESEND_API_KEY` na Vercelu (Settings → Environment Variables) in v
     krajevni `.env.local`; vzorec je v `.env.example`, ključ ne sodi v repozitorij;
   - v 5. točki politike zasebnosti kot ponudnika za dostavo e-pošte vpisati Resend
     (Resend Inc., ZDA — prenos v tretjo državo, torej preveri tudi pravno podlago);
   - oddati preizkusno povpraševanje s priponko in preveriti oba nabiralnika.

   Če pošiljanje lastniku ne uspe, stranka ne dobi strani za zahvalo, ampak sporočilo,
   naj pokliče — hkrati se celotno povpraševanje zapiše v dnevnik strežnika, da ga je
   mogoče rešiti iz zapisov. Neuspelo potrdilo stranki oddaje ne zruši.
   Priponke: največ 6 datotek in 10 MB skupaj (`src/lib/priloge.ts`); Resendova meja je
   40 MB na sporočilo po kodiranju, Next.js pa telo strežniške akcije omejuje z
   `serverActions.bodySizeLimit` v `next.config.ts` — te tri številke se morajo ujemati.
9. **www → non-www.** Uredi na ravni gostovanja (Vercel: primarna domena
   `strukturaplus.si`, `www` kot preusmeritev). Aplikacijski redirect tega ne naredi zanesljivo.
10. **Koordinate** v `business.ts` (`geo`) preveri — trenutno so približne.
11. **Google Search Console** in **Google Business Profile**: oddaj sitemap, preveri
   indeksiranje, uredi profil z istim NAP zapisom kot v nogi.
12. **Sezona visokih gred.** Povpraševanje po visokih gredah je izrazito sezonsko —
    vrh je približno sedemkrat višji od jesenske najnižje točke. Pred pomladjo
    nastavi `pinned: true` pri članku `polnjenje-visoke-grede` v
    `src/content/articles.ts`, da se prikaže med izpostavljenimi na strani Nasveti.
    Takrat je smiselno tudi preveriti pozicije za "lesene visoke grede" in
    "dvignjene grede" — to sta izraza, ki ju realno lahko dobimo; glavni izraz
    "visoke grede" držijo trgovine in ga ne ciljamo.
13. **Analitika.** Ob namestitvi GA4 dopolni stran o piškotkih in dodaj pasico za soglasje.
    Konverzijo veži na obisk `/hvala`. Dokler analitike ni, stran o piškotkih trdi, da
    stran ne pošlje nobenega zahtevka na tuje strežnike — kar drži in je preverjeno
    (sedem strani, vsi zahtevki na lastno domeno, nič piškotkov in nič `localStorage`).
    Prva vgrajena zunanja vsebina — zemljevid, YouTube, pisave z Googla, pasica — to
    trditev podre in besedilo je treba popraviti isti dan.

---

## Nadgradnje

Projekt teče na **Next.js 16.3.5 in React 19.3** (Node ≥ 20.9; preverjeno na 22.23).
Nadgradnja s 15.5.4 ni zahtevala nobene spremembe kode — `params` so bili že `Promise`,
`next/image` ne uporabljamo, obrazec je Server Action.

Dve stvari, ki sta se s 16 spremenili:

- **`next lint` ne obstaja več.** Skripta je odstranjena iz `package.json`; ESLint v tem
  projektu tako ali tako ni bil nastavljen. Če ga boš dodal, gre prek običajnega
  `eslint` CLI in `eslint-config-next`.
- **Turbopack je privzeti graditelj.** Na omrežno priklopljeni mapi (npr. mount v
  Cowork VM) zna prvi `next build` odpovedati z `PageNotFoundError`; ponovni zagon
  uspe. Na navadnem disku se to ne dogaja. V sili je na voljo `next build --webpack`.

Cena nadgradnje je merjena: JS na pristajalni strani je zrasel s **142 kB na 172 kB**
stisnjeno (459 → 561 kB surovo). Razlika je v Next runtime, ne v Reactu — React 19.1.1
in 19.3.0 dasta isti rezultat. JS je odložen, ne blokira izrisa in ne vpliva na LCP ali CLS.
