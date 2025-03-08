const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "tests/cypress/e2e/**/*.spec.{js,ts,jsx,tsx}" // Updated path
  },
});
