import type { Project } from "./types";
import { fotoZa, heroFoto, fotoPoImenu } from "./images";

/**
 * Izvedeni projekti. Kraj, material in leto so obvezni — so vir dolgega repa
 * v iskalniku ("vrtna lopa Limbarska Gora", "CLT savna") in edini način, da
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
    slug: "savna-limbarska-gora",
    title: "Vrtna lopa za zunanjo savno",
    place: "Limbarska Gora",
    material: "CLT, prezračevalna macesnova fasada, kamena volna",
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
      "Izdelava vhodnih vrat iz CLT-ja in montaža",
      "Nabava in vgradnja lesenega okna",
    ],
    fotoSkupina: "savna-limbarska-gora",
    shema: "savna-nacrt",
    naslovnica: { skupina: "lesene-fasade", ime: "lesene-fasade-montaza-3" },
    imageAlt:
      "Vrtna lopa za zunanjo savno z macesnovo prezračevalno fasado, izvedba na Limbarski Gori",
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

/** Galerija projekta — fotografije skupine brez naslovnice in brez načrta. */
export function projektGalerija(p: Project) {
  if (!p.fotoSkupina) return [];
  const naslovna = naslovnaFoto(p);
  const shema = projektShema(p);
  return fotoZa(p.fotoSkupina).filter(
    (f) => f.base !== naslovna?.base && f.base !== shema?.base,
  );
}
