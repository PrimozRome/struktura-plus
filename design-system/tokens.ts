/**
 * Struktura Plus — design tokens (TypeScript)
 * Ogledalo design-system/tokens.css. Uporabi za vrednosti, ki jih rabiš v JS
 * (npr. theme-color, chart barve, OG generiranje). Za stiliranje uporabi CSS.
 */

export const les = {
  50: '#FBF6F0', 100: '#F4E9DC', 200: '#E7D2B8', 300: '#D6B48C',
  400: '#BE9161', 500: '#A2754D', 600: '#875D3A', 700: '#6E4628',
  800: '#4F2D16', 900: '#38200F', 950: '#231309',
} as const;

export const pesek = {
  50: '#FCFAF7', 100: '#F6F1EA', 200: '#EBE3D8', 300: '#DAD0C2',
  400: '#B6A896', 500: '#8C7E6B', 600: '#6B5E4E', 700: '#514738',
  800: '#3A3227', 900: '#26201A', 950: '#17130F',
} as const;

export const cink = {
  50: '#F5F7F8', 100: '#E8ECEF', 200: '#D3DADF', 300: '#B0BBC3',
  400: '#7F8D97', 500: '#5C6A74', 600: '#47535C', 700: '#3A444B',
  800: '#2B3237', 900: '#1C2124', 950: '#111416',
} as const;

export const jantar = {
  DEFAULT: '#C8801F',
  strong: '#9E5F11',
  soft: '#E0A24A',
  ring: '#BC7518',
} as const;

export const semantic = {
  uspeh: '#2E7D52',
  opozorilo: '#B45309',
  napaka: '#B3261E',
} as const;

export const themeColor = {
  light: '#FCFAF7',
  dark: '#1B1410',
} as const;

export const fonts = {
  display: 'Lora',
  body: 'Archivo',
} as const;

export const radius = {
  none: '0',
  sm: '2px',
  md: '3px',
  lg: '6px',
  pill: '999px',
} as const;

export const duration = { fast: 150, base: 220, slow: 400 } as const;
export const ease = 'cubic-bezier(0.2, 0.6, 0.2, 1)';

/** Zaporedje barv za grafe in diagrame (dovolj razmaknjene po svetlosti). */
export const chartSeries = [
  les[700], cink[500], les[400], jantar.strong, cink[700], les[200],
] as const;

export const brand = {
  legalName: 'Struktura Plus',
  previousName: 'Lignum Mont',
  domain: 'strukturaplus.si',
  email: 'info@strukturaplus.si',
  phone: '+386 40 549 345',
  phoneHref: 'tel:+38640549345',
  address: {
    street: 'Brdce 71',
    postalCode: '1431',
    city: 'Dol pri Hrastniku',
    country: 'SI',
  },
  areaServed: 'Slovenija',
} as const;
