import Link from "next/link";
import { Container } from "@/components/Container";
import { GA_ID, KLJUC_SOGLASJA, VELJAVNOST_DNI } from "@/lib/analitika";

/**
 * Pasica za soglasje k merjenju obiska in nalaganje Google Analytics 4.
 *
 * Zakaj navadna skripta in ne odjemalska komponenta: na tej strani ni niti ene
 * "use client" datoteke in tega nočemo zapraviti za pasico. Vdelana skripta
 * naredi isto v ~50 vrsticah, teče med razčlenjevanjem HTML (torej preden se
 * naloži React) in ne potegne v sveženj nič novega.
 *
 * Zakaj GA ni naložen vnaprej: tudi Consent Mode z zavrnjenim
 * analytics_storage še vedno pošlje Googlu zahtevek brez piškotka, v njem pa
 * IP naslov obiskovalca. Dokler obiskovalec ne privoli, na googletagmanager.com
 * ne gre nobena zahteva — skripta se vstavi šele ob kliku na "Sprejmem". Tako
 * drži tudi tisto, kar piše v politiki piškotkov.
 *
 * Zakaj vidnost vodi atribut na <html> in ne stanje na pasici: skripta se
 * izvede pred hidracijo, React pa pri hidraciji pričakuje natanko tisti DOM,
 * ki ga je izrisal strežnik. Če bi skripta spreminjala pasico samo, bi React
 * njeno odločitev lahko povozil. <html> ima suppressHydrationWarning (glej
 * layout.tsx), zato je atribut na njem varno mesto, pasica pa ostane statična.
 *
 * Zakaj je poslušalec klikov na dokumentu in ne na posameznih gumbih: ta
 * skripta je v korenski postavitvi in se izvede enkrat, ob prvem nalaganju.
 * Gumb za preklic pa je na strani /piskotki, do katere obiskovalec pride tudi
 * s klikom v meniju — pri taki navigaciji App Router stran izriše v brskalniku
 * in gumba ob zagonu skripte še ni bilo. Skripte, ki jih React ustvari med
 * izrisom v brskalniku, se ne izvedejo, zato gumb ne sme imeti svoje; z
 * delegacijo ga ujamemo ne glede na to, kdaj se pojavi.
 */

const skripta = `(function () {
  var ID = ${JSON.stringify(GA_ID)};
  var KLJUC = ${JSON.stringify(KLJUC_SOGLASJA)};
  var ROK = ${VELJAVNOST_DNI} * 864e5;
  var koren = document.documentElement;

  function preberi() {
    try {
      var zapis = window.localStorage.getItem(KLJUC);
      if (!zapis) return null;
      var o = JSON.parse(zapis);
      if (!o || typeof o.cas !== "number" || Date.now() - o.cas > ROK) return null;
      return o.stanje === "da" ? "da" : "ne";
    } catch (e) {
      /* Zasebno okno ali blokiran pomnilnik: štejemo, kot da odločitve ni. */
      return null;
    }
  }

  function zapisi(stanje) {
    try {
      window.localStorage.setItem(
        KLJUC,
        JSON.stringify({ v: 1, stanje: stanje, cas: Date.now() })
      );
    } catch (e) {}
  }

  function pobrisiPiskotke() {
    if (!ID) return;
    var gostitelj =
      location.hostname.indexOf("www.") === 0 ? location.hostname.slice(4) : location.hostname;
    var imena = ["_ga", "_ga_" + ID.slice(2)];
    for (var i = 0; i < imena.length; i++) {
      document.cookie = imena[i] + "=; Max-Age=0; path=/";
      document.cookie = imena[i] + "=; Max-Age=0; path=/; domain=." + gostitelj;
    }
  }

  function naloziGA() {
    if (!ID || window.__spGa) return;
    window.__spGa = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied"
    });
    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("js", new Date());
    window.gtag("config", ID);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(s);
  }

  function odlozi(stanje) {
    zapisi(stanje);
    koren.setAttribute("data-soglasje", "odloceno");
    if (stanje === "da") { naloziGA(); } else { pobrisiPiskotke(); }
  }

  function preklici() {
    try { window.localStorage.removeItem(KLJUC); } catch (e) {}
    pobrisiPiskotke();
    /* Osvežimo, da se GA, če je v tem ogledu že tekel, ustavi. */
    location.reload();
  }

  document.addEventListener("click", function (e) {
    var cilj = e.target && e.target.closest ? e.target.closest("button") : null;
    if (!cilj) return;
    if (cilj.id === "soglasje-da") { odlozi("da"); }
    else if (cilj.id === "soglasje-ne") { odlozi("ne"); }
    else if (cilj.id === "soglasje-preklic") { preklici(); }
  });

  var odlocitev = preberi();
  if (odlocitev === "da") {
    koren.setAttribute("data-soglasje", "odloceno");
    naloziGA();
  } else if (odlocitev === "ne") {
    koren.setAttribute("data-soglasje", "odloceno");
  } else {
    koren.setAttribute("data-soglasje", "vprasaj");
  }
})();`;

export function ConsentBanner() {
  return (
    <>
      {/* Privzeto skrita s CSS; pokaže jo skripta spodaj. Brez stanja v Reactu,
          zato se ob hidraciji nima kaj razhajati. */}
      <section className="sp-soglasje" aria-label="Soglasje za merjenje obiska">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
            <p className="max-w-[58ch] text-[var(--text-body-sm)] text-[var(--text-reading)]">
              Z vašim soglasjem merimo obisk strani z Google Analytics, da vemo, katere vsebine so
              obiskovalcem v pomoč. Dokler ne privolite, se ne shrani noben piškotek in Googlu ne
              pošljemo ničesar. Odločitev lahko kadar koli spremenite v{" "}
              <Link href="/piskotki">politiki piškotkov</Link>.
            </p>
            <div className="flex shrink-0 gap-3">
              <button type="button" id="soglasje-ne" className="sp-btn sp-btn--secondary">
                Zavrnem
              </button>
              <button type="button" id="soglasje-da" className="sp-btn sp-btn--primary">
                Sprejmem
              </button>
            </div>
          </div>
        </Container>
      </section>
      <script dangerouslySetInnerHTML={{ __html: skripta }} />
    </>
  );
}

/**
 * Gumb na strani /piskotki, s katerim obiskovalec prekliče ali spremeni
 * odločitev. Svoje skripte namenoma nima — klik ujame delegirani poslušalec
 * iz ConsentBanner, ki je v korenski postavitvi in teče na vsaki strani.
 */
export function ConsentReset() {
  return (
    <button type="button" id="soglasje-preklic" className="sp-btn sp-btn--secondary">
      Spremeni odločitev o merjenju
    </button>
  );
}
