/**
 * Omejitve prilog v obrazcu za povpraševanje.
 *
 * Ločena datoteka, ker "use server" modul sme izvažati samo asinhrone funkcije —
 * konstante in tipi tam ne morejo stati. Hkrati je to edino mesto, kjer so
 * omejitve zapisane: obrazec iz njih izriše namig, akcija pa po njih preverja,
 * zato se sporočilo uporabniku in dejanska preverba ne moreta raziti.
 *
 * ⚠️ ZGORNJO MEJO DOLOČA VERCEL, NE MI. Funkcije tam sprejmejo telo zahtevka
 * do 4,5 MB; kar je večje, pade z FUNCTION_PAYLOAD_TOO_LARGE, še preden se naša
 * strežniška akcija sploh zažene — stranka torej ne dobi niti našega sporočila
 * o napaki. Zato je MAX_MB 4 in ne več: skupaj z besedilom obrazca in ovojem
 * zahtevka ostane pod to mejo.
 *
 * Tri številke se morajo ujemati in so po velikosti v tem vrstnem redu:
 *   MAX_MB (4) < serverActions.bodySizeLimit (4,4 MB) < Vercelova meja (4,5 MB).
 * Vmesni prostor je namenoma: tako se pri rahlo preveliki oddaji najprej oglasi
 * naša preverba s prijaznim sporočilom in ne Vercel s suhim 413.
 */
export const MAX_DATOTEK = 6;
export const MAX_MB = 4;

export const DOVOLJENI_TIPI = [
  "image/jpeg",
  "image/png",
  "image/heic",
  "image/heif",
  "image/webp",
  "application/pdf",
] as const;

/** Atribut accept za <input type="file"> — isti seznam, en vir. */
export const ACCEPT = DOVOLJENI_TIPI.join(",");

export type Priloga = { ime: string; tip: string; bajtov: number };

/** Priloga skupaj z vsebino, pripravljeno za pripenjanje (base64, kot zahteva
 *  Resend). Vsebina živi samo toliko časa, kolikor traja zahtevek — datotek
 *  nikamor ne shranjujemo, ker bi to pomenilo hrambo osebnih podatkov brez
 *  podlage v politiki zasebnosti. */
export type PrilogaZVsebino = Priloga & { base64: string };
