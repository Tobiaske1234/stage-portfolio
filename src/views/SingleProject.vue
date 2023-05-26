<script>
// import feather from 'feather-icons';
// import ProjectHeader from '../components/projects/ProjectHeader.vue';
// import ProjectGallery from '../components/projects/ProjectGallery.vue';
// import ProjectInfo from '../components/projects/ProjectInfo.vue';
// import projectsdata from '../data/projects';

export default {
	// name: 'Projects',
	// components: {
	// 	projects,
	// 	ProjectHeader,
	// 	ProjectGallery,
	// 	ProjectInfo,
	// },
	// data: () => {
	// 	return {
	// 		projectsdata,
	// 		// projectImages: [
	// 		// 	{
	// 		// 		id: 1,
	// 		// 		title: 'Kabul Project Management UI',
	// 		// 		img: require('@/assets/images/macbook-validatiemonitor.jpg'),
	// 		// 	},
	// 		// 	{
	// 		// 		id: 2,
	// 		// 		title: 'Kabul Project Management UI',
	// 		// 		img: require('@/assets/images/macbook-validatiemonitor.jpg'),
	// 		// 	},
	// 		// 	{
	// 		// 		id: 3,
	// 		// 		title: 'Kabul Project Management UI',
	// 		// 		img: require('@/assets/images/macbook-validatiemonitor.jpg'),
	// 		// 	},
	// 		// ],
	// 		// projectInfo: {
	// 		// 	clientHeading: 'About Client',
	// 		// 	companyInfos: [
	// 		// 		{
	// 		// 			id: 1,
	// 		// 			title: 'Name',
	// 		// 			details: 'Company Ltd',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 2,
	// 		// 			title: 'Services',
	// 		// 			details: 'UI Design & Frontend Development',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 3,
	// 		// 			title: 'Website',
	// 		// 			details: 'https://company.com',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 4,
	// 		// 			title: 'Phone',
	// 		// 			details: '555 8888 888',
	// 		// 		},
	// 		// 	],
	// 		// 	objectivesHeading: 'Objective',
	// 		// 	objectivesDetails:
	// 		// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		// 	technologies: [
	// 		// 		{
	// 		// 			title: 'Tools & Technologies',
	// 		// 			techs: [
	// 		// 				'HTML',
	// 		// 				'CSS',
	// 		// 				'JavaScript',
	// 		// 				'Vue.js',
	// 		// 				'TailwindCSS',
	// 		// 				'AdobeXD',
	// 		// 			],
	// 		// 		},
	// 		// 	],
	// 		// 	projectDetailsHeading: 'Challenge',
	// 		// 	projectDetails: [
	// 		// 		{
	// 		// 			id: 1,
	// 		// 			details:
	// 		// 				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 2,
	// 		// 			details:
	// 		// 				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 3,
	// 		// 			details:
	// 		// 				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 4,
	// 		// 			details:
	// 		// 				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 		// 		},
	// 		// 	],
	// 		// 	socialSharingsHeading: 'Share This',
	// 		// 	socialSharings: [
	// 		// 		{
	// 		// 			id: 1,
	// 		// 			name: 'Twitter',
	// 		// 			icon: 'twitter',
	// 		// 			url: 'https://twitter.com/',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 2,
	// 		// 			name: 'Instagram',
	// 		// 			icon: 'instagram',
	// 		// 			url: 'https://instagram.com/',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 3,
	// 		// 			name: 'Facebook',
	// 		// 			icon: 'facebook',
	// 		// 			url: 'https://facebook.com/',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 4,
	// 		// 			name: 'LinkedIn',
	// 		// 			icon: 'linkedin',
	// 		// 			url: 'https://linkedin.com/',
	// 		// 		},
	// 		// 		{
	// 		// 			id: 5,
	// 		// 			name: 'Youtube',
	// 		// 			icon: 'youtube',
	// 		// 			url: 'https://www.youtube.com/',
	// 		// 		},
	// 		// 	],
	// 		// },
	// 	};
	// },
	// mounted() {
	// 	feather.replace();
	// },
	// updated() {
	// 	feather.replace();
	// },
	// methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header
		<ProjectHeader :singleProjectHeader="projectsdata.singleProjectHeader.find(e=> e.id == 1)" />

		Project gallery 
		<ProjectGallery :projectImages="projectImages" />

		Project information 
		<ProjectInfo :projectInfo="projectInfo" /> -->

		<section class="bg-white dark:bg-gray-900">
			<div class="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
				<svg class="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
				<h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">In aanbouw</h1>
				<p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">Ik ben hier momenteel nog meebezig, kom binnenkort terug of neem contact met mij op.</p>
			</div>
		</section>
	</div>
</template>

<style scoped></style>
