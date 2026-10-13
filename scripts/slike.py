#!/usr/bin/env python3
"""
Predelava fotografij za spletno stran.

Vhod:  .raw-slike/<ime>.jpg   (izvirniki)
Izhod: public/slike/<skupina>/<ime>-<sirina>.avif|.webp
       src/content/images.ts  (manifest z merami in alt besedili)

Zagon:  python3 scripts/slike.py            # vse
        python3 scripts/slike.py terase ograje   # samo izbrane skupine

⚠️ EXIF orientacija: fotografije iz telefona so pogosto shranjene ležeče in
   obrnjene šele z zastavico Orientation (npr. RightTop). ImageMagick tega
   sam od sebe NE upošteva, zato je povsod `-auto-orient` — brez njega bi
   pokončni posnetki končali zavrteni za 90°, mere v manifestu pa bi bile
   zamenjane. Iz istega razloga mere beremo po `-auto-orient`, ne z `identify`.
"""
import json, os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW  = os.path.join(ROOT, ".raw-slike")
OUT  = os.path.join(ROOT, "public", "slike")
TS   = os.path.join(ROOT, "src", "content", "images.ts")
WIDTHS = [400, 800, 1200, 1600]
Q_AVIF, Q_WEBP = 48, 72

def sh(*a):
    subprocess.run(a, check=True, capture_output=True)

def dims(p):
    """Mere PO upoštevanju EXIF orientacije."""
    o = subprocess.run(["convert", p, "-auto-orient", "-format", "%w %h", "info:"],
                       capture_output=True, text=True).stdout.split()
    return int(o[0]), int(o[1])

def process(group, entries):
    d = os.path.join(OUT, group)
    os.makedirs(d, exist_ok=True)
    made = []
    for base, alt in entries:
        src = os.path.join(RAW, base + ".jpg")
        if not os.path.exists(src):
            print("  ! manjka", base); continue
        w, h = dims(src)
        # Vedno tudi izvorna širina (do 1600), da hero slike niso mehke.
        top = min(w, 1600)
        widths = sorted(set([x for x in WIDTHS if x < top] + [top]))
        for tw in widths:
            sh("convert", src, "-auto-orient", "-resize", f"{tw}x", "-strip",
               "-quality", str(Q_AVIF), os.path.join(d, f"{base}-{tw}.avif"))
            sh("convert", src, "-auto-orient", "-resize", f"{tw}x", "-strip",
               "-quality", str(Q_WEBP), os.path.join(d, f"{base}-{tw}.webp"))
        made.append({"base": f"/slike/{group}/{base}", "w": w, "h": h, "widths": widths, "alt": alt})
        print(f"  {base} {w}x{h} -> {widths}")
    return made

TS_HEAD = '''// SAMODEJNO USTVARJENO — ne urejaj ročno.
// Vir: scripts/slike.py + scripts/mapiranje.py (zaženi `python3 scripts/slike.py`).
//
// Fotografije so prevzete s prejšnje strani strukturaplus.si. Večina je bila
// tam že pomanjšana in obrezana, zato so razmerja neenotna — postavitev jih
// obreže z object-fit: cover, mere pa so tu zapisane, da ni premika postavitve.

export type Foto = {
  /** pot brez širine in končnice, npr. "/slike/lesene-terase/terase-12" */
  base: string;
  /** mere izvirnika — za razmerje in width/height na <img> */
  w: number;
  h: number;
  /** razpoložljive širice za srcset */
  widths: number[];
  alt: string;
};

export const foto: Record<string, Foto[]> = {
'''

TS_TAIL = '''};

/** Vse fotografije za storitev. Prazno polje, če jih (še) ni. */
export function fotoZa(slug: string): Foto[] {
  return foto[slug] ?? [];
}

/** Glavna fotografija storitve — prva v skupini. */
export function heroFoto(slug: string): Foto | undefined {
  return foto[slug]?.[0];
}

/** Fotografije za galerijo — vse razen glavne. */
export function galerija(slug: string, koliko = 6): Foto[] {
  return (foto[slug] ?? []).slice(1, 1 + koliko);
}

/** Splošne fotografije za pristajalno stran in "O nas". */
export const splosneFoto = foto["splosno"] ?? [];

/** Fotografija po imenu datoteke znotraj skupine — za strani, kjer vrstni red ni dovolj. */
export function fotoPoImenu(group: string, ime: string): Foto | undefined {
  return foto[group]?.find((f) => f.base.endsWith("/" + ime));
}
'''

def zapisi_ts(manifest):
    """Manifest -> src/content/images.ts. Ročnega urejanja ta datoteka ne prenese."""
    out = [TS_HEAD]
    for group, items in manifest.items():
        out.append(f'  "{group}": [\n')
        for f in items:
            widths = ", ".join(str(x) for x in f["widths"])
            alt = f["alt"].replace('"', '\\"')
            out.append(f'    {{ base: "{f["base"]}", w: {f["w"]}, h: {f["h"]}, '
                       f'widths: [{widths}], alt: "{alt}" }},\n')
        out.append("  ],\n")
    out.append(TS_TAIL)
    open(TS, "w", encoding="utf-8").write("".join(out))
    print("ok ->", TS)

if __name__ == "__main__":
    from mapiranje import GROUPS
    only = sys.argv[1:]
    manifest_path = os.path.join(ROOT, "scripts", ".manifest.json")
    manifest = json.load(open(manifest_path)) if os.path.exists(manifest_path) else {}
    for group, entries in GROUPS.items():
        if only and group not in only: continue
        print(group)
        manifest[group] = process(group, entries)
    # Vrstni red skupin naj sledi mapiranju, ne vrstnemu redu pisanja v manifest.
    manifest = {g: manifest[g] for g in GROUPS if g in manifest}
    json.dump(manifest, open(manifest_path, "w"), ensure_ascii=False, indent=1)
    print("ok ->", manifest_path)
    zapisi_ts(manifest)
