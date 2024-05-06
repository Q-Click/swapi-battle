import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
	const firebaseConfig = {
		apiKey: "AIzaSyCvSxWN1h3A5qwJstlxjPxw-ib6MOA1-ck",
		authDomain: "swapi-battle.firebaseapp.com",
		projectId: "swapi-battle",
		storageBucket: "swapi-battle.appspot.com",
		messagingSenderId: "876638175189",
		appId: "1:876638175189:web:62d6711e0b7ea330aa475c",
	};

	const app = initializeApp(firebaseConfig);

	const auth = getAuth(app);
	const firestore = getFirestore(app);

	// Provide these instances for the whole Nuxt app
	nuxtApp.provide("auth", auth);
	nuxtApp.provide("firestore", firestore);
});
