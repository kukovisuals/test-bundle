const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 375,
    viewportHeight: 1000,
    // viewportWidth: 1309,
    // viewportHeight: 726,
    baseUrl: 'https://shop.join-eby.com/',
    video:false,

  },
  reporter: 'mochawesome',
});
