import Link from "next/link";
import { business } from "@/content/business";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { ConsentReset } from "@/components/Consent";

export const metadata = pageMeta({
  title: "Politika piškotkov",
  description:
    "Kateri piškotki se na strani Struktura Plus naložijo, šele ko v to privolite, koliko časa se hranijo in kako svojo odločitev kadar koli spremenite.",
  path: "/piskotki",
});

/**
 * ⚠️ PRED ZAGONOM PREVERI:
 * 1. Ponudnika gostovanja (spodaj je naveden Vercel) — če se spremeni, popravi tudi
 *    Politiko zasebnosti.
 * 2. V Google Analytics (Admin → Nastavitve podatkov → Hramba podatkov) nastavi rok
 *    hrambe. Spodaj je zapisano "najdlje 14 mesecev"; če bo rok drugačen, popravi
 *    tudi tukaj in v Politiki zasebnosti.
 * 3. Če se kdaj doda še kakšno orodje (Meta Pixel, Google Tag Manager, vgrajeni
 *    Google Zemljevid, YouTube), je treba razširiti spodnjo tabelo piškotkov in
 *    pasico za soglasje.
 *
 * Besedilo opisuje dejansko izvedbo: pisave so gostovane lokalno, obrazec teče prek
 * strežniške akcije na isti domeni, GA4 pa se naloži šele po kliku na "Sprejmem"
 * (glej src/components/Consent.tsx).
 */
