export default defineNuxtConfig({
	nitro: {
		firebase: {
			gen: 2,
		},
	},
	plugins: ["~/plugins/chart.js", "~/plugins/firebase.ts"],
	modules: ["vuetify-nuxt-module", "@pinia/nuxt", "@nuxt/test-utils/module"],
});
