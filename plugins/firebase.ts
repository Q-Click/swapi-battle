import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();

	const firebaseConfig = {
		apiKey: config.firebaseApiKey as string,
		authDomain: config.firebaseAuthDomain as string,
		projectId: config.firebaseProjectId as string,
		storageBucket: config.firebaseStorageBucket as string,
		messagingSenderId: config.firebaseMessagingSenderId as string,
		appId: config.firebaseAppId as string,
	};

	const app = initializeApp(firebaseConfig);

	const auth = getAuth(app);
	const firestore = getFirestore(app);

	// Provide these instances for the whole Nuxt app
	nuxtApp.provide("auth", auth);
	nuxtApp.provide("firestore", firestore);
});
