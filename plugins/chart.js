import {
	Chart,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Register the components you want to use
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("chart", Chart);
});
