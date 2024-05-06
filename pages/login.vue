<template>
	<v-container>
		<v-card class="pa-4">
			<v-card-title>Login</v-card-title>
			<v-card-text>
				<v-text-field
					v-model="email"
					label="Email"
					type="email"
					data-cy="email"
				/>
				<v-text-field
					v-model="password"
					label="Password"
					type="password"
					data-cy="password"
				/>
			</v-card-text>
			<v-card-actions>
				<v-btn @click="login" color="primary" data-cy="login-button"
					>Log In</v-btn
				>
				<v-btn
					@click="register"
					color="secondary"
					data-cy="register-button"
					>Register</v-btn
				>
			</v-card-actions>
			<v-alert
				v-if="error"
				type="error"
				class="mt-4"
				data-cy="alert-error"
				>{{ error }}</v-alert
			>
		</v-card>
	</v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAuthStore } from "~/stores/auth";

const store = useAuthStore();
const router = useRouter();
const email = ref("");
const password = ref("");

const error = computed(() => store.error);
const login = async () => {
	await store.signIn(email.value, password.value);
	if (error.value) return;
	router.push({ path: "/" });
};

const register = async () => {
	await store.signUp(email.value, password.value);
	if (error.value) return;
	router.push({ path: "/" });
};
</script>
