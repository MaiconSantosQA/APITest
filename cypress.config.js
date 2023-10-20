const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile:'results/output-[hash].xml',
    toConsole: false
  },
  env: {
      "failOnStatusCode": false
    }
});