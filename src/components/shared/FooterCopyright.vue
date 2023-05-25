<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Stage portfolio',
			author: 'Tobi de Fijter',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}
			<a
				href="https://github.com/Tobiaske1234"
				target="__blank"
				class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
			>
				{{ projectName }}
			</a>
			gebouwd door
			<a
				href="https://tobidefijter.nl"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
