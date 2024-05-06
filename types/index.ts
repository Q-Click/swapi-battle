interface Card {
	name: string;
	mass?: string;
	crew?: string;
	type: string;
}

interface Scores {
	left: number;
	right: number;
	unknown: number;
}

interface GameState {
	leftCard: Card | null;
	rightCard: Card | null;
	scores: Scores;
	currentCategory: string;
	winner: "left" | "right" | null;
	loading: boolean;
}
