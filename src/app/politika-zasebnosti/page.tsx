import Link from "next/link";
import { business } from "@/content/business";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Politika zasebnosti",
  description:
    "Kako Struktura Plus zbira, obdeluje in varuje osebne podatke iz obrazca za povpraševanje: nameni, pravne podlage, roki hrambe in vaše pravice po GDPR.",
  path: "/politika-zasebnosti",
});

/**
 * ⚠️ PRED ZAGONOM PREVERI:
 * 1. Resend je vpisan kot obdelovalec. Preveri še, ali je sklenjena pogodba o obdelavi
 *    podatkov (DPA) — Resend jo ponuja — in ali standardne pogodbene klavzule držijo.
 * 2. Da poštni predal info@strukturaplus.si dejansko obstaja in ga nekdo bere.
 * 3. Da je ponudnik gostovanja res Vercel Inc.
 *
 * Besedilo je prevzeto s stare strani in uskladeno z dejansko izvedbo nove:
 * Google Fonts in EmailJS sta odpadla (pisave gostujejo lokalno, obrazec teče
 * prek strežniške akcije), zato ju med obdelovalci ni več.
 */
export default function Page() {
  return (
    <LegalPage
      eyebrow="Pravno"
      title="Politika zasebnosti"
      path="/politika-zasebnosti"
      lead="Osebne podatke zbiramo samo takrat, ko nam jih sami posredujete prek obrazca za povpraševanje, po telefonu ali e-pošti. Spodaj je zapisano, kaj zbiramo, zakaj, kako dolgo hranimo in kaj lahko od nas zahtevate."
    >
      <section>
        <h2>1. Upravljavec osebnih podatkov</h2>
        <p>Upravljavec osebnih podatkov, zbranih prek te spletne strani, je:</p>
        <p>
          <strong>{business.name}</strong>
          <br />
          {business.legalEntity}
          <br />
          {business.address.street}, {business.address.postalCode} {business.address.city},{" "}
          {business.address.countryName}
          <br />
          E-pošta: <a href={`mailto:${business.email}`}>{business.email}</a>
          <br />
          Telefon: <a href={business.phoneHref}>{business.phoneDisplay}</a>
        </p>
        <p>
          Podjetje je do leta 2026 poslovalo pod imenom {business.formerName}; gre za isto pravno
          osebo in isto dejavnost.
        </p>
        <p>
          Za vsa vprašanja v zvezi z obdelavo osebnih podatkov nas kontaktirajte na zgornji naslov
          ali e-poštni naslov. Posebne pooblaščene osebe za varstvo podatkov nam zakon ne nalaga in
          je nimamo imenovane.
        </p>
      </section>

      <section>
        <h2>2. Katere osebne podatke zbiramo</h2>
        <p>
          Osebne podatke zbiramo samo, kadar nam jih posredujete sami, ali kadar nastanejo
          samodejno ob obisku spletne strani.
        </p>
        <h3>Podatki iz obrazca za povpraševanje</h3>
        <ul>
          <li>ime in priimek</li>
          <li>e-poštni naslov</li>
          <li>telefonska številka (neobvezno)</li>
          <li>vrsta storitve, za katero se zanimate</li>
          <li>lokacija objekta (neobvezno)</li>
          <li>vsebina sporočila oziroma povpraševanja</li>
          <li>
            priložene datoteke, če jih pripnete (fotografije prostora ali načrti) — največ šest
            datotek in skupno do 20 MB
          </li>
          <li>vaše soglasje za obdelavo, skupaj z datumom oddaje</li>
        </ul>
        <p>
          Priložene datoteke se pripnejo sporočilu, ki ga prejmemo v svoj e-poštni predal. Na
          spletni strani se ne shranijo — strežnik jih po oddaji obrazca ne zapiše na disk in ne
          obdrži. Hranijo se torej samo v našem poštnem predalu, po enakih rokih kot preostalo
          povpraševanje.
        </p>
        <p>
          Polj, ki niso označena kot obvezna, vam ni treba izpolniti. Prosimo, da v sporočilo ne
          vpisujete podatkov, ki za pripravo ponudbe niso potrebni — zlasti ne podatkov o zdravju,
          finančnem stanju ali drugih občutljivih okoliščinah.
        </p>
        <h3>Tehnični podatki ob obisku</h3>
        <ul>
          <li>IP naslov</li>
          <li>datum in čas obiska</li>
          <li>vrsta brskalnika in operacijskega sistema</li>
          <li>zahtevani naslov strani in referenčna stran (od kod ste prišli)</li>
        </ul>
        <p>
          Te podatke samodejno beleži naš ponudnik gostovanja v okviru standardnih strežniških
          dnevnikov. Sami jih ne zbiramo, ne povezujemo z drugimi podatki in ne analiziramo v
          statistične ali tržne namene. Spletna stran ne uporablja piškotkov — podrobneje v{" "}
          <Link href="/piskotki">politiki piškotkov</Link>.
        </p>
      </section>

      <section>
        <h2>3. Namen in pravna podlaga obdelave</h2>
        <h3>Odgovor na povpraševanje in priprava ponudbe</h3>
        <p>
          Podatke iz obrazca obdelujemo zato, da vam lahko odgovorimo, se po potrebi dogovorimo za
          ogled in izmero ter pripravimo individualno ponudbo. Pravna podlaga je izvajanje ukrepov
          na zahtevo posameznika pred sklenitvijo pogodbe (člen 6(1)(b) GDPR) in zakoniti interes
          upravljavca za odziv na poslovne poizvedbe (člen 6(1)(f) GDPR).
        </p>
        <h3>Izvedba naročene storitve</h3>
        <p>
          Ko pride do naročila, podatke obdelujemo za izvedbo del, obračun in izpolnitev zakonskih
          obveznosti. Pravna podlaga je izpolnitev pogodbe (člen 6(1)(b) GDPR) in izpolnitev
          zakonskih obveznosti upravljavca (člen 6(1)(c) GDPR).
        </p>
        <h3>Delovanje in varnost spletne strani</h3>
        <p>
          Tehnične podatke iz strežniških dnevnikov obdelujemo za zagotavljanje delovanja,
          stabilnosti in varnosti spletne strani ter za preprečevanje zlorab. Pravna podlaga je
          zakoniti interes upravljavca (člen 6(1)(f) GDPR).
        </p>
        <p>
          Osebnih podatkov ne uporabljamo za neposredno trženje, profiliranje ali samodejno
          sprejemanje odločitev.
        </p>
      </section>

      <section>
        <h2>4. Rok hrambe podatkov</h2>
        <ul>
          <li>
            <strong>Povpraševanja, ki niso vodila do posla:</strong> hranimo jih, dokler je to
            potrebno za pripravo in odgovor na ponudbo, nato jih izbrišemo v razumnem roku po
            zaključku komunikacije, najpozneje v dveh letih od zadnjega stika. Enako velja za
            datoteke, ki ste jih pripeli — izbrišejo se skupaj s povpraševanjem.
          </li>
          <li>
            <strong>Podatki, vezani na pogodbe in poslovne listine:</strong> skladno z zakonodajo
            (Zakon o gospodarskih družbah, davčna zakonodaja) praviloma 10 let od nastanka listine.
          </li>
          <li>
            <strong>Strežniški dnevniki:</strong> kratek čas, določen s politiko ponudnika
            gostovanja, izključno za namene varnosti.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Komu posredujemo podatke</h2>
        <p>
          Vaših osebnih podatkov ne prodajamo, ne oddajamo v najem in jih ne posredujemo tretjim
          osebam za tržne namene. Podatki so dostopni le naslednjim pogodbenim obdelovalcem, in
          sicer v obsegu, ki je nujen za opravljanje njihove storitve:
        </p>
        <ul>
          <li>
            <strong>Ponudnik gostovanja (Vercel Inc.):</strong> hrani datoteke spletne strani in
            obdeluje standardne strežniške dnevnike. Vercel je podpisnik okvira EU–US Data Privacy
            Framework.
          </li>
          <li>
            <strong>Ponudnik za dostavo e-pošte (Resend, Resend Inc., ZDA):</strong> vsebino
            oddanega obrazca skupaj s priloženimi datotekami posreduje na naš e-poštni naslov in
            jo obdeluje izključno za ta namen. Ker gre za prenos v Združene države, torej v tretjo
            državo, prenos poteka na podlagi standardnih pogodbenih klavzul Evropske komisije.
          </li>
          <li>
            <strong>Računovodski servis:</strong> kadar je to potrebno za izpolnitev zakonskih
            obveznosti (računovodstvo, davčno poročanje).
          </li>
        </ul>
        <p>
          Podatkov ne posredujemo oglaševalskim omrežjem in na strani ni nameščenih analitičnih
          orodij. Pisave in slike se nalagajo z naše domene, zato se vaš IP naslov ob obisku ne
          posreduje zunanjim ponudnikom vsebin.
        </p>
      </section>

      <section>
        <h2>6. Varnost podatkov</h2>
        <p>
          Spletna stran je dostopna izključno prek šifrirane povezave (HTTPS). Dostop do prejetih
          povpraševanj ima samo oseba, ki pripravlja ponudbe. Zbiramo najmanjši obseg podatkov, ki
          še omogoča pripravo ponudbe, in jih ne uporabljamo za druge namene.
        </p>
      </section>

      <section>
        <h2>7. Vaše pravice</h2>
        <p>V skladu z Uredbo (EU) 2016/679 (GDPR) imate naslednje pravice:</p>
        <ul>
          <li>
            <strong>Pravica do dostopa</strong> — zahtevate lahko potrditev, ali obdelujemo vaše
            podatke, in dostop do njih.
          </li>
          <li>
            <strong>Pravica do popravka</strong> — zahtevate lahko popravek netočnih ali dopolnitev
            nepopolnih podatkov.
          </li>
          <li>
            <strong>Pravica do izbrisa</strong> — pod določenimi pogoji lahko zahtevate izbris
            svojih podatkov.
          </li>
          <li>
            <strong>Pravica do omejitve obdelave</strong> — zahtevate lahko, da obdelavo omejimo.
          </li>
          <li>
            <strong>Pravica do ugovora</strong> — ugovarjate lahko obdelavi, ki temelji na zakonitem
            interesu.
          </li>
          <li>
            <strong>Pravica do prenosljivosti</strong> — kadar obdelava temelji na privolitvi ali
            pogodbi in poteka samodejno, lahko podatke prejmete v strukturirani obliki.
          </li>
          <li>
            <strong>Preklic privolitve</strong> — kadar obdelava temelji na vaši privolitvi, jo
            lahko kadar koli prekličete, ne da bi to vplivalo na zakonitost obdelave pred
            preklicem.
          </li>
        </ul>
        <p>
          Zahtevo uveljavite pisno na <a href={`mailto:${business.email}`}>{business.email}</a>. Na
          njo odgovorimo najpozneje v enem mesecu od prejema.
        </p>
        <p>
          Če menite, da vaše pravice niso spoštovane, se lahko pritožite pri Informacijskem
          pooblaščencu Republike Slovenije, Dunajska cesta 22, 1000 Ljubljana (
          <a href="https://www.ip-rs.si" rel="noopener">
            ip-rs.si
          </a>
          ).
        </p>
      </section>

      <section>
        <h2>8. Piškotki</h2>
        <p>
          Spletna stran ne uporablja piškotkov za sledenje, analitiko ali trženje. Podrobnosti so v{" "}
          <Link href="/piskotki">politiki piškotkov</Link>.
        </p>
      </section>

      <section>
        <h2>9. Spremembe politike zasebnosti</h2>
        <p>
          To politiko lahko po potrebi posodobimo — na primer ob spremembi obdelovalcev ali
          funkcionalnosti spletne strani. Veljavna različica je vedno objavljena na tej strani z
          datumom zadnje posodobitve.
        </p>
      </section>
    </LegalPage>
  );
}
