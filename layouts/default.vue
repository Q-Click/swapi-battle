<template>
	<v-app>
		<v-app-bar app color="deep-purple accent-4" dark>
			<v-toolbar-title>SWAPI Battle Game</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-btn v-if="isLoginPage" class="mr-4" to="/">Home</v-btn>
			<v-btn v-if="!user" to="/login">Login</v-btn>
			<v-btn v-if="user" data-cy="logout-button" @click="signOut"
				>Logout</v-btn
			>
		</v-app-bar>

		<v-main>
			<v-container>
				<slot />
			</v-container>
		</v-main>

		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2024</span>
		</v-footer>
	</v-app>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const user = computed(() => authStore.user);
const router = useRouter();

const signOut = async () => {
	await authStore.signOutUser();
	router.push("/");
};
const isLoginPage = computed(() => router.currentRoute.value.name === "login");
</script>
