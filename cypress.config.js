const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "http://www.google.com.br"
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile:'results/output.xml',
    toConsole: false
  }
});
