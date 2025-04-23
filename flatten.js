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

const flatten = function(arr) {
  let concatArr = [];
  for (let i = 0; i < arr.length; i++) {
    
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        concatArr.push(arr[i][j]);
        console.log(`The arr values ${arr[i][j]}`);
      }
    } else {
      concatArr.push(arr[i]);
    }
  }
  return concatArr;
};

let originalNestedArr = [1, 2, [3, 4], 5, [6]];

let concatantedArr = flatten(originalNestedArr); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(originalNestedArr, concatantedArr);






