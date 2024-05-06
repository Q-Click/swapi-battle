<template>
	<v-card class="text-center">
		<v-card-title>Scoreboard</v-card-title>
		<v-card-text>
			Left: {{ scores.left }}, Right: {{ scores.right }}, Tie:
			{{ scores.unknown }}
		</v-card-text>
	</v-card>
</template>

<script setup>
defineProps({
	scores: {
		type: Object,
		required: true,
	},
});
</script>
