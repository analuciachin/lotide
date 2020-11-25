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


console.log(letterPositions("lighthouse in the house") )