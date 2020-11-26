const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}


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


const assertArraysEqual = function(actualArr, expectedArr) {
  isEqualArrays = eqArrays(actualArr, expectedArr);
  if (!isEqualArrays) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
};


// Example from Compass
const results1 = map(words, word => word[0]);
console.log(results1);


// My results
const results2 = map(words, word => word.length);
//console.log(results2);
console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]));

const results3 = map(words, word => word.concat(123))
//console.log(results3);
console.log(assertArraysEqual(results3, ['ground123', 'control123', 'to123', 'major123', 'tom123']));

const results4 = map(words, word => word.substring(0,2))
//console.log(results4);
console.log(assertArraysEqual(results4, ['gr', 'co', 'to', 'ma', 'to']));