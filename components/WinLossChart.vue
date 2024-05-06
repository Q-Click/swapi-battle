<template>
	<div>
		<Bar :data="chartData" :options="chartOptions" />
	</div>
</template>
<script setup>
import { Bar } from "vue-chartjs";
import { useGameStore } from "@/stores/gameStore";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from "chart.js";
import { ref } from "vue";
ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale
);

const store = useGameStore();

const chartData = computed(() => ({
	labels: ["Wins", "Losses", "Ties"],
	datasets: [
		{
			label: "Win/Loss Ratio",
			backgroundColor: ["#f87979", "#2196F3", "#ddd"],
			data: [store.scores.left, store.scores.right, store.scores.unknown],
		},
	],
}));

const chartOptions = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
		},
	},
};
</script>
