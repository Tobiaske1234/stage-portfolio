<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Bedrijven waarvoor ik heb gewerkt:',
			clients: [
				{
					id: 1,
					title: 'Accordis',
					img: require('@/assets/images/brands/Accordis.jpg'),
					link: 'https://www.accordis.nl/',
				},
				{
					id: 2,
					title: 'Maxserv',
					img: require('@/assets/images/brands/maxserv.png'),
					link: 'https://www.maxserv.nl/',
				},
				{
					id: 3,
					title: 'Driessen Leder',
					img: require('@/assets/images/brands/driessenleder.webp'),
					link: 'https://www.driessenleder.nl/',
				},
				{
					id: 4,
					title: 'SD Styling',
					img: require('@/assets/images/brands/sdstyling.png'),
					link: 'https://www.sdstyling.nl/',
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
