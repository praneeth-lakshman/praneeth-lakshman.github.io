import type { AriaAttributes } from 'svelte/elements';

type BlogC = {
	title: string;
	date: string;
	subtitle: string;
};

export let History: Array<BlogC> = [
	{
		title: 'The first civilisation',
		date: '18th August',
		subtitle: ''
	},
	{
		title: 'The first government',
		date: '18th August',
		subtitle: ''
	},
	{
		title: 'The first empire',
		date: '18th August',
		subtitle: ''
	},
	{
		title: 'The first economy',
		date: '18th August',
		subtitle: ''
	}
];
export let Explainers: Array<BlogC> = [
	{
		title: 'Economics and the Basic Economic Problem',
		date: '18th August',
		subtitle: ''
	},
	{
		title: 'Production Possibility Frontiers',
		date: '18th August',
		subtitle: ''
	},
	{
		title: 'Are we actually rational decision makers?',
		date: '18th August',
		subtitle: ''
	},
	{
		title: 'Types of Capital and Resources',
		date: '18th August',
		subtitle: 'Broad overview'
	}
];

export let Ideologies: Array<BlogC> = [
	{ title: 'Feudalism and Mercantilism', date: '18th August', subtitle: '' },
	{ title: 'Capitalism', date: '18th August', subtitle: '' },
	{ title: 'Socialism, or Communism?', date: '18th August', subtitle: '' },
	{ title: 'The invisible hand of the Market', date: '18th August', subtitle: '' }
];

export let Politics: Array<Array<BlogC>> = [
	History, // History
	Explainers, // Explainers
	Ideologies // Ideologies
];

export let Judging: Array<BlogC> = [
	{ title: 'What gives you the right to critic art?', date: '18th August', subtitle: '' },
	{ title: 'What is the voice of an artist?', date: '18th August', subtitle: '' },
	{
		title: 'A separation between the art and artist',
		date: '18th August',
		subtitle: 'Can it be done, and should it be done?'
	},
	{ title: 'But what is art?', date: '18th August', subtitle: 'And why should we care?' }
];

export let Music: Array<BlogC> = [
	{
		title: 'Delving into DR DOOM',
		date: '18th August',
		subtitle: 'An exploration of what makes rap so good'
	},
	{
		title: 'The commercialisation of pop music',
		date: '18th August',
		subtitle: 'Or, why alt fans need to calm down'
	},
	{
		title: 'How much is the artist to blame for toxic fandoms?',
		date: '18th August',
		subtitle: ''
	},
	{
		title: 'Flow, beats, or lyrics?',
		date: '18th August',
		subtitle: 'A simple introduction to holism and reductionism'
	}
];

export let Poems: Array<BlogC> = [
	{ title: 'I love Ozymandias', date: '18th August', subtitle: 'I am very basic, yes' },
	{ title: 'At what point does poetry become prose?', date: '18th August', subtitle: '' },
	{ title: 'Language-specific poetic devices', date: '18th August', subtitle: '' },
	{ title: 'The importance of non-white poets and their voices', date: '18th August', subtitle: '' }
];

export let Videos: Array<BlogC> = [
	{ title: 'The importance of perspective', date: '18th August', subtitle: '' },
	{
		title: 'Why the medium of video games is the future',
		date: '18th August',
		subtitle: '(but only in a certain way)'
	},
	{
		title: 'Clunky controls and immersive story-telling',
		date: '18th August',
		subtitle: 'How you can have both'
	},
	{ title: 'Why video games are currently chained in potential', date: '18th August', subtitle: '' }
];

export let Art: Array<Array<BlogC>> = [Judging, Music, Poems, Videos];

export let Ethics: Array<BlogC> = [
	{
		title: "Singer says you're a bad person: agree or disagree?",
		date: '18th August',
		subtitle: ''
	},
	{ title: 'A top down view of ethics', date: '18th August', subtitle: '' },
	{
		title: 'Is-ought problem: why there is no objectively good person',
		date: '18th August',
		subtitle: ''
	}
];

export let Knowledge: Array<BlogC> = [
	{
		title: 'Cogito ergo sum: one good statement, yet a series of failures',
		date: '18th August',
		subtitle: ''
	},
	{ title: 'Different Ancient Greek views on Knowledge', date: '18th August', subtitle: '' },
	{
		title: 'Asian views on Knowledge and its lasting influence',
		date: '18th August',
		subtitle: ''
	},
	{
		title: 'Brain in a vat, explained',
		date: '18th August',
		subtitle: 'Or, the philosophy behind The Matrix'
	}
];

export let Logic: Array<BlogC> = [
	{ title: 'Syllogisms', date: '18th August', subtitle: ' and the Origins of Logic' },
	{
		title: 'Exploring the Square of Opposition',
		date: '18th August',
		subtitle: 'with Venn Diagrams'
	},
	{ title: 'Stoic Logic', date: '18th August', subtitle: 'and how it informs the rest of Stoicism' }
];

export let Theology: Array<BlogC> = [
	{ title: 'God?', date: '18th August', subtitle: 'A brief history of worship' },
	{ title: 'How theology affected our politics', date: '18th August', subtitle: '' },
	{ title: 'Why God?', date: '18th August', subtitle: 'Analysing why God may have been created' },
	{
		title: 'Why only one God?',
		date: '18th August',
		subtitle: 'Monotheism and its surprising origins'
	}
];

export let Philosophy: Array<Array<BlogC>> = [Ethics, Knowledge, Logic, Theology];

export let Deepdive: Array<BlogC> = [
	{ title: 'Kinematics', date: '18th August', subtitle: 'Physics' },
	{
		title: "Exploring why Newton's laws of motion are true",
		date: '18th August',
		subtitle: 'Physics'
	},
	{
		title: 'Cognitive biases (and other errors in judgments)',
		date: '18th August',
		subtitle: 'Psychology'
	},
	{ title: 'But how do we measure the mass of atoms?', date: '18th August', subtitle: 'Chemistry' }
];

export let Futurology: Array<BlogC> = [
	{ title: "Why we're struggling with fusion energy", date: '18th August', subtitle: '' },
	{ title: 'This bat-based paint can block sounds: how?', date: '18th August', subtitle: '' },
	{ title: 'Death of the polymath', date: '18th August', subtitle: '' },
	{
		title: 'Climate change: why gaining global consensus today is so much more difficult',
		date: '18th August',
		subtitle: ''
	}
];

export let HistoryScience: Array<BlogC> = [
	{
		title: 'What did science mean to civilisations through time?',
		subtitle: '',
		date: '18th August'
	},
	{
		title: 'The ten most important scientific discoveries, ranked',
		subtitle: '',
		date: '18th August'
	},
	{ title: 'Why does war encourage science?', subtitle: '', date: '18th August' },
	{ title: 'But how important was the quantum discovery?', subtitle: '', date: '18th August' }
];

export let Science: Array<Array<BlogC>> = [
    HistoryScience,
    Deepdive,
    Futurology
]
