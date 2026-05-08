export type SubProject = {
	title: string;
	tagline: string;
	link: string;
	repo: string;
	image: string;
	tags?: string[];
	highlight?: boolean;
};

export const subProjects: SubProject[] = [
	{
		title: 'W0: An Open VLA for Long-Horizon Tasks',
		tagline:
			'Flagship of the W series — confronting the core problems VLAs face today and building toward agents with real autonomy.',
		link: 'https://mk040412.github.io/W0/',
		repo: 'https://github.com/MK040412/W0',
		image: '/weasel-logo.png',
		tags: ['VLA', 'Long-Horizon', 'Autonomy'],
		highlight: true,
	},
	{
		title: 'MineMate: Emergent Behaviour in Multi-Agent Systems with Human',
		tagline:
			'Studying how cooperative behaviour emerges when human partners are part of a multi-agent system.',
		link: 'https://mk040412.github.io/MineMate/',
		repo: 'https://github.com/MK040412/MineMate',
		image: '/minemate.jpg',
		tags: ['Multi-Agent', 'Human-in-the-loop'],
	},
];
