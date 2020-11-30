const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actualArr, expectedArr) {
  isEqualArrays = eqArrays(actualArr, expectedArr);
  if (!isEqualArrays) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArr} !== ${expectedArr}`);
    return false;
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
    return true;
  }
};

module.exports = assertArraysEqual;