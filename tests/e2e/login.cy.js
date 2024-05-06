describe("Login Functionality", () => {
	beforeEach(() => {
		cy.visit("/login");
		cy.wait(2000);
	});

	it("allows the user to redirect and redirects to the homepage", () => {
		cy.get("[data-cy=email]").type("user2@example.com");
		cy.get("[data-cy=password]").type("password123");

		cy.get("[data-cy=register-button]").click();
		cy.url().should("include", "/");
		cy.get("[data-cy=logout-button]").should("be.visible");
	});

	it("allows the user to login and redirects to the homepage", () => {
		cy.get("[data-cy=email]").type("user@example.com");
		cy.get("[data-cy=password]").type("password123");

		cy.get("[data-cy=login-button]").click();
		cy.url().should("include", "/");
		cy.get("[data-cy=logout-button]").should("be.visible");
	});

	it("shows an error message on failed login", () => {
		cy.get("[data-cy=email]").type("user@example.com");
		cy.get("[data-cy=password]").type("wrongpassword");

		cy.get("[data-cy=login-button]").click();
		cy.get("[data-cy=alert-error]").should("be.visible");
	});
});
