import { describe, it, expect, vi } from "vitest";
import { useGameStore } from "../../stores/gameStore";

describe("Game Store", () => {
	it("initializes with default values", () => {
		const store = useGameStore();
		expect(store.leftCard).toBeNull();
		expect(store.rightCard).toBeNull();
		expect(store.scores).toEqual({ left: 0, right: 0, unknown: 0 });
		expect(store.currentCategory).toBe("people");
		expect(store.winner).toBeNull();
		expect(store.loading).toBeFalsy();
	});

	it("plays game and determines a winner correctly", async () => {
		const store = useGameStore();
		vi.spyOn(store, "fetchData")
			.mockResolvedValueOnce({
				name: "Luke Skywalker",
				mass: "77",
				type: "people",
			})
			.mockResolvedValueOnce({
				name: "Darth Vader",
				mass: "89",
				type: "people",
			});

		await store.playGame();
		expect(store.fetchData).toHaveBeenCalledTimes(2);
		expect(store.winner).toBe("right");
	});
});
