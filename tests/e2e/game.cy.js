describe("Game Board Interactions", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.wait(2000);
	});

	it("plays a game and displays a winner", function () {
		const playGameAndCheckWinner = (retries = 5) => {
			cy.get("[data-cy=play-button]").click();
			cy.get("[data-loading='false']").should("exist");
			cy.get("body").then(($body) => {
				if (
					$body.find("[data-cy=winner-card]:contains('Winner')")
						.length > 0
				) {
					cy.get("[data-cy=winner-card]")
						.contains("Winner")
						.should("be.visible");
				} else if (retries > 0) {
					cy.log(
						`Winner cards not found or text incorrect. Retrying... Attempts left: ${retries}`
					);
					playGameAndCheckWinner(retries - 1);
				} else {
					throw new Error("Something went wrong.");
				}
			});
		};
		playGameAndCheckWinner();
	});

	it("switches categories from people to starships", () => {
		cy.get("[data-cy=switch-category-button]").click();
		cy.get("[data-cy=switch-category-button]").should("contain", "People");
	});
});
