const letterPositions = function(sentence) {
  let results = {};
  let noSpaceSentence = sentence.split(" ").join("");
  for (let i = 0; i < noSpaceSentence.length; i++) {
    if (results[noSpaceSentence[i]] === undefined) {
      results[noSpaceSentence[i]] = [i];
    } else {
      results[noSpaceSentence[i]] = results[noSpaceSentence[i]].concat([i]);
    }
    
  }
  return results;
};

const eqArrays = function(arr1, arr2) {
  let flag = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        flag = false;
        break;
      }
    }
  } else {
    flag = false;
  }
  return flag;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1 , arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
 
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9,14,19]);