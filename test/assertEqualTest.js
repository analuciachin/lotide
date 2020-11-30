
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
  it('return true for 1 and 1', () => {
    assert.strictEqual(assertEqual(1, 1), true)
  });

  it('return false for 1 and 2', () => {
    assert.strictEqual(assertEqual(1, 2), false)
  });

  it('return false for Lighthouse Labs and Bootcamp', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'), false)
  });

  it('return true for Bootcamp and Bootcamp', () => {
    assert.strictEqual(assertEqual('Bootcamp', 'Bootcamp'), true)
  });

});