/**
 * Données équipes THE FINALS — synthèse à partir de sources tierces répertoriées.
 * Les transferts évoluent vite : cette base est mise à jour régulièrement.
 */
export type EsportPlayer = {
	nick: string;
	realName?: string;
	note?: string;
};

export type EsportTeam = {
	id: string;
	name: string;
	region: string;
	liquipediaUrl: string;
	/** Fallback web si aucun visuel local dans `esportTeamLogoImports.ts` */
	logoUrl: string;
	palmares: string[];
	/** Effectif actuel quand il est listé comme actif */
	rosterActive?: EsportPlayer[];
	staff?: { role: string; nick: string }[];
	/** Line-up principal au Grand Major 2025 (nov. 2025, Stockholm) si différent */
	gm2025Roster?: EsportPlayer[];
	gm2025Staff?: { role: string; nick: string }[];
	footnote?: string;
};

export const ESPORT_TEAMS: EsportTeam[] = [
	{
		id: 'ntmr',
		name: 'NTMR',
		region: 'Amérique du Nord — États-Unis (Miami)',
		liquipediaUrl: 'https://liquipedia.net/thefinals/NTMR',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/d/d4/NTMR_2025_allmode.png/600px-NTMR_2025_allmode.png',
		palmares: [
			'Grand Major 2025 — 1ᵉʳ / Champion',
			'Pro League S2 — Saison régulière NA : 1ᵉʳ',
			'Pro League S2 — Championnat NA : 2ᵉ–3ᵉ',
		],
		rosterActive: [
			{ nick: 'Lasagna', realName: 'Jordan Williams' },
			{ nick: 'Graduating', realName: 'Brandon' },
			{ nick: 'lamp', realName: 'Sterling Kimball' },
		],
		staff: [{ role: 'Coach', nick: 'Zuki' }],
		gm2025Roster: [
			{ nick: 'Gremlin', realName: 'Brayden Hanson' },
			{ nick: 'UNI', realName: 'James Takai' },
			{ nick: 'Lasagna', realName: 'Jordan Williams' },
		],
		gm2025Staff: [{ role: 'Coach', nick: 'Zee' }],
		footnote:
			'Vainqueurs du tout premier Grand Major (DreamHack Stockholm, 28–29 nov. 2025). Le trio champion était Gremlin · UNI · Lasagna ; le roster a été recomposé début 2026.',
	},
	{
		id: 'team-secret',
		name: 'Team Secret',
		region: 'Europe',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Team_Secret',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/4/45/Team_Secret_full_lightmode.png/600px-Team_Secret_full_lightmode.png',
		palmares: [
			'Grand Major 2025 — 2ᵉ',
			'Pro League S2 — Saison régulière EU : 1ᵉʳ',
			'Ape Squad: Classics — EMEA League Play 2026 : 1ᵉʳ',
		],
		gm2025Roster: [
			{ nick: 'ElyX', realName: 'Eliot Leyssenne' },
			{ nick: 'Roma' },
			{ nick: 'Oji' },
		],
		gm2025Staff: [{ role: 'Coach', nick: 'Ardy' }],
		footnote:
			'Line-up Grand Major 2025 ci-dessus. Le roster The Finals est ensuite marqué comme dissous en 2026 — suivre la page organisation pour toute relance.',
	},
	{
		id: 'ssg',
		name: 'Spacestation Gaming',
		region: 'Amérique du Nord — États-Unis',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Spacestation_Gaming',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/4/44/Spacestation_Gaming_2021_full_allmode.png/600px-Spacestation_Gaming_2021_full_allmode.png',
		palmares: [
			'Grand Major 2025 — 3ᵉ',
			'Pro League S2 — Saison régulière NA : 3ᵉ',
			'Pro League S2 — Championnat NA : 4ᵉ',
		],
		gm2025Roster: [
			{ nick: 'lamp', realName: 'Sterling Kimball' },
			{ nick: 'Graduating', realName: 'Brandon' },
			{ nick: 'normalize', realName: 'Noah' },
		],
		gm2025Staff: [{ role: 'Coach', nick: 'Hogz' }],
		footnote:
			'Contrats The Finals expirés en décembre 2025 ; l’organisation ne liste plus d’effectif actif sur cette scène.',
	},
	{
		id: 'fnatic',
		name: 'Fnatic',
		region: 'Europe — Royaume-Uni (Londres)',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Fnatic',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/1/10/Fnatic_2020_full_lightmode.png/600px-Fnatic_2020_full_lightmode.png',
		palmares: [
			'Grand Major 2025 — 4ᵉ',
			'Pro League S2 — Championnat EU : 2ᵉ–3ᵉ',
			'Pro League S2 — Saison régulière EU : 2ᵉ',
		],
		gm2025Roster: [
			{ nick: 'NAGHOSTX6', realName: 'Dorian Aubry' },
			{ nick: 'Nigiri', realName: 'Ben Ngoc Nguyen' },
			{ nick: 'Raymke', realName: 'Romain Journet' },
		],
		gm2025Staff: [{ role: 'Coach', nick: 'Skul' }],
		footnote:
			'Ancienne équipe BEAMERS acquise en octobre 2025. La section Fnatic The Finals est ensuite marquée comme dissoute en février 2026.',
	},
	{
		id: 'tsm',
		name: 'TSM',
		region: 'Amérique du Nord — États-Unis',
		liquipediaUrl: 'https://liquipedia.net/thefinals/TSM',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/c/c8/TSM_2019_lightmode.png/600px-TSM_2019_lightmode.png',
		palmares: [
			'Grand Major 2025 — 5ᵉ',
			'Gremlin Cup (dec. 2025) : 2ᵉ',
		],
		gm2025Roster: [
			{ nick: 'Arko', realName: 'Dylan' },
			{ nick: 'Apollo', realName: 'Gavin Halfacre' },
			{ nick: 'Visions', realName: 'Matt Williams' },
		],
		footnote:
			'Line-up issu de l’ex-roster « No Hours » (octobre 2025). Une sortie collective du roster est ensuite signalée en janvier 2026.',
	},
	{
		id: 'envy',
		name: 'ENVY',
		region: 'Amérique du Nord — États-Unis (Dallas)',
		liquipediaUrl: 'https://liquipedia.net/thefinals/ENVY',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/7/7c/ENVY_2025_full_lightmode.png/600px-ENVY_2025_full_lightmode.png',
		palmares: [
			'Grand Major 2025 — 6ᵉ',
			'Ape Squad: Tidal Survival : Vainqueur',
			'Pro League S2 — Championnat NA : 2ᵉ–3ᵉ',
		],
		rosterActive: [
			{ nick: 'Gremlin', realName: 'Brayden Hanson' },
			{ nick: 'notBubbaa' },
			{ nick: 'UNI', realName: 'James Takai' },
		],
		staff: [{ role: 'Coach', nick: 'Zee' }],
		gm2025Roster: [
			{ nick: 'stn2k' },
			{ nick: 'stewj', realName: 'Jaden' },
			{ nick: 'Bizzy' },
		],
		gm2025Staff: [{ role: 'Coach', nick: 'swako' }],
		footnote:
			'Au Grand Major 2025 : stn2k · stewj · Bizzy. Depuis janvier 2026 : Gremlin · notBubbaa · UNI (ex-champions NTMR).',
	},
	{
		id: 'pioneers',
		name: 'Pioneers',
		region: 'Amérique du Nord — États-Unis (Kansas City)',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Pioneers',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/2/2b/Pioneers_2021_full_lightmode.png/600px-Pioneers_2021_full_lightmode.png',
		palmares: [
			'Grand Major 2025 — 7ᵉ–8ᵉ',
			'Ape Squad: Classics — NA League Play 2026 : 3ᵉ',
		],
		rosterActive: [
			{ nick: 'Slothy', realName: 'Nicholas' },
			{ nick: 'Tmills', realName: 'Tyler Mills' },
			{ nick: 'varieyn', realName: 'Nicholas Fagre' },
		],
		staff: [{ role: 'Coach', nick: 'stn2k' }],
		gm2025Roster: [{ nick: 'Brendy' }, { nick: 'Llama', realName: 'Garrett Michael' }, { nick: 'Sponz' }],
		footnote:
			'Roster janvier 2026 annoncé par l’organisation ; line-up GM2025 : Brendy · Llama · Sponz.',
	},
	{
		id: 'alliance',
		name: 'Alliance',
		region: 'Europe — Suède',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Alliance',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/a/a9/Alliance_2024_full_allmode.png/600px-Alliance_2024_full_allmode.png',
		palmares: [
			'Grand Major 2025 — 7ᵉ–8ᵉ',
			'Pro League S2 — Championnat EU : 1ᵉʳ',
			'Partenaire Club officiel THE FINALS (annonce mai 2025)',
		],
		gm2025Roster: [
			{ nick: 'carnifex', realName: 'Edoardo Badolato' },
			{ nick: 'Treason' },
			{ nick: 'Palma' },
		],
		gm2025Staff: [{ role: 'Coach', nick: 'Yung' }],
		footnote:
			'Sortie du roster compétitif fin 2025 — suivre la structure pour toute suite.',
	},
	{
		id: 'drg',
		name: 'Dragon Ranger Gaming',
		region: 'Asie — Chine',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Dragon_Ranger_Gaming',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/a/a0/Dragon_Ranger_Gaming_full_allmode.png/600px-Dragon_Ranger_Gaming_full_allmode.png',
		palmares: [
			'Grand Major 2025 — 9ᵉ',
			'Finals China League — Saison 2 : 2ᵉ',
		],
		rosterActive: [
			{ nick: 'eeeeee', realName: 'Zhao Zhihao' },
			{ nick: 'Hathaway', realName: 'Liang Tianqi' },
			{ nick: 'HuiLiRice', realName: 'Zheng Jie' },
		],
		staff: [
			{ role: 'Coach', nick: 'GEGE' },
			{ role: 'Team Leader', nick: 'NEO' },
		],
		footnote:
			'Lors du LAN Stockholm, un stand-in coach (GEGE) avait remplacé HuiLiRice pour une partie du week-end (raisons personnelles), selon les notes de bracket.',
	},
	{
		id: 'fn-esports',
		name: 'FN Esports',
		region: 'Asie — Corée du Sud',
		liquipediaUrl: 'https://liquipedia.net/thefinals/FN_Esports',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/8/81/FN_Esports_allmode.png/600px-FN_Esports_allmode.png',
		palmares: [
			'Grand Major 2025 — 13ᵉ–14ᵉ',
			'Korea National League 2025 — Grand Final : Vainqueur',
			'Korea National League — Circuit 3 : Vainqueur',
		],
		rosterActive: [
			{ nick: 'GunHee777', realName: 'Hong Gun-hee' },
			{ nick: 'Hustle', realName: 'Park Gi-geun' },
			{ nick: 'MyungTan', realName: 'Choi Ji-hoon' },
			{ nick: 'Shibuya_Lynn', realName: 'Shin Dong-min' },
			{ nick: 'T_T', realName: 'Lee Joon', note: 'effectif élargi au-delà du trio 3v3' },
		],
	},
	{
		id: 'vanguard',
		name: 'Vanguard Gaming',
		region: 'Amérique du Nord — États-Unis',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Vanguard_Gaming',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/2/2e/Vanguard_Gaming_%28The_Finals_Team%29_allmode.png/600px-Vanguard_Gaming_%28The_Finals_Team%29_allmode.png',
		palmares: [
			'Grand Major 2025 — 13ᵉ–14ᵉ',
			'Grand Major 2025 — Qualif EMEA fermée : qualifiés',
		],
		rosterActive: [{ nick: 'Brendy' }, { nick: 'Limp' }, { nick: 'AyoKoy' }],
		staff: [{ role: 'Coach', nick: 'Sugi' }],
		gm2025Roster: [{ nick: 'Dr4x' }, { nick: 'RP1KA' }, { nick: 'Executor' }],
		footnote:
			'Line-up Grand Major 2025 : Dr4x · RP1KA · Executor. Effectif 2026 : Brendy · Limp · AyoKoy.',
	},
	{
		id: 'gen-g',
		name: 'Gen.G Esports',
		region: 'International — USA / Corée du Sud',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Gen.G_Esports',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/0/07/Gen.G_Esports_2026_allmode.png/600px-Gen.G_Esports_2026_allmode.png',
		palmares: [
			'Grand Major 2025 — 15ᵉ–16ᵉ',
			'Acquisition du roster Que Du Love (octobre 2025)',
		],
		gm2025Roster: [{ nick: 'NolyX' }, { nick: 'Pacolem' }, { nick: 'TaeK' }],
		gm2025Staff: [{ role: 'Coach', nick: 'Gr4vii' }],
		footnote:
			'Line-up au Grand Major sous bannière Gen.G. Une fermeture ultérieure de la section The Finals et des mouvements vers d’autres tags sont ensuite signalés.',
	},
	{
		id: 'five-fears',
		name: 'Five Fears',
		region: 'Amériques (organisation) · roster européen',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Five_Fears',
		logoUrl:
			'https://liquipedia.net/commons/images/thumb/2/2c/Five_Fears_lightmode.png/600px-Five_Fears_lightmode.png',
		palmares: [
			'Grand Major 2025 — 16ᵉ',
			'Ape Squad: Classics — EMEA League Play 2026 : 8ᵉ',
		],
		rosterActive: [
			{ nick: 'carnifex', realName: 'Edoardo Badolato' },
			{ nick: 'NAGHOSTX6', realName: 'Dorian Aubry' },
			{ nick: 'Treason' },
		],
		staff: [{ role: 'Coach', nick: 'Mouzer' }],
		footnote:
			'Place de groupe au Grand Major sous une structure encore en consolidation (acquisition TechSource en novembre 2025). Effectif actuel ci-dessus depuis janvier 2026.',
	},
];
