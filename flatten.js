const flatten = function (arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattened.push(arr[i])
    }
    else {
      for (let j = 0; j < arr[i].length; j++) {
        flattened.push(arr[i][j])
      }
    }
  }
  return flattened
}


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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
