const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
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
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(["Sima","Tima","Nina"],(word) => word[1]), ["i","i","i"]);
assertArraysEqual(map(["Tiger","Lion","Parrot"], (word) => word[word.length - 1]),["r","n","t"]);






