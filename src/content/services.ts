import type { Service } from "./types";
import { nadstreskiZaAvto } from "./services/nadstreski-za-avto";
import { balkonskeOgraje } from "./services/balkonske-ograje";
import { leseniNadstreski } from "./services/leseni-nadstreski";
import { kovinskiNadstreski } from "./services/kovinski-nadstreski";
import { leseneOgraje } from "./services/lesene-ograje";
import { leseneTerase } from "./services/lesene-terase";
import { leseneFasade } from "./services/lesene-fasade";
import { vrtneLopeUteHiske } from "./services/vrtne-lope-ute-hiske";
import { lesenePergole } from "./services/lesene-pergole";
import { leseniStropiOpazi } from "./services/leseni-stropi-opazi";
import { wpcTerase } from "./services/wpc-terase";
import { stopnice } from "./services/stopnice";
import { visokeGrede } from "./services/visoke-grede";
import { ravneStreheEpdm } from "./services/ravne-strehe-epdm";
import { krovstvoKleparstvo } from "./services/krovstvo-kleparstvo";

export const services: Service[] = [
  nadstreskiZaAvto,
  balkonskeOgraje,
  leseniNadstreski,
  kovinskiNadstreski,
  leseneOgraje,
  leseneTerase,
  leseneFasade,
  vrtneLopeUteHiske,
  lesenePergole,
  leseniStropiOpazi,
  wpcTerase,
  stopnice,
  visokeGrede,
  ravneStreheEpdm,
  krovstvoKleparstvo,
].sort((a, b) => a.order - b.order);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
