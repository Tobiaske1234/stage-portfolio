<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Mijn naam is Tobi de Fijter en ik ben een enthousiaste en gedreven 18-jarige Data Engineer & BI Developer. Mijn passie ligt in het transformeren van ruwe gegevens tot waardevolle inzichten en het ontwikkelen van gebruiksvriendelijke dashboards en rapportages. Met mijn vaardigheden en ervaring zorg ik ervoor dat data wordt omgezet in bruikbare kennis.',
				},
				{
					id: 2,
					bio:
						'Als het gaat om het werken met gegevensvisualisatie- en business intelligence-tools, ben ik zeer bedreven in het gebruik van Power BI, Qlik Sense en Timextender. Met behulp van deze krachtige tools kan ik complexe datastromen analyseren en omzetten naar begrijpelijke en visueel aantrekkelijke visualisaties.',
				},
				{
					id: 3,
					bio:
						'Naast mijn expertise in de genoemde tools, ben ik ook bedreven in verschillende programmeertalen, zoals C#, JavaScript, TypeScript, Vue, PHP en SQL. Deze vaardigheden stellen mij in staat om geavanceerde data-integraties uit te voeren, aangepaste rapportages te ontwikkelen en bestaande systemen te optimaliseren.',
				},
				{
					id: 4,
					bio:
						'Mijn reis begon op het Koning Willem 1 College, waar ik de opleiding Software Development heb afgerond met een uitstekende score van 9. Tijdens mijn studie heb ik een sterke basis gelegd in software engineering en heb ik geleerd hoe ik complexe problemen kan oplossen met behulp van efficiënte en schaalbare oplossingen.',
				},
				{
					id: 5,
					bio:
						'Ik ben altijd op zoek naar nieuwe uitdagingen en mogelijkheden om mijn kennis en vaardigheden verder te ontwikkelen. Het fascineert me om te zien hoe data de basis vormt voor het nemen van weloverwogen beslissingen en het stimuleren van bedrijfsgroei. Ik ben vastbesloten om organisaties te helpen hun data-potentieel volledig te benutten en hen te voorzien van waardevolle inzichten die hen een concurrentievoordeel bieden.',
				},
				{
					id: 6,
					bio:
						'Als u op zoek bent naar een betrokken en resultaatgerichte Data Engineer & BI Developer, sta ik klaar om met u samen te werken. Laten we praten over uw project en hoe ik kan bijdragen aan het succes van uw organisatie. Neem gerust contact met mij op en laten we aan de slag gaan!',
				},
				{
					id: 7,
					bio:
						'Met vriendelijke groet,',
				},
				{
					id: 8,
					bio:
						'Tobi de Fijter',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
