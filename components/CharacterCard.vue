<template>
	<v-card v-if="data?.name" class="character-card" data-cy="character-card">
		<v-card-title class="text-center">{{ data.name }}</v-card-title>
		<v-card-text class="text-center">
			<div v-if="data.type === 'people'">Mass: {{ displayedMass }}</div>
			<div v-if="data.type === 'starships'">
				Crew: {{ data.crew || "unknown" }}
			</div>
		</v-card-text>
	</v-card>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Object,
		default: () => ({ name: null }),
	},
});
const displayedMass = computed(() =>
	props.data?.mass !== "unknown" ? `${props.data.mass} kg` : "unknown"
);
</script>

<style lang="scss" scoped></style>
