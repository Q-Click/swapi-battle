import type { UserCredential, User } from "firebase/auth";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useAuthStore } from "@/stores/auth";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

// Mock User
const mockUser: Partial<User> = {
	uid: "123",
	email: "user@example.com",
	displayName: "Mock User",
	photoURL: null,
	emailVerified: false,
	phoneNumber: null,
	isAnonymous: false,
};

// Mock UserCredential
const mockUserCredential: Partial<UserCredential> = {
	user: mockUser as User,
	providerId: "password",
	operationType: "signIn",
};

vi.mock("firebase/auth", () => ({
	createUserWithEmailAndPassword: vi.fn(),
	signInWithEmailAndPassword: vi.fn(),
	signOut: vi.fn(),
}));

describe("Auth Store", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
		vi.resetAllMocks();
	});

	it("signs up a user successfully", async () => {
		vi.mocked(createUserWithEmailAndPassword).mockResolvedValue(
			mockUserCredential as UserCredential
		);
		const store = useAuthStore();

		await store.signUp("user@example.com", "password123");
		expect(store.user).toEqual(mockUserCredential);
		expect(store.error).toBeNull();
	});

	it("signs in a user successfully", async () => {
		vi.mocked(signInWithEmailAndPassword).mockResolvedValue(
			mockUserCredential as UserCredential
		);
		const store = useAuthStore();

		await store.signIn("user@example.com", "password123");
		expect(store.user).toEqual(mockUserCredential);
		expect(store.error).toBeNull();
	});

	it("signs out a user", async () => {
		vi.mocked(signOut).mockResolvedValue(undefined);
		const store = useAuthStore();

		await store.signOutUser();
		expect(store.user).toBeNull();
		expect(store.error).toBeNull();
	});
});
