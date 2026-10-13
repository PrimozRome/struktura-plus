import { business } from "@/content/business";
import { submitInquiry } from "@/app/kontakt/actions";
import { MAX_DATOTEK, MAX_MB, ACCEPT } from "@/lib/priloge";
import { services } from "@/content/services";

/**
 * Server Component s Server Action: obrazec deluje brez JavaScripta,
 * validacija na odjemalcu je prek HTML5 atributov. Nič hidracije, nič vpliva na INP.
 */
export function ContactForm({ napaka }: { napaka?: "polja" | "posta" }) {
  return (
    <form action={submitInquiry} id="obrazec" className="flex flex-col gap-5" noValidate={false}>
      {napaka === "polja" && (
        <p role="alert" className="sp-error rounded-[var(--radius-sm)] border border-[var(--napaka)] p-3">
          Nekaj polj ni bilo izpolnjenih pravilno. Preverite ime, e-naslov, sporočilo in
          soglasje — in če ste pripeli datoteke, ali jih ni več kot {MAX_DATOTEK} oziroma
          skupaj več kot {MAX_MB} MB.
        </p>
      )}
      {napaka === "posta" && (
        <p role="alert" className="sp-error rounded-[var(--radius-sm)] border border-[var(--napaka)] p-3">
          Povpraševanja nam tokrat ni uspelo dostaviti. Poskusite znova čez nekaj minut ali
          pokličite na {business.phoneDisplay} — tako se ne bo izgubilo.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="sp-label" htmlFor="name">Ime in priimek <span className="sp-req">*</span></label>
          <input className="sp-input" id="name" name="name" autoComplete="name" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="sp-label" htmlFor="email">E-naslov <span className="sp-req">*</span></label>
          <input className="sp-input" id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="sp-label" htmlFor="phone">Telefon</label>
          <input className="sp-input" id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="sp-label" htmlFor="service">Storitev <span className="sp-req">*</span></label>
          <select className="sp-select" id="service" name="service" required defaultValue="">
            <option value="" disabled>Izberite storitev</option>
            {services.map((s) => (
              <option key={s.slug} value={s.navLabel}>{s.navLabel}</option>
            ))}
            <option value="Drugo">Drugo</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="sp-label" htmlFor="location">Lokacija objekta</label>
        <input className="sp-input" id="location" name="location" autoComplete="address-level2" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="sp-label" htmlFor="message">Sporočilo <span className="sp-req">*</span></label>
        <textarea className="sp-textarea" id="message" name="message" required />
        <span className="sp-hint">Za hitrejšo ponudbo pripišite okvirne mere, materiale in ostale želje.</span>
      </div>

      <div className="flex flex-col gap-2">
        <label className="sp-label" htmlFor="files">Fotografije ali načrti</label>
        {/* Brez JavaScripta: spust datotek na datotečni vnos brskalniki podpirajo
            sami, vnos pa ob izbiri sam izpiše imena. Zato je območje za spust kar
            vnos, le povečan in s črtkanim robom.

            Napisa na gumbu in ob njem ("Choose Files", "No file chosen") izrisuje
            brskalnik in sledita njegovemu jeziku, ne jeziku strani — s CSS ju ni
            mogoče prevesti, ker ::file-selector-button ne sprejme content, druge
            besede pa sploh niso element. Prevesti ju je mogoče samo tako, da se
            domači nadzornik skrije in se napisa narišeta sama, s čimer pa se
            izgubi izpis izbranih datotek: brez JavaScripta CSS ne ve, ali je
            uporabnik kaj izbral. Ker je potrditev, kaj je pripeto, koristnejša od
            prevoda, ostaja domači nadzornik. */}
        <input
          className="sp-file"
          id="files"
          name="files"
          type="file"
          multiple
          accept={ACCEPT}
        />
        <span className="sp-hint">
          Povleci datoteke na polje ali klikni nanj. Fotografije prostora ali načrti
          pohitrijo komunikacijo. Največ {MAX_DATOTEK} datotek, skupaj do {MAX_MB} MB — če
          jih je več ali so večje, jih pošljite na{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </span>
      </div>

      {/* Honeypot — skrito pred uporabniki in bralniki zaslona, vidno botom. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Podjetje</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0 accent-[var(--primary)]"
        />
        <label htmlFor="consent" className="text-[15px] text-[var(--text-muted)]">
          Strinjam se z obdelavo osebnih podatkov za namen priprave ponudbe. <span className="sp-req">*</span>
        </label>
      </div>

      <button type="submit" className="sp-btn sp-btn--primary self-start">Pošlji povpraševanje</button>
    </form>
  );
}
