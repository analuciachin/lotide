
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');


describe('#assertArraysEqual', () => {
  it('return true for [1,2,3] and [1,2,3]', () => {
    assert.deepEqual(assertArraysEqual([1,2,3],[1,2,3]), true)
  });

  it('return false for [3,2,1] and [1,2,3]', () => {
    assert.deepEqual(assertArraysEqual([3,2,1],[1,2,3]), false)
  });

});