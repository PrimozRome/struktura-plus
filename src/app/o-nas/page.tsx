import Link from "next/link";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Figure } from "@/components/Figure";
import { CtaBand } from "@/components/CtaBand";
import { fotoPoImenu } from "@/content/images";

export const metadata = pageMeta({
  title: "O nas — Marko Pogorevc, Struktura Plus",
  description:
    "Marko Pogorevc, mizar in tesar iz Zasavja. Od očetove delavnice do montaže skeletnih hiš, danes lesene in kovinske konstrukcije po meri.",
  path: "/o-nas",
});

const crumbs = [
  { name: "Domov", path: "/" },
  { name: "O nas", path: "/o-nas" },
];

const druzina = fotoPoImenu("o-nas", "o-nas-druzina");
const marko = fotoPoImenu("o-nas", "o-nas-marko");
const montaza = fotoPoImenu("o-nas", "o-nas-montaza");

/**
 * Stran je napisana v prvi osebi in namerno ni "korporativna" — je Markova
 * zgodba, ne predstavitev podjetja. Pri enočlanskem s.p. je človek za obrtjo
 * glavni razlog, da nekdo pokliče, in hkrati edino, česar konkurenca ne more
 * prepisati.
 *
 * ⚠️ Vsebina je Markova, zapisana po njegovem osnutku. Preden gre v produkcijo,
 * naj jo prebere in potrdi — zlasti letnice, ime nekdanjega delodajalca in
 * navedbo, koliko let dela samostojno.
 */
