'use strict'

const { upperCamel } = require('.')
const { expect } = require('code')

describe('upper-camel', () => {
  const scenarios = [
    { input: 'some-name', output: 'SomeName' },
    { input: 'SomeName', output: 'SomeName' },
    { input: '@scope/package-name', output: 'ScopePackageName' },
    { input: '__some/name%&', output: 'SomeName' }
  ]

  scenarios.forEach(({ input, output }) => {
    it(`${input} becomes ${output}`, () => {
      expect(upperCamel(input))
        .to.exist()
        .and.to.be.a.string()
        .and.to.equal(output)
    })
  })
})
