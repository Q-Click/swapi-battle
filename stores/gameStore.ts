import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("game", {
	state: (): GameState => ({
		leftCard: null,
		rightCard: null,
		scores: { left: 0, right: 0, unknown: 0 },
		currentCategory: "people",
		winner: null,
		loading: false,
	}),
	actions: {
		async playGame() {
			if (this.loading) return;
			this.loading = true;
			this.winner = null;
			this.leftCard = (await this.fetchData(this.currentCategory)) || {
				name: "Unknown",
				type: this.currentCategory,
			};
			this.rightCard = (await this.fetchData(this.currentCategory)) || {
				name: "Unknown",
				type: this.currentCategory,
			};
			this.determineWinner();
			this.loading = false;
		},
		async fetchData(
			category: string,
			retryCount = 0
		): Promise<Card | null> {
			const maxRetries = 10;
			try {
				const id =
					Math.floor(
						Math.random() * (category === "people" ? 82 : 36)
					) + 1;
				const response = await axios.get(
					`https://swapi.tech/api/${category}/${id}`
				);
				return {
					...response.data.result.properties,
					type: category,
				};
			} catch (error) {
				if (retryCount < maxRetries) {
					console.warn(`Retrying... Attempt ${retryCount + 1}`);
					return this.fetchData(category, retryCount + 1);
				} else {
					console.error("Max retries reached, no more attempts.");
					return null;
				}
			}
		},
		determineWinner() {
			if (
				!this.leftCard ||
				!this.rightCard ||
				!this.leftCard.name ||
				!this.rightCard.name
			)
				return;

			const leftValue =
				this.currentCategory === "people"
					? parseInt(this.leftCard.mass!)
					: parseInt(this.leftCard.crew!);
			const rightValue =
				this.currentCategory === "people"
					? parseInt(this.rightCard.mass!)
					: parseInt(this.rightCard.crew!);
			if (leftValue > rightValue) {
				this.scores.left++;
				this.winner = "left";
			} else if (leftValue < rightValue) {
				this.scores.right++;
				this.winner = "right";
			} else {
				this.scores.unknown++;
			}
		},
		switchCategory() {
			this.currentCategory =
				this.currentCategory === "people" ? "starships" : "people";
			this.resetGame();
		},
		resetGame() {
			this.leftCard = null;
			this.rightCard = null;
		},
	},
});
