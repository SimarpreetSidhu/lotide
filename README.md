# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @simarpreetsidhu27/lotide`

**Require it:**

`const _ = require('@simarpreetsidhu27/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: Compares two arrays and logs a message indicating whether they are equal.

- `assertEqual`: Compares two primitive values and logs a message indicating whether they are equal.

- `assertObjectsEqual`: Compares two objects and logs a message indicating whether they are equal.

- `countLetters`: Takes a string and returns an object mapping each letter to its frequency in the string.

- `countOnly`: Counts the occurrences of specified elements in an array and returns an object with the counts.

- `eqArrays`: Determines if two arrays are equal by comparing their elements.

- `eqObjects`: Determines if two objects are equal by comparing their keys and values.

- `findKey`: Returns the first key in an object for which the provided callback function returns a truthy value.

- `findKeyByValue`: Returns the first key in an object that corresponds to a given value.

- `flatten`: Flattens a nested array into a single-level array.

- `head`: Returns the first element of an array.

- `letterPositions`: Returns an object mapping each letter in a string to an array of its index positions.

- `map`: Applies a callback function to each element in an array and returns a new array with the results.

- `middle`: Returns the middle element(s) of an array. If the array has one or two elements, it returns an empty array.
   - For arrays with an odd number of elements, it returns a single-element array containing the middle element.

  - For arrays with an even number of elements, it returns an array containing the two middle elements.

- `tail`: Returns all elements of an array except the first one.

- `takeUntil`: Returns a slice of the array containing elements from the start until the callback returns a truthy value.

- `without`: Returns a new array excluding specified elements from the original array.

  

- `map(array, callback)`: Returns a new array based on the results of the callback function