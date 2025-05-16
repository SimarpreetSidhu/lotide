const { assertArraysEqual } = require("../index");

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2]);
assertArraysEqual(["Sim","Tim"], ["Sim"]);
