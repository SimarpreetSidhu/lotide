const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

const originalArr = [1,2,3,4,5,6,7,8];
const slicedArr = tail(originalArr);
assertEqual(originalArr.length,8);

assertEqual(slicedArr.length , 7);
assertEqual(slicedArr[0] , originalArr[1]);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length , 2);
assertEqual(result[0] ,"Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[2], undefined);

const result1 = tail([1]);
assertEqual(result1.length , 0);
assertEqual(result1[0] , undefined);

const result2 = tail([]);
assertEqual(result2.length , 0);
assertEqual(result2[0] , undefined);





