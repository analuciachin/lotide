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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  //console.log(object1, object2);
  const obj1Key = Object.keys(object1);
  const obj2Key = Object.keys(object2);

  const obj1Ordered = {};
  Object.keys(object1).sort().forEach(function(key) {
    obj1Ordered[key] = object1[key];
  });

  const obj2Ordered = {};
  Object.keys(object2).sort().forEach(function(key) {
    obj2Ordered[key] = object2[key];
  });

  let isEqual = false;


  if (obj1Key.length !== obj2Key.length) {
    //console.log('case 1: check if objs have same number of keys');
    return false
  } else if (obj1Key.sort().join(',') !== obj2Key.sort().join(',')) {
    //console.log('case 2: check if objs have same keys');
    return false
  } else if (JSON.stringify(obj1Ordered) !== JSON.stringify(obj2Ordered)) {
    //console.log('case 3: check if the key:value pairs are the same in both objects');
    return false
  } else {
    //console.log('case 4');
    for (const el in obj1Ordered) {
      if (Array.isArray(obj1Ordered[el])) {
        isEqual = eqArrays(obj1Ordered[el], obj2Ordered[el])
      }
      else if (obj1Ordered[el] === obj2Ordered[el]) {
        isEqual = true
      } else isEqual = false;
    }
  }
  
  return isEqual

};



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actualObj, expectedObj) {
  // Implement me!
  isEqualObjects = eqObjects(actualObj, expectedObj);
  const inspect = require('util').inspect; // <= add this line
  //console.log(`Example label: ${inspect(actualObj)}`);
  if (!isEqualObjects) {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

//console.log(eqObjects(ab, ba));
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false