export default function Page() {
  return (
    <LegalPage
      eyebrow="Pravno"
      title="Politika piškotkov"
      path="/piskotki"
      lead="Ob prvem obisku vas vprašamo, ali smemo meriti obisk strani. Dokler ne privolite, se v vaš brskalnik ne shrani noben piškotek. Spodaj je zapisano, kaj se naloži po privolitvi, kako dolgo ostane in kako odločitev kadar koli spremenite."
    >
      <section>
        <h2>Kaj so piškotki</h2>
        <p>
          Piškotki (angl. <em>cookies</em>) so majhne besedilne datoteke, ki jih spletna stran ob
          obisku shrani v vaš brskalnik. Vanje se zapišejo podatki, ki strani pomagajo delovati
          pravilno, jo znajo prepoznati ob naslednjem obisku ali pa omogočajo merjenje prometa in
          prilagajanje oglasov. Na njihovo shranjevanje vplivate prek nastavitev brskalnika in prek
          pasice, ki se pokaže ob prvem obisku te strani.
        </p>
      </section>

      <section>
        <h2>Brez vaše privolitve se ne naloži nič</h2>
        <p className="sp-note">
          <strong>Pred privolitvijo stran ne shrani nobenega piškotka</strong> in ne pošlje nobenega
          zahtevka Googlu. Skripta za merjenje obiska se v stran sploh ne vstavi, dokler na pasici
          ne kliknete »Sprejmem«. Če kliknete »Zavrnem« ali pasico pustite pri miru, ostane stran
          povsem brez piškotkov.
        </p>
      </section>

      <section>
        <h2>Kateri piškotki se naložijo po privolitvi</h2>
        <p>
          Če privolite v merjenje obiska, se naloži Google Analytics 4. Ta v vaš brskalnik shrani
          dva piškotka. Oba sta naša lastna (postavljena z domene strukturaplus.si), nobeden ne
          vsebuje vašega imena, e-pošte ali drugih podatkov, ki bi vas osebno določali.
        </p>
        <ul>
          <li>
            <strong>_ga</strong> — loči posamezne obiskovalce med seboj, da je mogoče prešteti, koliko
            različnih ljudi je obiskalo stran. Trajanje: 2 leti.
          </li>
          <li>
            <strong>_ga_6EJ63ZPCZK</strong> — hrani stanje trenutnega obiska (kdaj se je začel, katere
            strani ste si ogledali v istem obisku). Trajanje: 2 leti.
          </li>
        </ul>
        <p>
          Podatke o obisku obdeluje Google kot naš pogodbeni obdelovalec. Zbiramo samo statistiko o
          obisku strani — nobenih oglaševalskih piškotkov ni, podatkov ne uporabljamo za oglaševanje
          in jih ne posredujemo oglaševalskim omrežjem. V Googlovih nastavitvah so oglaševalske
          funkcije (<em>Google signals</em>, deljenje z oglasnimi storitvami) izklopljene.
        </p>
      </section>

      <section>
        <h2>Zapis o vaši odločitvi</h2>
        <p>
          Vašo odločitev moramo nekam shraniti, sicer bi vas pasica spraševala ob vsakem obisku.
          Zapišemo jo v lokalni pomnilnik brskalnika (<code>localStorage</code>) pod ključem{" "}
          <code>sp-soglasje</code>, skupaj z datumom. Zapis ostane v vašem brskalniku, nikoli se ne
          pošlje na strežnik in ne vsebuje ničesar, kar bi vas lahko določilo. Po šestih mesecih
          poteče in vas pasica vpraša znova. Ta zapis je nujen za delovanje vaše odločitve, zato
          zanj privolitev ni potrebna.
        </p>
      </section>

      <section>
        <h2>Kaj se naloži v vsakem primeru</h2>
        <p>
          Ne glede na vašo odločitev stran ob obisku ne pošlje nobenega zahtevka drugim tujim
          strežnikom. Konkretno:
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
          <li>
            <strong>Ni vgrajenih zunanjih vsebin.</strong> Na strani ni vgrajenega zemljevida,
            videoposnetkov ali gumbov družbenih omrežij, ki bi sami postavili piškotek.
          </li>
        </ul>
      </section>

      <section>
        <h2>Kaj se ob obisku zabeleži na strežniku</h2>
        <p>
          Ponudnik gostovanja (Vercel Inc.) ob vsakem obisku zapiše standardne strežniške dnevnike:
          IP naslov, datum in čas zahtevka, zahtevani naslov, vrsto brskalnika in operacijskega
          sistema. To ni piškotek — zapis nastane na strežniku in ne v vašem brskalniku, zato zanj
          privolitev ni potrebna. Dnevniki so potrebni za varno in zanesljivo delovanje strani,
          hranijo se kratek čas in jih ne analiziramo v tržne ali statistične namene. Več o tem v{" "}
          <Link href="/politika-zasebnosti">politiki zasebnosti</Link>.
        </p>
      </section>

      <section>
        <h2>Kako odločitev spremenite</h2>
        <p>
          Odločitev lahko kadar koli prekličete ali spremenite. S spodnjim gumbom izbrišemo zapis o
          vaši odločitvi in piškotka <code>_ga</code> in <code>_ga_6EJ63ZPCZK</code>, stran pa se
          osveži in vas vpraša znova.
        </p>
        <div>
          <ConsentReset />
        </div>
        <p>
          Preklic velja za naprej in ne vpliva na zakonitost obdelave, ki je potekala pred njim.
          Podatki, ki so bili zbrani pred preklicem, ostanejo v Google Analytics do izteka roka
          hrambe.
        </p>
      </section>

      <section>
        <h2>Kako piškotke upravljate v brskalniku</h2>
        <p>
          Piškotke in shranjene podatke spletnih strani lahko kadar koli pregledate, izbrišete ali
          vnaprej onemogočite tudi v nastavitvah brskalnika:
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
          Onemogočanje vseh piškotkov na delovanje te strani ne vpliva — stran deluje enako tudi
          brez njih.
        </p>
      </section>

      <section>
        <h2>Spremembe te politike</h2>
        <p>
          Politiko piškotkov posodobimo, kadar uvedemo spremembe na spletni strani. Veljavna
          različica je vedno objavljena na tej strani, skupaj z datumom zadnje posodobitve. Za
          vprašanja smo dosegljivi na <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
