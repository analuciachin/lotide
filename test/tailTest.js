
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('return [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3])
  });

  it('returns ["b", "c"] for ["a", "b", "c"]', () => {
    assert.deepEqual(tail(["a", "b", "c"]), ["b", "c"]);
  })
});