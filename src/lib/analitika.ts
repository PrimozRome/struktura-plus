/**
 * Google Analytics 4 — merilni ID in pogoj, kdaj meritev sploh teče.
 *
 * ID ni skrivnost: v HTML ga vidi vsak obiskovalec. Zato je zapisan tukaj in
 * ne med okoljskimi spremenljivkami — tako po objavi ne more ostati
 * nenastavljen in tiho izgubljati podatke.
 *
 * Meritev teče samo na produkciji. `next dev` in predogledne namestitve na
 * Vercelu (VERCEL_ENV === "preview") je ne vključijo, da testni obiski ne
 * kvarijo podatkov. Pasica se v razvoju vseeno izriše, da je obliko mogoče
 * preveriti; skripta jo sprejme, GA pa se brez ID-ja ne naloži.
 *
 * Ker so strani statične, se oboje prebere med gradnjo, ne ob zahtevku.
 *
 * Za popoln izklop merjenja izpraznite MERILNI_ID. Takrat je treba politiko
 * piškotkov in politiko zasebnosti vrniti v prejšnje stanje — obe zdaj
 * navajata Google kot obdelovalca.
 */
const MERILNI_ID = "G-6EJ63ZPCZK";

const produkcija =
  process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

/** Prazen niz pomeni: pasica se izriše, GA se ne naloži. */
export const GA_ID = produkcija ? MERILNI_ID : "";

/** Ključ v localStorage, pod katerim je shranjena odločitev obiskovalca. */
export const KLJUC_SOGLASJA = "sp-soglasje";

/**
 * Po tem času soglasje poteče in pasica se pokaže znova. Šest mesecev je rok,
 * ki ga priporočata Informacijski pooblaščenec in CNIL.
 */
export const VELJAVNOST_DNI = 180;
