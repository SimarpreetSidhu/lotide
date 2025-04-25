const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  let noSpacesStr = str.split(" ").join("");
  for (let i = 0; i < noSpacesStr.length; i++) {
    if (result[noSpacesStr[i]] !== undefined) {
      result[noSpacesStr[i]] = result[noSpacesStr[i]] + 1;
    } else {
      result[noSpacesStr[i]] = 1;
    }
  }
  return result;
};

const expectedObject = {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  
}

const actualObject = countLetters(`lighthouse in the house`);
const entries1 = JSON.stringify(Object.entries(expectedObject));
const entries2 = JSON.stringify(Object.entries(actualObject));

assertEqual(entries1,entries2);

// Another way to use assertEqual as recommended by AI feedback

for (let key in expectedObject){
  assertEqual(actualObject[key],expectedObject[key])
}
