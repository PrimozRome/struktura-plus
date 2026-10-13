import Link from "next/link";
import { business } from "@/content/business";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Politika piškotkov",
  description:
    "Spletna stran Struktura Plus ne uporablja piškotkov za sledenje, analitiko ali trženje. Kaj to pomeni in kako piškotke upravljate v brskalniku.",
  path: "/piskotki",
});

/**
 * ⚠️ PRED ZAGONOM PREVERI:
 * 1. Ponudnika gostovanja (spodaj je naveden Vercel) — če se spremeni, popravi tudi
 *    Politiko zasebnosti.
 * 2. Če se kdaj namesti GA4, Meta Pixel, Google Tag Manager, vgrajeni Google Zemljevid
 *    ali YouTube, to besedilo NE drži več. Takrat je treba dopolniti seznam,
 *    dodati pasico za soglasje in soglasje beležiti.
 *
 * Besedilo je prevzeto s stare strani in uskladeno z dejansko izvedbo nove:
 * pisave so gostovane lokalno (ni več zahtevka na Google Fonts), obrazec teče
 * prek strežniške akcije na isti domeni (ni več EmailJS v brskalniku).
 */
export default function Page() {
  return (
    <LegalPage
      eyebrow="Pravno"
      title="Politika piškotkov"
      path="/piskotki"
      lead="Ta spletna stran ne nalaga piškotkov za sledenje, analitiko ali trženje. Spodaj je zapisano, kaj se ob obisku dejansko zgodi in kako shranjevanje v brskalniku nadzorujete sami."
    >
      <section>
        <h2>Kaj so piškotki</h2>
        <p>
          Piškotki (angl. <em>cookies</em>) so majhne besedilne datoteke, ki jih spletna stran ob
          obisku shrani v vaš brskalnik. Vanje se zapišejo podatki, ki strani pomagajo delovati
          pravilno, jo znajo prepoznati ob naslednjem obisku ali pa omogočajo merjenje prometa in
          prilagajanje oglasov. Na njihovo shranjevanje vplivate prek nastavitev brskalnika.
        </p>
      </section>

      <section>
        <h2>Kateri piškotki se uporabljajo na tej strani</h2>
        <p className="sp-note">
          <strong>Nobeni.</strong> Spletna stran strukturaplus.si ne namešča piškotkov — ne nujnih,
          ne analitičnih, ne oglaševalskih. Zato pasica za soglasje k piškotkom ni potrebna.
        </p>
        <p>
          Na strani ni nameščen Google Analytics, Google Tag Manager, Meta Pixel ali katero koli
          drugo sledilno oziroma trženjsko orodje. Prav tako na strani ni vgrajenih zunanjih
          vsebin, ki bi ob nalaganju same postavile piškotek — ni vgrajenega zemljevida, ni
          vgrajenih videoposnetkov in ni gumbov družbenih omrežij.
        </p>
      </section>

      <section>
        <h2>Zakaj lahko to trdimo</h2>
        <p>
          Stran je zasnovana tako, da ob obisku ne pošlje nobenega zahtevka na tuje strežnike.
          Konkretno:
        </p>
        <ul>
          <li>
            <strong>Pisave gostujejo na naši domeni.</strong> Namesto nalaganja s strežnikov Google
            Fonts so datoteke pisav shranjene pri nas, zato se vaš IP naslov ob obisku ne posreduje
            Googlu.
          </li>
          <li>
            <strong>Obrazec za povpraševanje teče na naši strani.</strong> Podatki iz obrazca se
            obdelajo na strežniku spletne strani in posredujejo na naš e-poštni naslov. V brskalnik
            se pri tem ne zapiše nič.
          </li>
          <li>
            <strong>Slike in vsebina so naše.</strong> Fotografije se nalagajo z iste domene, ne z
            zunanjih omrežij za dostavo vsebin.
          </li>
        </ul>
      </section>

      <section>
        <h2>Kaj se ob obisku vseeno zabeleži</h2>
        <p>
          Ponudnik gostovanja (Vercel Inc.) ob vsakem obisku zapiše standardne strežniške dnevnike:
          IP naslov, datum in čas zahtevka, zahtevani naslov, vrsto brskalnika in operacijskega
          sistema. To ni piškotek — zapis nastane na strežniku in ne v vašem brskalniku. Dnevniki
          so potrebni za varno in zanesljivo delovanje strani, hranijo se kratek čas in jih ne
          analiziramo v tržne ali statistične namene. Več o tem v{" "}
          <Link href="/politika-zasebnosti">politiki zasebnosti</Link>.
        </p>
      </section>

      <section>
        <h2>Shranjevanje v brskalniku</h2>
        <p>
          Stran ne uporablja niti lokalnega pomnilnika brskalnika (<code>localStorage</code>,{" "}
          <code>sessionStorage</code>) niti podatkovnih baz v brskalniku. Vaš brskalnik lahko sam,
          iz tehničnih razlogov, začasno shrani slike, pisave in sloge v svoj predpomnilnik, da se
          stran ob naslednjem obisku naloži hitreje. Gre za običajno delovanje brskalnika; ti
          podatki ne omogočajo prepoznave obiskovalca in jih ne moremo brati.
        </p>
      </section>

      <section>
        <h2>Kako piškotke upravljate v brskalniku</h2>
        <p>
          Piškotke in shranjene podatke drugih spletnih strani lahko kadar koli pregledate,
          izbrišete ali vnaprej onemogočite v nastavitvah brskalnika:
        </p>
        <ul>
          <li>
            <strong>Google Chrome:</strong> Nastavitve → Zasebnost in varnost → Piškotki in drugi
            podatki spletnih mest
          </li>
          <li>
            <strong>Mozilla Firefox:</strong> Nastavitve → Zasebnost in varnost → Piškotki in
            podatki spletnih mest
          </li>
          <li>
            <strong>Safari:</strong> Nastavitve → Zasebnost → Upravljanje podatkov spletnih mest
          </li>
          <li>
            <strong>Microsoft Edge:</strong> Nastavitve → Piškotki in dovoljenja spletnih mest
          </li>
        </ul>
        <p>
          Onemogočanje vseh piškotkov na delovanje te strani ne vpliva, lahko pa vpliva na
          delovanje drugih spletnih strani.
        </p>
      </section>

      <section>
        <h2>Kaj se spremeni, če uvedemo merjenje obiska</h2>
        <p>
          Če bomo v prihodnje vpeljali orodje za merjenje obiska ali oglaševanje, bomo to politiko
          pred uvedbo dopolnili s seznamom piškotkov, njihovim namenom, trajanjem in ponudnikom,
          dodali pasico za soglasje in beležili vaše odločitve. Do takrat velja zgoraj zapisano:
          soglasja ni treba dajati, ker ni česa privoliti.
        </p>
      </section>

      <section>
        <h2>Spremembe te politike</h2>
        <p>
          Politiko piškotkov lahko posodobimo, kadar uvedemo spremembe na spletni strani. Veljavna
          različica je vedno objavljena na tej strani, skupaj z datumom zadnje posodobitve. Za
          vprašanja smo dosegljivi na <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
