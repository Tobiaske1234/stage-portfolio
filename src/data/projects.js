// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Accordis App',
		category: 'Web Development',
		img: require('@/assets/images/Accordis-app.png'),
	},
	{
		id: 2,
		title: 'Visualizatie energielabels Waalwijk',
		category: 'Business Intelligence & Data Engineering',
		img: require('@/assets/images/energielabels.webp'),
	},
	{
		id: 3,
		title: 'Medicatie module Zorgmonitor',
		category: 'Business Intelligence',
		img: require('@/assets/images/Macbook-zorgmonitor.webp'),
	},
	{
		id: 4,
		title: 'Power BI connector Validatiemonitor',
		category: 'Data Engineering',
		img: require('@/assets/images/powerbi-validatie.png'),
	},
	{
		id: 5,
		title: 'Accordis AI',
		category: 'Data Engineering',
		img: require('@/assets/images/dataservices.webp'),
	},

];

export default projects;
