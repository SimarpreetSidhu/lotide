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

const middle = function(array) {
  let len = array.length;
  let midIndex = Math.floor(len / 2);

  let midArr;
  console.log(`The len is ${len} and the mid index is ${midIndex}`);
  
  if (len <= 2) {
    midArr = [];
  } else {
    if (len % 2 === 0) {
      midArr = array.slice(midIndex - 1, midIndex + 1);
    } else {
      midArr = array.slice(midIndex, midIndex + 1);
    }
    
  }
  return midArr;
};

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5])); 
console.log(middle([1, 2, 3, 4, 5,6]));

let originalArr = [1,2,3,4,5,6,7,8,9,10];
assertArraysEqual(middle(originalArr),[5,6]);






