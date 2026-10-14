import Link from "next/link";
import { business } from "@/content/business";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Splošni pogoji",
  description:
    "Splošni pogoji uporabe spletne strani Struktura Plus: namen strani, oddaja povpraševanja in sklenitev posla, avtorske pravice, odgovornost in reševanje sporov.",
  path: "/splosni-pogoji",
});

/**
 * ⚠️ PRED ZAGONOM POTRDI Z NAROČNIKOM:
 * 1. Izjava o IRPS v 9. točki. Zakon o izvensodnem reševanju potrošniških sporov
 *    zahteva, da ponudnik na spletni strani objavi, ali priznava kakšnega izvajalca
 *    IRPS. Spodaj je zapisana najpogostejša izbira pri s.p. — da nobenega ne priznava.
 *    Če je Marko registriran pri kakšnem izvajalcu, je treba točko popraviti.
 * 2. Davčno in matično številko v 1. točki (prevzeti s stare strani).
 *
 * Opomba: stara stran je napotovala na evropsko platformo ODR. Ta je 20. julija 2025
 * prenehala delovati, zato je napotilo odstranjeno in nadomeščeno z ECC Slovenija.
 *
 * Poslovni pogoji izvedbe (roki, plačilna dinamika, garancijska doba) tu namenoma
 * niso zapisani — določeni so v posamični pisni ponudbi. Če jih naročnik želi
 * poenotiti in objaviti, jih dodamo kot samostojno točko.
 */
