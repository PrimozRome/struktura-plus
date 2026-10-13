import Link from "next/link";
import { services } from "@/content/services";
import { business } from "@/content/business";
import { homeFaq, process, differentiators } from "@/content/home";
import { featuredTestimonials } from "@/content/testimonials";
import { TestimonialGrid } from "@/components/Testimonials";
import { pageMeta } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import {
  IkonaCena,
  IkonaPonudba,
  IkonaKotnik,
  IkonaMeter,
  IkonaLokacija,
} from "@/components/Icons";
import { Figure } from "@/components/Figure";
import { heroFoto } from "@/content/images";
import { ServiceCard } from "@/components/ServiceCard";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta({
  title: `${business.name} — lesene terase, ograje in nadstreški po meri`,
  description:
    "Izdelujemo in montiramo lesene terase, ograje, nadstreške in vrtne lope po meri. Okvirne cene objavljene, izmera na lokaciji, izvedba po vsej Sloveniji.",
  path: "/",
});

export default function HomePage() {
  const featured = services.slice(0, 6);

  return (
    <>
      <JsonLd data={faqSchema(homeFaq)} />

      {/* Hero */}
      <section className="pb-[var(--section-y)] pt-12 md:pt-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div>
              {/* Brez nadnaslova: "mizarstvo" je napačna obrt (SERP za to besedo je
                  poln izdelovalcev pohištva in kuhinj), "Zasavje" pa si je nasprotoval
                  z zavihkom "Izvedba po vsej Sloveniji" tri vrstice nižje. Regijo nosita
                  sekcija Območje in shema LocalBusiness. */}
              <h1 className="text-[length:var(--text-display-xl)] leading-[var(--leading-tight)]">
                Izdelava lesenih teras, ograj in nadstreškov po meri
              </h1>
              <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
                Načrtujemo in izvedemo trajne zunanje rešitve iz lesa in WPC — od svetovanja in
                izmere do montaže in zaključnih detajlov. Okvirne cene objavljamo vnaprej, da veste,
                v kakšen razred se spuščate, še preden se slišimo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/kontakt" className="sp-btn sp-btn--primary">Pridobi ponudbo</Link>
                <Link href="/storitve" className="sp-btn sp-btn--secondary">Poglej storitve</Link>
              </div>
            </div>
            <Figure
              foto={heroFoto("lesene-terase")}
              alt="Lesena terasa iz sibirskega macesna z nadstreškom ob družinski hiši — izvedba Struktura Plus"
              ratio="4/3"
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>

          {/* Pet točk stoji pod mrežo in ne v levem stolpcu: v eno vrstico gredo
              samo čez celotno širino vsebnika. Ožje od tega se prelomijo in
              ostanejo na sredini. Na telefonu gredo v stolpec in k levemu robu:
              sredinjene bi se lomile razpršeno (1, 1, 2, 1), ikone pa se ne bi
              poravnale v navpičnico. */}
          <ul className="mt-14 flex flex-col items-start gap-y-3 text-[15px] text-[var(--text-muted)] sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8">
            {[
              { ikona: IkonaCena, besedilo: "Okvirne cene objavljene" },
              { ikona: IkonaPonudba, besedilo: "Transparentna ponudba" },
              { ikona: IkonaKotnik, besedilo: "Natančna izvedba" },
              { ikona: IkonaMeter, besedilo: "Izmera na lokaciji" },
              { ikona: IkonaLokacija, besedilo: "Izvedba po vsej Sloveniji" },
            ].map(({ ikona: Ikona, besedilo }) => (
              <li key={besedilo} className="flex items-center gap-2.5">
                <Ikona className="h-5 w-5 shrink-0 text-[var(--accent-text)]" />
                {besedilo}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Storitve */}
      <Section tone="subtle" id="storitve">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="sp-eyebrow">Ponudba</p>
              <h2 className="mt-3 max-w-[26ch]">Kaj izdelujemo in montiramo</h2>
            </div>
            <Link href="/storitve" className="sp-btn sp-btn--ghost">Vse storitve →</Link>
          </div>

          {/* Uvod stoji pod celotno glavo razdelka in ne ob naslovu: gumb "Vse
              storitve" je poravnan na spodnji rob glave, zato bi ga dva odstavka
              ob naslovu potisnila predaleč navzdol. */}
          <div className="mt-6 flex max-w-[64ch] flex-col gap-4 text-[18px] leading-relaxed text-[var(--text-muted)]">
            <p>
              Specializirani smo za izdelavo in montažo vseh vrst lesenih, kovinskih in WPC
              konstrukcij, kot so terase, ograje in nadstreški, ter drugih vrtnih elementov.
              Vsak projekt obravnavamo individualno: izmerimo, svetujemo, pripravimo predlog,
              izvedemo montažo in za seboj pospravimo.
            </p>
            <p>
              Naša prednost je kombinacija obrtniške natančnosti in sodobnega oblikovanja —
              ravne linije, čiste rešitve in premišljeni detajli.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          {/* Povezava v glavi razdelka odplava iz vidnega polja, ko bralec zdrsne
              čez kartice. Isti cilj ponovimo pod mrežo, kjer je oko po zadnji
              kartici — in povemo, koliko storitev je še. */}
          {services.length > featured.length && (
            <div className="mt-10 flex justify-center">
              <Link href="/storitve" className="sp-btn sp-btn--secondary">
                Vse storitve — še {services.length - featured.length} drugih →
              </Link>
            </div>
          )}
        </Container>
      </Section>

      {/* Zakaj mi */}
      <Section>
        <Container>
          <p className="sp-eyebrow">Kako delamo</p>
          <h2 className="mt-3 max-w-[24ch]">Šest stvari, po katerih se ločimo</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="border-t border-[var(--border)] pt-5">
                <h3 className="!text-[20px]">{d.title}</h3>
                <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-[var(--text-muted)]">{d.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Postopek */}
      <Section tone="subtle" className="!pb-[var(--space-16)]">
        <Container>
          <p className="sp-eyebrow">Sodelovanje</p>
          <h2 className="mt-3">Kako poteka izvedba</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <li key={step.n} className="border-t-2 border-[var(--les-400)] pt-4">
                <span className="font-[family-name:var(--font-display)] text-[28px] font-600 tabular-nums text-[var(--accent-text)]">
                  {step.n}
                </span>
                <h3 className="mt-2 !text-[18px]">{step.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-[var(--text-muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Mnenja */}
      {/* Razdelka si delita isto podlago, zato ju je brez ločnice brala kot en
          dolg prazen pas. Leseni rez pove, kje se en sklop konča, zrak nad in
          pod njim pa je enak. */}
      <Section tone="subtle" className="!pt-0">
        <Container>
          <hr className="sp-rule mb-[var(--space-16)]" />
          <p className="sp-eyebrow">Mnenja</p>
          <h2 className="mt-3 max-w-[24ch]">Kaj pravijo stranke</h2>

          {/* Na pristajalni je izbor šestih; vsa so na /mnenja-strank, posamezna
              pa še na strani storitve, ki jo omenjajo. */}
          <TestimonialGrid items={featuredTestimonials} columns={3} className="mt-10" />

          <div className="mt-10">
            <Link href="/mnenja-strank" className="sp-btn sp-btn--secondary">
              Vsa mnenja strank
            </Link>
          </div>
        </Container>
      </Section>

      {/* Območje */}
      <Section>
        <Container>
          {/* Nadnaslov in H2 sta nad mrežo, ne v levem stolpcu — tako se obe
              besedili začneta v isti vrstici pod naslovom. */}
          <p className="sp-eyebrow">Območje</p>
          <h2 className="mt-3 max-w-[20ch]">Kje delamo</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="max-w-[56ch] text-[var(--text-muted)]">
                Sedež imamo v Zasavju, projekte pa izvajamo po vsej Sloveniji. Najpogosteje delamo
                na spodaj naštetih območjih; drugod se prilagodimo lokaciji in dostopu, potne
                stroške pa v ponudbi navedemo ločeno, da ne pridejo kot presenečenje.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {business.areaServed.map((a) => (
                  <li key={a.name} className="sp-tag sp-tag--outline">{a.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="max-w-[56ch] text-[var(--text-muted)]">
                Za hitrejšo ponudbo že ob povpraševanju pripišite kraj in okvirne mere. Pri večini
                storitev vam lahko na podlagi fotografije in mer pošljemo okvirno ceno še pred
                ogledom.
              </p>
              <Link href="/cenik" className="sp-btn sp-btn--secondary mt-6">Poglej okvirne cene</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="subtle">
        <Container narrow>
          <Faq items={homeFaq} />
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
