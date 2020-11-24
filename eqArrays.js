// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


const eqArrays = function (firstArr, secondArr) {
  let isEqual = false;
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] === secondArr[i]) {
      isEqual = true;
    } else {
      return isEqual = false
    }
  }
  return isEqual
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 