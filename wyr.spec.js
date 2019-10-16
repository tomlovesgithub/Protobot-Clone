const WyrApp = require('module');'./wyr.js'

describe(WyrApp, () => {
  test("Filter function", () => {
    wyrApp = new WyrApp
    expect(wyrApp.question).toBe('Would you Rather X or Y?')
  })
});
