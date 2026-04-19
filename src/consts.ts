export const SITE_TITLE = 'The Finals FR';
export const SITE_TAGLINE = 'Ranked · Meta · Esport';
export const SITE_DESCRIPTION =
	'Le site francophone dédié au compétitif sur The Finals : guides ranked, analyses meta, couverture esport (The Grand Major & équipes pro), patchs et wiki.';

export const NAV_SECTIONS = [
	{ slug: 'ranked', label: 'Ranked', description: 'Guides pour grimper en classé — par classe, par mode, par saison.' },
	{ slug: 'meta', label: 'Meta', description: 'Tier lists d\'armes, builds S-tier, analyses à chaque patch.' },
	{ slug: 'esport', label: 'Esport', description: 'The Grand Major, équipes pro, résultats de matchs, analyses de tournois.' },
	{ slug: 'wiki', label: 'Wiki', description: 'Fiches armes, classes, cartes, spécialisations et gadgets.' },
	{ slug: 'actus', label: 'Actus', description: 'Patch notes décryptés, saisons, events et news de la communauté.' },
	{ slug: 'lore', label: 'Lore', description: 'L\'univers du show, les candidats, le gameshow dystopique d\'Embark.' },
] as const;

export type NavSectionSlug = (typeof NAV_SECTIONS)[number]['slug'];
