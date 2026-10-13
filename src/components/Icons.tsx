/**
 * IKONE
 *
 * Ročno narisane, ker knjižnica ikon prinese odvisnost in pogosto tudi
 * odjemalske komponente — stran je v celoti strežniška in to želimo obdržati.
 * Vsaka ikona je en sam <svg> v besedilnem toku, brez zahtevkov po omrežju.
 *
 * Pravila, da ostanejo skladne: mreža 24 × 24, samo obris (brez polnila),
 * debelina poteze 1,75, zaobljeni konci, barva iz currentColor. Silhuete so
 * namenoma različne — etiketa, list, kotnik — da se pri 20 px ločijo med
 * seboj tudi, če se podrobnosti zlijejo.
 *
 * Ikone so okrasne: nosijo pomen, ki ga besedilo poleg njih že pove, zato so
 * skrite bralnikom zaslona in nimajo naslova.
 */
const skupno = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
} as const;

type Props = { className?: string };

/** Etiketa s ceno. */
export function IkonaCena({ className }: Props) {
  return (
    <svg {...skupno} className={className}>
      <path d="M12.9 3H19a2 2 0 0 1 2 2v6.1a2 2 0 0 1-.59 1.42l-7.9 7.9a2 2 0 0 1-2.82 0l-6.1-6.1a2 2 0 0 1 0-2.83l7.9-7.9A2 2 0 0 1 12.9 3Z" />
      <path d="M16.6 7.4h.01" />
    </svg>
  );
}

/** List s postavkami — ponudba. */
export function IkonaPonudba({ className }: Props) {
  return (
    <svg {...skupno} className={className}>
      <path d="M13 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V9l-6-6Z" />
      <path d="M13 3v4.5A1.5 1.5 0 0 0 14.5 9H19" />
      <path d="M8.5 13.5h7M8.5 17h4.5" />
    </svg>
  );
}

/** Tesarski kotnik — natančnost. */
export function IkonaKotnik({ className }: Props) {
  return (
    <svg {...skupno} className={className}>
      <path d="M4 3h3.5v13.5H21V20H4Z" />
    </svg>
  );
}

/** Meter — izmera. */
export function IkonaMeter({ className }: Props) {
  return (
    <svg {...skupno} className={className}>
      <rect x="2.5" y="7" width="19" height="10" rx="2" />
      <path d="M7 7v3.5M12 7v3.5M17 7v3.5" />
    </svg>
  );
}

/** Zemljevidni žebljiček — območje izvedbe. */
export function IkonaLokacija({ className }: Props) {
  return (
    <svg {...skupno} className={className}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
