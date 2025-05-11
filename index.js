const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectEquals = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  map,
  letterPositions,
  flatten,
  findKeyByValue,
  findKey,
  eqObjects,
  eqArrays,
  countOnly,
  countLetters,
  assertObjectEquals,
  assertEqual,
  assertArraysEqual,
  takeUntil,
  without
};