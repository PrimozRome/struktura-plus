# Struktura Plus — spletna stran

Next.js (App Router) stran za **Struktura Plus** (prej Lignum Mont) —
izdelava in montaža lesenih teras, ograj, nadstreškov, fasad in manjših lesenih
objektov. Domena: `strukturaplus.si`.

## Stanje

Stran je postavljena in se builda. Vsebina 12 storitvenih strani, 3 člankov in
pristajalne strani je napisana. Manjkajo fotografije, prave reference, pravna
besedila in potrjene cene — seznam je v README.md pod "Pred zagonom".

```
design-system/     žetoni, tema, komponentni razredi, README z načeli
src/content/       VSA VSEBINA — besedilo se ureja tu, ne v komponentah
src/lib/           seo.ts (metadata na ruto), schema.ts (JSON-LD)
src/components/    skupne komponente
src/app/           rute
public/            logotipi, ikone, pisave
```

Beri `README.md` za seznam strani in kaj je treba urediti pred zagonom,
`design-system/README.md` za vizualna načela.

## Pravila

**Barve in tipografija vedno iz žetonov.** V komponentah uporabljaj semantične
žetone (`bg-surface`, `text-text-muted`, `border-border`, `bg-primary`), nikoli
surovih lestvic in nikoli literalnih hex vrednosti. Barva, definirana samo
znotraj `@media (prefers-color-scheme: dark)`, je napaka — temna tema ima tri
stanja (sistemsko, izrecno svetlo, izrecno temno) in vsi trije morajo delovati.

**Pisavi** nalagaj prek `next/font/google`, obvezno `subsets: ['latin', 'latin-ext']`
— brez `latin-ext` se šumniki izrišejo iz nadomestne pisave.
Lora za naslove in logotip, Archivo za besedilo in vmesnik.

**Radij 2–3 px.** Ne uporabljaj `rounded-lg` ali večjih zaokrožitev razen pri
značkah in filtrih.

**Rob pred senco.** Ločevanje ploskev s 1 px robom, ne s sencami.

## SEO — izhaja iz analize obstoječe strani (september 2026)

Stara stran je bila React SPA brez SSR, s canonicalom trdo zakodiranim na domačo
stran. To sta bila razloga za skoraj ničelno organsko vidnost. Nova stran mora:

- Vsako stran renderirati strežniško (Server Components, brez `'use client'` na
  ravni strani). Preveri z `curl -s <url> | grep <vsebina>`.
- Imeti `metadata` z **lastnim** `title`, `description`, `alternates.canonical`
  in `openGraph` za vsako ruto. Nikoli ene vrednosti za vse.
- Uporabljati **eno** različico domene. Izberi non-www (`https://strukturaplus.si`)
  in nastavi 301 z www. `metadataBase` mora ustrezati izbrani različici.
- Imeti pravi 404 (`not-found.tsx`) s statusom 404 in slovenskim besedilom.
- Generirati `sitemap.ts` in `robots.ts` iz dejanskega seznama rut.
- Nositi JSON-LD: `GeneralContractor` z `@id: https://strukturaplus.si/#business`
  na vseh straneh, `Service` na vsaki storitveni strani (URL kaže na to stran,
  ne na sidro), `FAQPage` kjer so vprašanja, `BreadcrumbList` povsod,
  `Article` na straneh v /nasveti/.
- URL-ji brez šumnikov, v množini, dosledno brez zaključne poševnice.

Polna analiza: dokument "SEO strategija: Lignum Mont" v projektu Strukturaplus.si SEO.

## Podatki podjetja (NAP — povsod enak zapis)

```
Struktura Plus
Brdce 71, 1431 Dol pri Hrastniku, Slovenija
info@strukturaplus.si
+386 40 549 345
```

Isti zapis mora biti v nogi, na strani Kontakt, v JSON-LD in v Google Business
Profile. Vsako odstopanje slabi lokalni SEO.

## Jezik

Vsa vsebina in vsi vidni nizi so v slovenščini. Imena datotek, spremenljivk in
komponent v angleščini. Vikanje, brez vzklikov.
