
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


module.exports = middle;