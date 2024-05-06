import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000",
		specPattern: "tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
		setupNodeEvents(on, config) {},
		supportFile: false,
	},
});