export default function Page() {
  return (
    <LegalPage
      eyebrow="Pravno"
      title="Splošni pogoji"
      path="/splosni-pogoji"
      lead="Ti pogoji urejajo uporabo spletne strani strukturaplus.si in oddajo povpraševanja. Stran ni spletna trgovina — vsaka storitev se dogovori individualno, na podlagi ogleda, izmere in pisne ponudbe."
    >
      <section>
        <h2>1. Podatki o ponudniku</h2>
        <p>
          <strong>{business.name}</strong>
          <br />
          {business.legalEntity}
          <br />
          {business.address.street}, {business.address.postalCode} {business.address.city},{" "}
          {business.address.countryName}
          <br />
          Davčna številka: {business.taxId}
          <br />
          Matična številka: {business.companyId}
          <br />
          E-pošta: <a href={`mailto:${business.email}`}>{business.email}</a>
          <br />
          Telefon: <a href={business.phoneHref}>{business.phoneDisplay}</a>
        </p>
        <p>
          Podjetje je do leta 2026 poslovalo pod imenom {business.formerName}. Gre za isto pravno
          osebo, isto dejavnost in iste kontaktne podatke.
        </p>
      </section>

      <section>
        <h2>2. Namen in vsebina spletne strani</h2>
        <p>
          Spletna stran strukturaplus.si je informativna predstavitvena stran podjetja{" "}
          {business.name}. Namenjena je predstavitvi storitev izdelave in montaže lesenih ter WPC
          zunanjih rešitev — terase, ograje, nadstreški, pergole, fasade, ravne strehe, stopnice,
          vrtni objekti in sorodni projekti — ter oddaji povpraševanj prek obrazca.
        </p>
        <p>
          Spletna stran ne omogoča spletnega nakupa, ni spletna trgovina in ne izvaja elektronskih
          plačil. Vse storitve se dogovarjajo individualno.
        </p>
        <p>
          Cene, roki in obsegi del, navedeni na spletni strani — vključno z orientacijskimi cenami
          na strani <Link href="/cenik">Cenik</Link> — so informativni in nezavezujoči. Služijo
          zgolj za lažjo predstavo o velikostnem redu naložbe; zavezujoča je izključno pisna
          ponudba.
        </p>
      </section>

      <section>
        <h2>3. Povpraševanje in sklenitev posla</h2>
        <p>
          Oddaja povpraševanja prek obrazca, telefona ali e-pošte ne pomeni naročila storitve in ne
          ustvari pogodbenega razmerja.
        </p>
        <p>
          Na podlagi vašega povpraševanja in po morebitnem ogledu lokacije pripravimo individualno
          ponudbo, ki vključuje:
        </p>
        <ul>
          <li>opis del in obseg projekta,</li>
          <li>ceno oziroma oceno stroškov,</li>
          <li>rok izvedbe,</li>
          <li>plačilne pogoje,</li>
          <li>garancijo na izvedbo in morebitne posebne pogoje.</li>
        </ul>
        <p>
          Pogodba oziroma naročilo je sklenjeno šele s pisnim sprejetjem ponudbe s strani naročnika
          in potrditvijo s strani izvajalca. Vsi poslovni pogoji posameznega posla — cena, rok,
          plačilna dinamika in garancijska doba — so določeni v tej ponudbi in veljajo pred
          splošnimi informacijami na spletni strani.
        </p>
        <p>
          Pri oddaji povpraševanja navedite resnične in točne podatke. Posredovanje lažnih ali
          zavajajočih podatkov ni dovoljeno.
        </p>
      </section>

      <section>
        <h2>4. Avtorske pravice</h2>
        <p>
          Vsa vsebina spletne strani — besedila, fotografije, grafični elementi, logotip in
          struktura strani — je last podjetja {business.name} oziroma njegovih dobaviteljev vsebine
          in je zaščitena z avtorskim pravom.
        </p>
        <p>
          Vsebin brez pisnega dovoljenja ni dovoljeno reproducirati, distribuirati, javno
          objavljati, prilagajati ali kako drugače komercialno izkoriščati. Zasebna, nekomercialna
          raba je dovoljena z navedbo vira.
        </p>
      </section>

      <section>
        <h2>5. Omejitev odgovornosti</h2>
        <p>
          Prizadevamo si, da so informacije na spletni strani točne, popolne in ažurne, vendar za
          njihovo popolno točnost ne jamčimo. Vsebina je informativne narave in se lahko kadar koli
          posodobi ali spremeni brez predhodnega obvestila. To še posebej velja za nasvete v
          rubriki <Link href="/nasveti">Nasveti</Link>: napisani so splošno in ne nadomeščajo
          ogleda, izmere ali projektne dokumentacije za konkreten objekt.
        </p>
        <p>
          Ne odgovarjamo za škodo, ki bi nastala zaradi zanašanja na vsebino spletne strani,
          tehničnih motenj, začasne nedosegljivosti strani ali napak pri prenosu podatkov. Prav
          tako ne prevzemamo odgovornosti za vsebino zunanjih spletnih strani, do katerih vodijo
          morebitne povezave.
        </p>
      </section>

      <section>
        <h2>6. Varstvo osebnih podatkov</h2>
        <p>
          Podrobne informacije o tem, katere osebne podatke zbiramo, zakaj jih obdelujemo, kako
          dolgo jih hranimo in kakšne pravice imate, so v{" "}
          <Link href="/politika-zasebnosti">politiki zasebnosti</Link>.
        </p>
      </section>

      <section>
        <h2>7. Piškotki</h2>
        <p>
          Pred vašo privolitvijo stran ne shrani nobenega piškotka. Če privolite v merjenje
          obiska, se shranita dva piškotka Google Analytics; oglaševalskih piškotkov ni.
          Podrobnosti in gumb za preklic odločitve so v{" "}
          <Link href="/piskotki">politiki piškotkov</Link>.
        </p>
      </section>

      <section>
        <h2>8. Spremembe splošnih pogojev</h2>
        <p>
          Pridržujemo si pravico do spremembe teh splošnih pogojev. Veljavna različica je vedno
          objavljena na tej strani z datumom zadnje posodobitve. Z nadaljnjo uporabo spletne strani
          po objavi sprememb sprejemate posodobljene pogoje. Za že sklenjene posle velja različica,
          ki je veljala ob potrditvi ponudbe.
        </p>
      </section>

      <section>
        <h2>9. Reševanje sporov in veljavno pravo</h2>
        <p>
          Za te splošne pogoje in za vsa razmerja, ki nastanejo ob uporabi spletne strani, velja
          pravo Republike Slovenije.
        </p>
        <p>
          V primeru spora si bomo prizadevali za sporazumno rešitev. Če ta ni mogoča, je pristojno
          stvarno pristojno sodišče v Republiki Sloveniji skladno s splošnimi pravili o
          pristojnosti.
        </p>
        <p>
          Skladno z Zakonom o izvensodnem reševanju potrošniških sporov (ZIsRPS) izjavljamo, da ne
          priznavamo nobenega izvajalca izvensodnega reševanja potrošniških sporov kot pristojnega
          za reševanje potrošniškega spora. To potrošnika ne omejuje pri uveljavljanju pravic po
          sodni poti.
        </p>
        <p>
          Potrošniki iz drugih držav EU se lahko za pomoč pri čezmejnem sporu obrnejo na Evropski
          potrošniški center v Sloveniji (
          <a href="https://www.epc.si" rel="noopener">
            epc.si
          </a>
          ). Evropska platforma za spletno reševanje sporov (ODR) je 20. julija 2025 prenehala
          delovati.
        </p>
        <p>
          Za vprašanja v zvezi s temi pogoji nas kontaktirajte na{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a> ali prek{" "}
          <Link href="/kontakt">kontaktnega obrazca</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
