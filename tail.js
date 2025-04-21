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

const result3 = tail([1,2,3,4,5,6,6,7,87]);
assertEqual(result3.length , 8);
assertEqual(result3[0] , undefined);



