import Link from "next/link";
import { services } from "@/content/services";
import { priceListUpdated, formatSlovenianMonth } from "@/content/business";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta({
  title: "Cenik — okvirne cene teras, ograj in nadstreškov",
  description:
    "Okvirne cene po storitvah: lesena terasa na m², ograja na tekoči meter, nadstrešek za avto, lesena fasada. Kaj je vključeno in kaj na ceno vpliva.",
  path: "/cenik",
});

const crumbs = [
  { name: "Domov", path: "/" },
  { name: "Cenik", path: "/cenik" },
];

const cenikFaq = [
  {
    q: "Zakaj so cene navedene kot izhodišče in ne kot fiksna številka?",
    a: "Ker sta pri vsakem projektu teren in dostop drugačna. Izhodiščna cena pove, v kakšen razred se spuščate; natančno ceno določimo po ogledu in jo zapišemo v ponudbo z razdelanimi postavkami.",
  },
  {
    q: "Je ogled brezplačen?",
    a: "Da, ogled in priprava ponudbe sta brez obveznosti in brez stroška. Pri zelo oddaljenih lokacijah se o potnih stroških dogovorimo vnaprej.",
  },
  {
    q: "Kaj v ceno praviloma ni vključeno?",
    a: "Demontaža in odvoz obstoječega, betonski temelji, elektroinštalacije, odri pri višjih objektih in gradbena dela, ki presegajo pripravo podlage. Vse to v ponudbi navedemo kot ločene postavke.",
  },
  {
    q: "Ali je mogoče plačilo na obroke?",
    a: "Plačilo je praviloma razdeljeno na predujem ob naročilu materiala in preostanek po predaji. O drugačni dinamiki se dogovorimo pred podpisom ponudbe.",
  },
];

export default function CenikPage() {
  // Balkonske ograje in podobne storitve, označene z `vCeniku: false`, se v cenik ne uvrstijo.
  const vCeniku = services.filter((s) => s.vCeniku !== false);
  const withPrices = vCeniku.filter((s) => s.price);
  const withoutPrices = vCeniku.filter((s) => !s.price);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(cenikFaq)]} />
      <Breadcrumbs items={crumbs} />
      <Section className="!pt-[var(--hero-y-top)]">
        <Container>
          <p className="sp-eyebrow">Cene</p>
          <h1 className="mt-3 max-w-[20ch] text-[length:var(--text-display-lg)]">
            Okvirne cene po storitvah
          </h1>
          <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
            Izhodiščne cene spodaj vključujejo material in montažo. Povemo jih vnaprej, ker se nam zdi
            pošteno, da veste, v kakšen razred se spuščate, še preden se slišimo — in ker nočemo
            hoditi na oglede, kjer se pričakovanja in proračun sploh ne srečata.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Okvirne cene storitev</caption>
              <thead>
                <tr className="border-b-2 border-[var(--border-strong)]">
                  <th scope="col" className="py-3 pr-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">Storitev</th>
                  <th scope="col" className="py-3 pr-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">Okvirna cena</th>
                  <th scope="col" className="py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">Kaj je vključeno</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {withPrices.map((s) => (
                  <tr key={s.slug} className="border-b border-[var(--border)] align-top">
                    <th scope="row" className="py-4 pr-4 font-[family-name:var(--font-display)] text-[17px] font-semibold">
                      <Link href={`/storitve/${s.slug}`} className="text-[var(--text)] no-underline hover:underline">
                        {s.navLabel}
                      </Link>
                    </th>
                    <td className="py-4 pr-4 text-[17px] font-semibold">{s.price!.range}</td>
                    <td className="py-4 text-[15px] leading-relaxed text-[var(--text-muted)]">{s.price!.includes}</td>
                  </tr>
                ))}
                {withoutPrices.map((s) => (
                  <tr key={s.slug} className="border-b border-[var(--border)] align-top">
                    <th scope="row" className="py-4 pr-4 font-[family-name:var(--font-display)] text-[17px] font-semibold">
                      <Link href={`/storitve/${s.slug}`} className="text-[var(--text)] no-underline hover:underline">
                        {s.navLabel}
                      </Link>
                    </th>
                    <td className="py-4 pr-4 text-[17px] font-semibold">Po ogledu</td>
                    <td className="py-4 text-[15px] leading-relaxed text-[var(--text-muted)]">
                      Cene se razlikujejo preveč, da bi bilo objavljeno izhodišče pošteno. Ponudbo pripravimo po ogledu.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[13px] text-[var(--text-subtle)]">
            Cenik posodobljen:{" "}
            <time dateTime={priceListUpdated} className="font-semibold text-[var(--text-muted)]">
              {formatSlovenianMonth(priceListUpdated)}
            </time>
          </p>

          <p className="mt-2 max-w-[68ch] text-[13px] text-[var(--text-subtle)]">
            Navedene cene so izhodiščne in informativne ter ne predstavljajo ponudbe. Končna cena je odvisna od terena,
            dostopa, izbranega materiala in obsega pripravljalnih del. Cene materiala se spreminjajo, zato cenik
            občasno posodobimo.
          </p>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container narrow>
          <Faq items={cenikFaq} title="Pogosta vprašanja o cenah" />
        </Container>
      </Section>

      <CtaBand title="Želite natančno ceno?" lead="Pošljite mere in fotografijo prostora — pri večini storitev lahko okvirno ceno pošljemo še pred ogledom." />
    </>
  );
}