export default function ONasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <Section className="!pb-0 !pt-[var(--hero-y-top)]">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
            <div>
              <p className="sp-eyebrow">O nas</p>
              <h1 className="mt-3 text-[length:var(--text-display-lg)]">
                Živjo, sem Marko Pogorevc
              </h1>
              <p className="mt-6 max-w-[56ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
                Oče trem prekrasnim hčerkam, mož in ljubitelj lesa. Že več kot desetletje
                izdelujem in montiram stvari, ki morajo stati zunaj, na dežju in soncu, in
                zdržati dlje, kot traja navdušenje ob predaji.
              </p>
            </div>
            <Figure
              foto={druzina}
              alt="Marko Pogorevc z ženo in hčerami na počitnicah ob morju"
              ratio="4/3"
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container width="article">
          <div className="sp-prose">
            <section>
              <h2>Les je bil pri nas doma od nekdaj</h2>
              <p>
                Oče je več kot trideset let gospodaril v slovenskih državnih gozdovih. Odraščal
                sem torej ob človeku, ki je les poznal še stoječ — vedel je, kateri bo dober za
                gradnjo in kateri ne, in znal razložiti, zakaj. Kar me je naučil, ni bilo samo
                rokovanje z orodjem. Bil je odnos: da les ni material, ki ga kupiš po kubiku,
                ampak nekaj, kar se odziva na vlago, sonce in čas, in te bo kaznovalo, če ga
                obravnavaš površno.
              </p>
              <p>
                Ta ljubezen se je prenesla name in mi ostala. Še danes, ko pridem na oglede,
                najprej pogledam, kam bo objekt obrnjen, koliko sonca bo dobival in kod bo tekla
                voda. Šele potem se pogovarjava o deskah.
              </p>
            </section>

            <section>
              <h2>Od montažnih gradbišč do CLT hiš</h2>
              <p>
                V svoji poklicni poti sem delal na mnogih montažnih projektih. Nekaj let sem bil
                glavni monter pri izdelavi in montaži lesenih skeletnih in CLT ekoloških hiš pri
                podjetju Ecolution. Postavljanje cele hiše v nekaj dneh te nauči dvoje: da mora
                biti vsaka mera pravilna že v delavnici, ker na gradbišču ni časa za popravljanje,
                in da si pri montaži odvisen od ljudi okoli sebe — zato je dogovor treba držati.
              </p>
              <p>
                Tista leta so mi dala kilometrino, ki je pri manjših projektih ne opaziš takoj,
                občutiš pa jo v detajlih: kako je konstrukcija sestavljena, kje se skriva
                statika, kje bo čez pet let vstopila voda.
              </p>
            </section>

            <section>
              <h2>Les, kovina, beton in hidroizolacija</h2>
              <p>
                Pri profesionalnem delu sem se naučil dela z lesom, kovino, betonom in
                hidroizolacijskimi elementi ter tehnikami — tako da imam gradnjo v malem prstu.
                To ni naštevanje zaradi naštevanja. Pomeni, da pri nadstrešku ne znam samo
                sestaviti konstrukcije, ampak tudi pripraviti temelje, izvesti odvodnjavanje in
                zatesniti prehode. In da vem, kdaj je za neko rešitev bolje uporabiti kovino kot
                les — tudi če sem mizar po srcu.
              </p>
              <p>
                Pri delu se najraje lotim tistega, kar mora biti natančno. Poševni rezi, spoji,
                ki se morajo ujeti, zaključni detajli, ki jih večina niti ne opazi — dokler niso
                narejeni slabo.
              </p>
            </section>
          </div>
        </Container>
      </Section>

      {/* Dve pokončni fotografiji z gradbišča — para ne razbijamo, ker skupaj
          povesta zgodbo: posameznik pri delu in objekt, ki iz tega nastane.
          Širina je enaka kot pri besedilu (article), da stolpec med branjem ne
          poskoči — pri polni širini strani sta pokončna posnetka previsoka. */}
      <Section className="!pt-0">
        <Container width="article">
          <div className="grid gap-5 sm:grid-cols-2">
            <Figure
              foto={marko}
              alt="Marko Pogorevc z akumulatorskim vijačnikom med montažo lesenega objekta"
              ratio="3/4"
              sizes="(max-width: 640px) 100vw, 27vw"
            />
            <Figure
              foto={montaza}
              alt="Postavljanje sten lesene hiške v gozdu, dva monterja pri delu"
              ratio="3/4"
              sizes="(max-width: 640px) 100vw, 27vw"
            />
          </div>
          <p className="mt-4 text-[15px] text-[var(--text-subtle)]">
            Montaža lesene hiške v gozdu — od praznega temelja do zaprtih sten v enem dnevu.
          </p>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container width="article">
          <div className="sp-prose">
            <section>
              <h2>Kaj delam danes</h2>
              <p>
                Zadnja leta delujem kot samostojni podjetnik. Izdelujem in montiram vse vrste
                lesenih in kovinskih konstrukcij:
              </p>
              {/* Seznam namesto naštevanja v odstavku: toliko povezav v eni povedi
                  je težko brati, vsaka pa si zasluži svoje sidrno besedilo.
                  .sp-prose seznamom nastavi display:flex, kar izniči CSS stolpce —
                  zato od sm naprej nazaj na block, razmik pa z mb na <li>. */}
              <ul className="!max-w-none sm:!block sm:columns-2 sm:gap-x-10 sm:[&>li]:mb-3 sm:[&>li]:break-inside-avoid">
                {/* Izpeljano iz seznama storitev, ne prepisano: ročni seznam je
                    izpustil visoke grede in bi se ob vsaki novi storitvi znova
                    razšel z resničnostjo. */}
                {services.map((st) => (
                  <li key={st.slug}>
                    <Link href={`/storitve/${st.slug}`}>{st.navLabel}</Link>
                  </li>
                ))}
              </ul>
              <p>
                Delam sam ali z manjšo ekipo, odvisno od projekta. To pomeni, da se z mano
                pogovarjate od prvega klica do zadnjega vijaka — nihče vmes ne prevaja, kaj ste
                pravzaprav želeli. Materiala ne zaračunavam z maržo: les in montažni material
                dobavim po najugodnejših tržnih cenah in ga prenesem naprej po nabavni ceni.
                Plačani sem za delo in znanje, ne za preprodajo desk.
              </p>
            </section>

            <section>
              <h2>Kar mi je pomembno</h2>
              <p>
                Družina, trdo delo in kakovostno opravljena storitev. V tem vrstnem redu — in
                brez zadnjega prva dva nimata smisla, ker se človek s slabo opravljenim delom ne
                vrne domov miren.
              </p>
              <p>
                Kakovostno opravljena storitev zame ne pomeni, da je nekaj videti lepo na dan
                predaje. Pomeni, da je čez deset let še vedno ravno, da se ni nikjer nabrala
                voda in da niste vmes nikogar klicali. Zato raje porabim eno uro več za pripravo
                podlage, kot da to uro prihranim in jo čez dve leti vračam.
              </p>
            </section>

            <section>
              <h2>Za delo se mi ni bilo treba nikoli potegovati</h2>
              <p>
                Nikoli nisem imel oglasa. Ni ga bilo treba — dobro izveden projekt gre od ust do
                ust v deveto vas. Nekdo vidi sosedovo teraso, vpraša, kdo jo je delal, in čez
                mesec dni kličem njega. Tako se je naneslo, da sem skoraj vse svoje delo dobil
                prek priporočil.
              </p>
              <p>
                Ta spletna stran je pravzaprav prvi oglas, ki sem si ga privoščil. Naredil sem
                jo zato, da ljudje, ki so slišali za nas, lažje vidijo, kaj delamo, in da tisti,
                ki nas še ne poznajo, dobijo enako pošteno ponudbo kot sosed, ki je poklical po
                priporočilu.
              </p>
            </section>

            <section>
              <h2>Podatki o podjetju</h2>
              <p>
                {business.name} — {business.legalEntity}, {business.address.street},{" "}
                {business.address.postalCode} {business.address.city}. Do leta 2026 smo poslovali
                pod imenom {business.formerName}; gre za isto dejavnost in istega človeka.
              </p>
              <p>
                Delamo po vsej Sloveniji, najpogosteje v Zasavju in Posavju, na Štajerskem, v
                Savinjski regiji, na Dolenjskem in Gorenjskem ter v Ljubljani z okolico, Celju in
                Mariboru.
              </p>
              {/* Dve poti naprej z dna zgodbe: kdor je prebral do sem, gre ali
                  preverjat, kaj pravijo drugi, ali pa pisat povpraševanje. */}
              <p className="flex flex-wrap gap-x-8 gap-y-2">
                <Link href="/mnenja-strank">Mnenja strank →</Link>
                <Link href="/kontakt">Kontakt in povpraševanje →</Link>
              </p>
            </section>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Se slišimo?"
        lead="Pošljite mere in fotografijo prostora ali pokličite — ogled in ponudba sta brez obveznosti."
      />
    </>
  );
}
