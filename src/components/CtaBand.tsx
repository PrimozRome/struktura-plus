import Link from "next/link";
import { business } from "@/content/business";
import { Container } from "@/components/Container";

export function CtaBand({
  title = "Pošljite mere in fotografijo prostora",
  lead = "Pripravimo predlog in okvirno ceno. Za natančno ponudbo pridemo na ogled. Ogled in ponudba sta brez obveznosti; pri zelo oddaljenih lokacijah se o potnih stroških dogovorimo vnaprej.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-[var(--bg-inverse)] py-[var(--section-y)] text-[var(--text-inverse)]">
      <Container className="flex flex-col items-center gap-5 text-center">
        <p className="sp-eyebrow !text-[var(--les-300)]">Povpraševanje</p>
        <h2 className="max-w-[20ch] !text-[var(--text-inverse)]">{title}</h2>
        <p className="max-w-[52ch] text-[18px] opacity-80">{lead}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Link href="/kontakt" className="sp-btn sp-btn--onDark">Pošlji povpraševanje</Link>
          <a
            href={business.phoneHref}
            className="sp-btn sp-btn--secondary !border-[var(--les-600)] !text-[var(--les-200)] tabular-nums"
          >
            {business.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
