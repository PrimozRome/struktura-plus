import type { Project } from "./types";
import { fotoZa, heroFoto, fotoPoImenu } from "./images";

/**
 * Izvedeni projekti. Kraj, material in leto so obvezni — so vir dolgega repa
 * v iskalniku ("vrtna lopa za savno", "CLT savna") in edini način, da
 * galerija prispeva k lokalni vidnosti.
 *
 * Fotografije: `fotoSkupina` je ime skupine v scripts/mapiranje.py in hkrati
 * vrstni red galerije. `naslovnica` je posnetek, ki nosi kartico in naslovno
 * sliko projekta; lahko kaže v drugo skupino, da ista datoteka ne leži dvakrat
 * na disku. Ker so posnetki z gradbišča večinoma pokončni, naj bo naslovnica
 * ležeča — naslovna slika in kartica sta v ležečem razmerju.
 */
export const PROJECTS_READY = true;

export const projects: Project[] = [
  {
    slug: "vrtna-lopa-za-savno",
    title: "Vrtna lopa za zunanjo savno",
    place: "Osrednja Slovenija",
    material: "CLT, prezračevalna macesnova fasada, smrekov opaž, kamena volna",
    year: 2026,
    service: "vrtne-lope-ute-hiske",
    summary:
      "Lopa 6 × 2,5 m iz CLT plošč s prezračevalno macesnovo fasado in dvokapnim ostrešjem, zgrajena kot prostor za zunanjo savno.",
    body: [
      "Naročnik je želel zunanjo savno, postavljeno ločeno od hiše. Potreboval je torej objekt, ki savno zaščiti in pred njo pusti dovolj prostora za pripravo in počitek — ne le lope za shranjevanje. Lopa meri 6 × 2,5 metra in stoji na predpripravljeni armiranobetonski plošči na gozdnatem pobočju.",
      "Pri projektu smo sodelovali že pred prvo desko. Skupaj z naročnikom smo pripravili načrte konstrukcije vrtne hiške in ostrešja — razpored sten, odprtin in strešnih leg. Na podlagi teh načrtov je podjetje Stiles iz Sevnice izdelalo CLT plošče, torej križno lepljen les, razrezan na končne mere.",
      "Vse elemente smo pripeljali na lokacijo in na pripravljeni plošči postavili celotno konstrukcijo sten in ostrešja. Ostrešje je klasična dvokapnica, izolirana s kameno volno; sledili so strešna folija in betonski strešniki ter kleparski zaključki s pločevino in žlebovi.",
      "Fasada je prezračevalna, iz macesna, z izolacijo iz kamene volne. Prezračevalni sloj za oblogo odvaja vlago izza desk in je razlog, da lesena fasada na takem mestu zdrži — objekt stoji v gozdu, kjer je vlage več in sonca manj kot na odprtem.",
      "Vhodna vrata smo izdelali iz istega CLT-ja kot stene in jih vgradili, nabavili in vgradili pa smo tudi leseno okno. Notranjost je obložena z opažem, tako da je prostor pred savno uporaben kot garderoba in kotiček za počitek.",
    ],
    scope: [
      "Sodelovanje pri načrtovanju konstrukcije in ostrešja",
      "Prevoz elementov na lokacijo",
      "Postavitev in montaža CLT sten",
      "Izdelava ostrešja in kritine",
      "Izdelava in montaža strešne pločevine ter žlebov",
      "Izolacija ostrešja in sten s kameno volno",
      "Montaža prezračevalne macesnove fasade",
      "Opažiranje stropa",
      "Opažiranje notranje predelne stene",
      "Izdelava vhodnih vrat iz CLT-ja in montaža",
      "Nabava in vgradnja lesenega okna",
    ],
    fotoSkupina: "savna-vrtna-lopa",
    shema: "savna-nacrt",
    // Vrstni red je potek del. Dva posnetka sta že drugje na strani, zato sta
    // tu navedena po sklicu in ne kopirana v to skupino.
    // Vrstni red je potek del. Ležeči posnetek zasede celo vrstico, zato sta
    // oba na mestih, kjer pred njima vrsta ravno izide; sicer bi ostala vrzel.
    // Posnetki iz drugih skupin so navedeni po sklicu in ne kopirani sem.
    galerija: [
      { skupina: "savna-vrtna-lopa", ime: "savna-clt-plosce" },
      { skupina: "savna-vrtna-lopa", ime: "savna-prva-stena" },
      { skupina: "savna-vrtna-lopa", ime: "savna-stene-lega" },
      { skupina: "savna-vrtna-lopa", ime: "savna-meritve" },
      { skupina: "savna-vrtna-lopa", ime: "savna-ostresje" },
      { skupina: "savna-vrtna-lopa", ime: "savna-ostresje-vijacenje" },
      { skupina: "savna-vrtna-lopa", ime: "savna-kritina-letve" },
      { skupina: "savna-vrtna-lopa", ime: "savna-kritina" },
      { skupina: "savna-vrtna-lopa", ime: "savna-fasada-folija" },
      { skupina: "savna-vrtna-lopa", ime: "savna-fasada-letve" },
      { skupina: "vrtne-lope-ute-hiske", ime: "vrtne-lope-25" },
      { skupina: "savna-vrtna-lopa", ime: "savna-fasada-macesen" },
      { skupina: "lesene-fasade", ime: "lesene-fasade-montaza-3" },
      { skupina: "lesene-fasade", ime: "lesene-fasade-montaza-5" },
      { skupina: "savna-vrtna-lopa", ime: "savna-vrata-detajl" },
      { skupina: "savna-vrtna-lopa", ime: "savna-okno-detajl" },
      { skupina: "savna-vrtna-lopa", ime: "savna-opaz-notranjost" },
      { skupina: "savna-vrtna-lopa", ime: "savna-interier-garderoba" },
      { skupina: "savna-vrtna-lopa", ime: "savna-interier-savna" },
      { skupina: "savna-vrtna-lopa", ime: "savna-interier-pocitek" },
    ],
    naslovnica: { skupina: "savna-vrtna-lopa", ime: "savna-koncana-lopa" },
    imageAlt:
      "Dokončana vrtna lopa za zunanjo savno z macesnovo prezračevalno fasado in pokritim vhodom",
    placeholder: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Naslovna fotografija projekta — iz lastne skupine ali po sklicu iz druge. */
export function naslovnaFoto(p: Project) {
  if (p.naslovnica) return fotoPoImenu(p.naslovnica.skupina, p.naslovnica.ime);
  return p.fotoSkupina ? heroFoto(p.fotoSkupina) : undefined;
}

/** Načrt ali shema projekta, če jo ima. */
export function projektShema(p: Project) {
  if (!p.fotoSkupina || !p.shema) return undefined;
  return fotoPoImenu(p.fotoSkupina, p.shema);
}

/** Galerija projekta — po meri, sicer skupina brez naslovnice in načrta. */
export function projektGalerija(p: Project) {
  if (p.galerija) {
    return p.galerija
      .map((g) => fotoPoImenu(g.skupina, g.ime))
      .filter((f): f is NonNullable<typeof f> => Boolean(f));
  }
  if (!p.fotoSkupina) return [];
  const naslovna = naslovnaFoto(p);
  const shema = projektShema(p);
  return fotoZa(p.fotoSkupina).filter(
    (f) => f.base !== naslovna?.base && f.base !== shema?.base,
  );
}
