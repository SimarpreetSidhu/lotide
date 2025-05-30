const assert = require('chai').assert;
const { middle } = require("../index");

describe("#middle", () => {
  it("returns the middle element [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns the middle two elements [5,6] for [1,2,3,4,5,6,7,8,9,10]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});

