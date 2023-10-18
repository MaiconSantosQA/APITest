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
    baseUrl: "https://cerebrob2c.b2clogin.com/cerebrob2c.onmicrosoft.com/b2c_1_c3_login_signin_hom/oauth2/v2.0/authorize?client_id=f0444937-b4c3-48de-991c-0e54bd878f3a&scope=https%3A%2F%2Fcerebrob2c.onmicrosoft.com%2Fc3_api_b2c_hom%2Fread%20offline_access%20openid&response_type=code&redirect_uri=https%3A%2F%2Fapp-cerebro3-frontend-hom.azurewebsites.net%2Fapi%2Fauth%2Fcallback%2Fazure-ad-b2c&prompt=login&redirect_c3=%2F%2F&state=zz3gyRmuITvcL122-WFbZC8G9Nx4LOFO5g1uozprUwk"
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