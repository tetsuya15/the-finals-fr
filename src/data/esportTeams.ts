/**
 * Données équipes THE FINALS — synthèse à partir de sources tierces répertoriées
 * (Liquipedia, wiki communautaire officiellement relayé par le circuit).
 * Les transferts évoluent vite : les pages Liquipedia restent la référence live.
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
	palmares: string[];
	/** Effectif actuel quand il est listé comme actif sur Liquipedia */
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
		palmares: [
			'Grand Major 2025 — 1ᵉʳ / Champion (dotation LAN 100 000 $ · 37 500 $ pour le vainqueur)',
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
		palmares: [
			'Grand Major 2025 — 2ᵉ (17 500 $)',
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
			'Line-up Grand Major 2025 ci-dessus. Liquipedia indique une dissolution du roster « The Finals » en 2026 — suivre la page organisation pour toute relance.',
	},
	{
		id: 'ssg',
		name: 'Spacestation Gaming',
		region: 'Amérique du Nord — États-Unis',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Spacestation_Gaming',
		palmares: [
			'Grand Major 2025 — 3ᵉ (10 500 $)',
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
			'Contrats The Finals expirés en décembre 2025 selon Liquipedia ; l’organisation ne liste plus d’effectif actif sur cette scène.',
	},
	{
		id: 'fnatic',
		name: 'Fnatic',
		region: 'Europe — Royaume-Uni (Londres)',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Fnatic',
		palmares: [
			'Grand Major 2025 — 4ᵉ (6 500 $)',
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
			'Ancienne équipe BEAMERS acquise en octobre 2025. Liquipedia note une dissolution Fnatic The Finals en février 2026.',
	},
	{
		id: 'tsm',
		name: 'TSM',
		region: 'Amérique du Nord — États-Unis',
		liquipediaUrl: 'https://liquipedia.net/thefinals/TSM',
		palmares: [
			'Grand Major 2025 — 5ᵉ (3 750 $)',
			'Gremlin Cup (dec. 2025) : 2ᵉ',
		],
		gm2025Roster: [
			{ nick: 'Arko', realName: 'Dylan' },
			{ nick: 'Apollo', realName: 'Gavin Halfacre' },
			{ nick: 'Visions', realName: 'Matt Williams' },
		],
		footnote:
			'Line-up issu de l’ex-roster « No Hours » (octobre 2025). Liquipedia indique une sortie collective du roster en janvier 2026.',
	},
	{
		id: 'envy',
		name: 'ENVY',
		region: 'Amérique du Nord — États-Unis (Dallas)',
		liquipediaUrl: 'https://liquipedia.net/thefinals/ENVY',
		palmares: [
			'Grand Major 2025 — 6ᵉ (3 750 $)',
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
		palmares: [
			'Grand Major 2025 — 7ᵉ–8ᵉ (3 750 $)',
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
		palmares: [
			'Grand Major 2025 — 7ᵉ–8ᵉ (3 750 $)',
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
			'Liquipedia note la sortie du roster compétitif fin 2025 — suivre la structure pour toute suite.',
	},
	{
		id: 'drg',
		name: 'Dragon Ranger Gaming',
		region: 'Asie — Chine',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Dragon_Ranger_Gaming',
		palmares: [
			'Grand Major 2025 — 9ᵉ (2 000 $)',
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
			'Lors du LAN Stockholm, un stand-in coach (GEGE) avait remplacé HuiLiRice pour une partie du week-end (raisons personnelles), selon les notes de bracket Liquipedia.',
	},
	{
		id: 'fn-esports',
		name: 'FN Esports',
		region: 'Asie — Corée du Sud',
		liquipediaUrl: 'https://liquipedia.net/thefinals/FN_Esports',
		palmares: [
			'Grand Major 2025 — 13ᵉ–14ᵉ (1 250 $)',
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
		palmares: [
			'Grand Major 2025 — 13ᵉ–14ᵉ (1 250 $)',
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
		palmares: [
			'Grand Major 2025 — 15ᵉ–16ᵉ (1 250 $)',
			'Acquisition du roster Que Du Love (octobre 2025)',
		],
		gm2025Roster: [{ nick: 'NolyX' }, { nick: 'Pacolem' }, { nick: 'TaeK' }],
		gm2025Staff: [{ role: 'Coach', nick: 'Gr4vii' }],
		footnote:
			'Line-up au Grand Major sous bannière Gen.G. Liquipedia mentionne une fermeture ultérieure de la section The Finals et des mouvements vers d’autres tags.',
	},
	{
		id: 'five-fears',
		name: 'Five Fears',
		region: 'Amériques (organisation) · roster européen',
		liquipediaUrl: 'https://liquipedia.net/thefinals/Five_Fears',
		palmares: [
			'Grand Major 2025 — 16ᵉ (1 250 $)',
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
