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
    console.log(`The length of the both arrays doesn't match`);
  }
  return flag;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1 , arr2)) {
    console.log(`Both arrays matched !`);
  } else {
    console.log(`Both arrays doesn't match`);
  }
 
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2]);






