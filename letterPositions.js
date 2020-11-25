// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actualArr, expectedArr) {
  isEqualArrays = eqArrays(actualArr, expectedArr);
  if (!isEqualArrays) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
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

const letterPositions = function(sentence) {
  //const removeSpaces = sentence.replace(/ /g, '');
  const results = {};
  // logic to update results here
 
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else if (sentence[i] === ' ') {
      continue;
    } else if (sentence[i] in results) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }


  return results;
};


//console.log(letterPositions("lighthouse in the house") )

assertArraysEqual(letterPositions("hello").e, [1]);