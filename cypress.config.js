const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'ay6ukb',
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 5000,
    experimentalOriginDependencies: true,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      allureWriter(on, config);
      return config;
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: {
      runMode: 2,
      openMode: 0
    }
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