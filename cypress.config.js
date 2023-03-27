const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  "reporter": "junit",
 
    "reporterOptions": {
 
       "mochaFile": "cypress/results/results-[hash].xml",
 
       "toConsole": true
 
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});


