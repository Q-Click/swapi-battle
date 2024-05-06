<template>
	<v-container :data-loading="loading">
		<v-row data-cy="characters">
			<v-col style="position: relative" cols="12" md="6">
				<CharacterCard :data="leftCard" data-cy="left-card" />
				<v-card
					v-show="winner"
					class="text-center my-4 absolute"
					data-cy="winner-card"
				>
					{{ isWinner("left") }}
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
				<CharacterCard :data="rightCard" data-cy="right-card" />
				<v-card
					v-show="winner"
					class="text-center my-4 absolute"
					data-cy="winner-card"
				>
					{{ isWinner("right") }}
				</v-card>
			</v-col>
		</v-row>
		<div class="d-flex flex-column justify-center my-3">
			<v-btn
				:disabled="loading"
				class="my-2"
				@click="playGame"
				data-cy="play-button"
			>
				{{ playButtonText }}
			</v-btn>
			<v-btn
				:disabled="loading"
				class="my-2"
				@click="switchCategory"
				data-cy="switch-category-button"
			>
				Switch to
				{{ currentCategory === "people" ? "Starships" : "People" }}
			</v-btn>
		</div>
		<div class="mt-2">
			<ScoreBoard :scores="scores" data-cy="score-board" />
		</div>
		<div class="mt-6">
			<WinLossChart data-cy="win-loss-chart" />
		</div>
	</v-container>
</template>

<script setup>
import CharacterCard from "./CharacterCard.vue";
import ScoreBoard from "./ScoreBoard.vue";
import WinLossChart from "./WinLossChart.vue";
import { useGameStore } from "@/stores/gameStore";

const store = useGameStore();

const { playGame, switchCategory } = store;
const { leftCard, rightCard, currentCategory, scores, winner, loading } =
	storeToRefs(store);

const isWinner = (side) => {
	return side === winner.value ? "Winner" : "Loser";
};
const playButtonText = computed(() => {
	return scores.value.left === 0 &&
		scores.value.right === 0 &&
		scores.value.unknown === 0
		? "Play"
		: "Play again";
});
</script>

<style lang="scss" scoped></style>
