import { defineStore } from "pinia";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import type { UserCredential, AuthError, Auth } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		user: null as UserCredential | null,
		error: null as string | null,
	}),
	actions: {
		async signUp(email: string, password: string) {
			try {
				const auth = useNuxtApp().$auth as Auth;
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				this.user = userCredential;
				this.error = null;
			} catch (error) {
				const e = error as AuthError;
				this.error = e.message;
			}
		},
		async signIn(email: string, password: string) {
			try {
				const auth = useNuxtApp().$auth as Auth;
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				this.user = userCredential;
				this.error = null;
			} catch (error) {
				const e = error as AuthError;
				this.error = e.message;
			}
		},
		async signOutUser() {
			try {
				const auth = useNuxtApp().$auth as Auth;
				await signOut(auth);
				this.user = null;
				this.error = null;
			} catch (error) {
				const e = error as AuthError;
				this.error = e.message;
			}
		},
	},
});
