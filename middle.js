const middle = function (array) {
  let middle = [];
  if (array.length < 3) {
    return middle
  } else if (array.length % 2 === 1) {
    let pos = Math.floor(array.length / 2);
    middle.push(array[pos]);
    return middle    
  } else {
    let pos1 = array.length / 2;
    middle.push(array[pos1 - 1], array[pos1]);
    return middle
  }
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


assertArraysEqual(middle([1]),[])
assertArraysEqual(middle([1, 2]),[])
assertArraysEqual(middle([1, 2, 3]),[2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]) // => [3, 4]