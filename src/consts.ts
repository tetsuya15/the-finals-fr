export const SITE_TITLE = 'The Finals FR';
export const SITE_TAGLINE = 'Ranked · Meta · Esport';
export const SITE_DESCRIPTION =
	'Le site francophone dédié au compétitif sur The Finals : guides ranked, analyses meta, couverture esport (The Grand Major & équipes pro), patchs et wiki.';

export const NAV_SECTIONS = [
	{
		slug: 'ranked',
		label: 'Ranked',
		short: 'Grimper',
		description: "Guides pour grimper en classé — par classe, par mode, par saison.",
		tagline: 'Gagner, encore, encore.',
	},
	{
		slug: 'meta',
		label: 'Meta',
		short: 'Tier lists',
		description: "Tier lists d'armes, builds S-tier, analyses à chaque patch.",
		tagline: 'Ce qui casse, ce qui plante.',
	},
	{
		slug: 'esport',
		label: 'Esport',
		short: 'Le show',
		description: 'The Grand Major, équipes pro, résultats de matchs, analyses de tournois.',
		tagline: 'Le circuit mondial, décrypté.',
	},
	{
		slug: 'wiki',
		label: 'Wiki',
		short: 'Le compendium',
		description: 'Fiches armes, classes, cartes, spécialisations et gadgets.',
		tagline: "L'encyclopédie du jeu.",
	},
	{
		slug: 'actus',
		label: 'Actus',
		short: 'Le direct',
		description: 'Patch notes décryptés, saisons, events et news de la communauté.',
		tagline: 'Tout ce qui se passe, maintenant.',
	},
	{
		slug: 'lore',
		label: 'Lore',
		short: 'Univers',
		description: "L'univers du show, les candidats, le gameshow dystopique d'Embark.",
		tagline: 'Dans les coulisses du show.',
	},
] as const;

export type NavSectionSlug = (typeof NAV_SECTIONS)[number]['slug'];
