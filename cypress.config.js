const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {

    //specPattern: "cypress/e2e/**/*.trane.js",
    excludeSpecPattern:"",
    screenshotsFolder : "cypress/raju",
    videosFolder:"cypress/recordedvideos",
    videoCompression: 0 , //0 to 51 //32 default
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    retries: {
      openMode:1,
      runMode:1
    },
    //defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
    watchForFileChanges: false,
    env:{

       "username": "Admin",
       "password": "admin123"

    },
    video:true,
    experimentalSessionAndOrigin:true,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});
