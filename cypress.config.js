const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    timeout: 10000,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
