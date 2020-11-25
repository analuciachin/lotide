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


const without = function (source, remove) {
  let elements = [];

  for (let j = 0; j < source.length; j++) {
    elements.push(source[j]);
    for (let i = 0; i < remove.length; i++) {
      if (source[j] === remove[i]) {
        elements.pop();
      }
    }
  }

  console.log('source: ', source);
  console.log('remove: ', remove);

  return elements
}

//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);