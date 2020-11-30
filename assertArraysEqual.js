const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actualArr, expectedArr) {
  isEqualArrays = eqArrays(actualArr, expectedArr);
  if (!isEqualArrays) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
};

module.exports = assertArraysEqual;