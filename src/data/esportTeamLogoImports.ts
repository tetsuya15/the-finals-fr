/**
 * Visuels locaux (bundles / promos / logos) pour les cartes Esport.
 * Les IDs correspondent à `EsportTeam.id` dans esportTeams.ts.
 */
import type { ImageMetadata } from 'astro';

import type { EsportTeam } from './esportTeams';

import logoAlliance from '../assets/TGM25_Alliance_Bundle_1.jpg';
import logoEnvy from '../assets/800px-TGM25_Envy_Bundle_1.jpg';
import logoFnatic from '../assets/TGM25_Fnatic_Bundle_1.jpg';
import logoFnEsports from '../assets/600px-FN_Esports_allmode.png';
import logoGenG from '../assets/800px-TGM25_Gen.G_Bundle_1.jpg';
import logoNtmr from '../assets/800px-TGM25_NTMR_Bundle_1.jpg';
import logoPioneers from '../assets/800px-TGM25_Pioneers_Bundle_1.jpg';
import logoTeamSecret from '../assets/TGM25_Team_Secret_Bundle_1.jpg';
import logoTsm from '../assets/TGM25_TSM_Bundle_1.jpg';
import logoVanguard from '../assets/TGM25_Vanguard_Bundle_1.jpg';
import logoDrg from '../assets/the-finals-season-9-dragon-rising.avif';

/** Pas encore de fichier dédié dans assets : `five-fears`, `ssg` → fallback Liquipedia dans la page. */
export const ESPORT_TEAM_LOCAL_LOGOS: Partial<Record<EsportTeam['id'], ImageMetadata>> = {
	alliance: logoAlliance,
	drg: logoDrg,
	envy: logoEnvy,
	fnatic: logoFnatic,
	'fn-esports': logoFnEsports,
	'gen-g': logoGenG,
	ntmr: logoNtmr,
	pioneers: logoPioneers,
	'team-secret': logoTeamSecret,
	tsm: logoTsm,
	vanguard: logoVanguard,
};
