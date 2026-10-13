import Link from "next/link";
import { business } from "@/content/business";
import { Container } from "@/components/Container";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-inverse)] text-[var(--text-inverse)]">
      {/* Pet stolpcev, ker storitve zasedejo dva — povezave na vse storitve v enem
          stolpcu bi nogo raztegnilo čez cel zaslon. */}
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          {/* Inverzna različica logotipa: noga je edino mesto na strani s temno
              podlago. Ni povezava — domov se gre prek logotipa v glavi, tu bi
              bila druga pot na isto stran samo dvojnik za bralnike zaslona. */}
          <img
            src="/brand/logo-inverse.svg"
            alt={`${business.name} logotip`}
            width={451}
            height={100}
            loading="lazy"
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-[38ch] text-[15px] opacity-80">{business.tagline} — po vsej Sloveniji.</p>
          <p className="mt-4 text-[13px] opacity-60">Prej {business.formerName}.</p>
        </div>

        <nav aria-label="Storitve" className="sm:col-span-2">
          <h2 className="sp-eyebrow !text-[var(--les-300)]">Storitve</h2>
          {/* Večstolpični tok in ne mreža: v mreži bi se seznam polnil po vrsticah
              (1|2, 3|4 …), tako pa levi stolpec teče 1–7 in desni 8–14, torej se
              bere v istem vrstnem redu kot na strani Storitve. */}
          <ul className="mt-3 flex flex-col gap-2 sm:block sm:columns-2 sm:gap-x-8 sm:[&>li]:mb-2 sm:[&>li]:break-inside-avoid">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/storitve/${s.slug}`} className="text-[15px] text-inherit no-underline opacity-85 hover:opacity-100 hover:underline">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/storitve"
            className="mt-4 inline-block text-[15px] font-semibold text-inherit no-underline opacity-85 hover:opacity-100 hover:underline"
          >
            Vse storitve →
          </Link>
        </nav>

        <nav aria-label="Podjetje">
          <h2 className="sp-eyebrow !text-[var(--les-300)]">Podjetje</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {[
              { href: "/o-nas", label: "O nas" },
              { href: "/mnenja-strank", label: "Mnenja strank" },
              { href: "/projekti", label: "Projekti" },
              { href: "/nasveti", label: "Nasveti" },
              { href: "/cenik", label: "Cenik" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[15px] text-inherit no-underline opacity-85 hover:opacity-100 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="sp-eyebrow !text-[var(--les-300)]">Kontakt</h2>
          {/* NAP zapis — mora biti znak za znak enak kot v Google Business Profile. */}
          <address className="mt-3 text-[15px] not-italic leading-relaxed opacity-85">
            {business.name}
            <br />
            {business.address.street}
            <br />
            {business.address.postalCode} {business.address.city}
            <br />
            <a href={`mailto:${business.email}`} className="text-inherit underline-offset-2 hover:underline">
              {business.email}
            </a>
            <br />
            <a href={business.phoneHref} className="text-inherit tabular-nums underline-offset-2 hover:underline">
              {business.phone}
            </a>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-[13px] opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. Vse pravice pridržane.</p>
          <ul className="flex flex-wrap gap-5">
            <li><Link href="/piskotki" className="text-inherit no-underline hover:underline">Piškotki</Link></li>
            <li><Link href="/politika-zasebnosti" className="text-inherit no-underline hover:underline">Politika zasebnosti</Link></li>
            <li><Link href="/splosni-pogoji" className="text-inherit no-underline hover:underline">Splošni pogoji</Link></li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
