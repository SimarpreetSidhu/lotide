const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

let arr1 = [];
assertArraysEqual(middle(arr1),[undefined]);

let arr2 =[1, 2, 3, 4, 5];
assertArraysEqual(middle(arr2),[2]);

let arr3 = [1,2,3,4,5,6,7,8,9,10];
assertArraysEqual(middle(arr3),[5,6]);

let arr4 = [1,2,3,4,5,6,7,8,9,10, 11,12,1,3,1,1,32,3,33,3,3,3,44,4,44,4,4,44,4,4,4,44,4,4,4,4,432,2,2,2,2];
assertArraysEqual(middle(arr4),[3]);
