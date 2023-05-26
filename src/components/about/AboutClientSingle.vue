<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div>
		<a :href="client.link">
			<img
				:src="client.img"
				:alt="client.title"
				
				target="_blank"
				class="w-64 h-40 object-contain py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
			/>
		</a>
	</div>
</template>

<style lang="scss" scoped></style>
