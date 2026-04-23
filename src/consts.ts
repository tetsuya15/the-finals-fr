export const SITE_TITLE = 'The Finals FR';
export const SITE_TAGLINE = 'Ranked · Communauté · Esport';
export const SITE_DESCRIPTION =
	'Le site francophone dédié au compétitif sur The Finals : guides ranked, analyses communauté, couverture esport (The Grand Major & équipes pro), patchs et wiki.';

export const NAV_SECTIONS = [
	{
		slug: 'communaute',
		label: 'Communauté',
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
] as const;

export type NavSectionSlug = (typeof NAV_SECTIONS)[number]['slug'];
