export type SubProject = {
	title: string;
	tagline: string;
	link: string;
	repo: string;
	image: string;
	tags?: string[];
	highlight?: boolean;
};

export const mainProjects: SubProject[] = [
	{
		title: 'W0: An Open VLA for Long-Horizon Tasks',
		tagline:
			'First entry in the W series, confronting the core problems VLAs face today and building toward agents with real autonomy.',
		link: 'https://mk040412.github.io/W0/',
		repo: 'https://github.com/MK040412/W0',
		image: '/weasel-logo.png',
		tags: ['VLA', 'Long-Horizon', 'Autonomy'],
		highlight: true,
	},
];

export const subProjects: SubProject[] = [
	{
		title: 'MineMate: Multi-Agent Emergence with Humans',
		tagline:
			'Studying how cooperative behaviour emerges when humans are part of a multi-agent system.',
		link: 'https://mk040412.github.io/MineMate/',
		repo: 'https://github.com/MK040412/MineMate',
		image: '/minemate.png',
		tags: ['Multi-Agent', 'Human-in-the-loop'],
	},
];
