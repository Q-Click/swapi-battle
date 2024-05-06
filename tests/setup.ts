import { setActivePinia, createPinia } from "pinia";
import { beforeEach } from "vitest";
import { vi } from "vitest";

beforeEach(() => {
	setActivePinia(createPinia());
	// Mocking Firebase auth functions
	vi.mock("firebase/auth", () => ({
		createUserWithEmailAndPassword: vi.fn(),
		signInWithEmailAndPassword: vi.fn(),
		signOut: vi.fn(),
	}));

	// Mocking useNuxtApp to return mocked Auth object
});
