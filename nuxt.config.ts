export default defineNuxtConfig({
	nitro: {
		firebase: {
			gen: 2,
		},
	},
	plugins: ["~/plugins/chart.js", "~/plugins/firebase.ts"],
	modules: ["vuetify-nuxt-module", "@pinia/nuxt", "@nuxt/test-utils/module"],
	runtimeConfig: {
		firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY,
		firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
		firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID,
		firebaseStorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
		firebaseMessagingSenderId:
			process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
		firebaseAppId: process.env.NUXT_FIREBASE_APP_ID,
	},
});
