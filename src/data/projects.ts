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
		title: 'W0: A VLM-Based GUI Agent with Block-Diffusion Mode Steering',
		tagline:
			'Flagship of the W series: a VLM-based GUI agent that keeps a frozen screen-language backbone and a block-discrete diffusion action head, training only a mode selector with critic-free RLVR (MSPO) for fast, long-horizon GUI control.',
		link: 'https://mk040412.github.io/W0/',
		repo: 'https://github.com/MK040412/W0',
		image: '/weasel-logo.png',
		tags: ['GUI Agent', 'Block Diffusion', 'RLVR'],
		highlight: true,
	},
];

export const subProjects: SubProject[] = [
	{
		title: 'Mean Collapse is a Serious Bottleneck of VLA',
		tagline:
			'We test the mean-collapse case on Ant-Maze. For a VLM-based VLA acting on the latest observation only, mean collapse turns out to be a major problem on POMDP inputs — and a small memory-based steering module on the frozen VLA solves it, raising the success rate above the MDP baseline.',
		link: 'https://mk040412.github.io/Mean-Collapse-VLA/',
		repo: 'https://github.com/MK040412/Mean-Collapse-VLA',
		image: '/ant.png',
		tags: ['VLA', 'POMDP', 'Memory', 'Steering'],
	},
	{
		title: 'MineMate: Multi-Agent Emergent Capability with Humans',
		tagline:
			'Studying how cooperative behaviour emerges when humans are part of a multi-agent system.',
		link: 'https://mk040412.github.io/MineMate/',
		repo: 'https://github.com/MK040412/MineMate',
		image: '/minemate.png',
		tags: ['Multi-Agent', 'Human-in-the-loop'],
	},
];
