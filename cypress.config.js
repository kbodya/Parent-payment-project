const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '2js1j7',
  e2e: {
    baseUrl: 'http://localhost:1234',
    excludeSpecPattern: ['**/2-advanced-examples/*'],
    testIsolation: false,
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalOriginDependencies: true
    
  }
})