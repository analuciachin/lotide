// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function (sentence) {
  const removeSpaces = sentence.replace(/ /g, '');
  //console.log(removeSpaces);
  const letters = {};

  for (let i = 0; i < removeSpaces.length; i++) {
    if (i === 0) {
      letters[removeSpaces[i]] = 1;
    } else if (removeSpaces[i] in letters) {
      letters[removeSpaces[i]] += 1;
    } else {
      letters[removeSpaces[i]] = 1;
    }
  }

  return letters
}


console.log(countLetters("lighthouse in the house") )