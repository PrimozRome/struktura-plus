import Link from "next/link";
import { business, legalUpdated, formatSlovenianDate } from "@/content/business";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";

/**
 * Ogrodje pravnih podstrani (piškotki, zasebnost, splošni pogoji).
 *
 * Vse tri delijo isto obliko: drobtinice, naslovni sklop z datumom zadnje
 * posodobitve, ozek stolpec besedila in navzkrižne povezave na preostali dve.
 * Vsebina je v posamezni strani, ker se besedila med sabo ne prekrivajo.
 */
const legalPages = [
  { href: "/splosni-pogoji", label: "Splošni pogoji" },
  { href: "/politika-zasebnosti", label: "Politika zasebnosti" },
  { href: "/piskotki", label: "Piškotki" },
] as const;

export function LegalPage({
  title,
  eyebrow,
  path,
  lead,
  children,
}: {
  title: string;
  eyebrow: string;
  path: string;
  lead: string;
  children: React.ReactNode;
}) {
  const crumbs = [
    { name: "Domov", path: "/" },
    { name: title, path },
  ];
  const drugi = legalPages.filter((p) => p.href !== path);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <Section className="!pb-0 !pt-[var(--hero-y-top)]">
        <Container width="article">
          <p className="sp-eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-[length:var(--text-display-lg)]">{title}</h1>
          <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-[var(--text-muted)]">
            {lead}
          </p>
          <p className="mt-6 text-[13px] text-[var(--text-subtle)]">
            Zadnja posodobitev:{" "}
            <time dateTime={legalUpdated}>{formatSlovenianDate(legalUpdated)}</time>
          </p>
        </Container>
      </Section>

      <Section className="!pt-[var(--space-12)]">
        <Container width="article">
          <div className="sp-prose">{children}</div>

          <hr className="sp-rule my-[var(--space-16)]" />

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-[length:var(--text-h4)]">Kontakt</h2>
              <address className="mt-3 not-italic leading-relaxed text-[var(--text-muted)]">
                {business.name} — {business.legalEntity}
                <br />
                {business.address.street}, {business.address.postalCode} {business.address.city}
                <br />
                <a href={`mailto:${business.email}`}>{business.email}</a>
                <br />
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div>
              <h2 className="text-[length:var(--text-h4)]">Povezani dokumenti</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {drugi.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href}>{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
