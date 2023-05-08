const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 375,
    viewportHeight: 1000,
    // viewportWidth: 1309,
    // viewportHeight: 726,
    baseUrl: 'http://127.0.0.1:9292',
    video:false,

  },
  reporter: 'mochawesome',
});