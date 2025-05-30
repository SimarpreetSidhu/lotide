const assert = require('chai').assert;
const { tail } = require("../index");

describe("#tail", () => {
  it("returns the last element [2,3,4,5,6,7,8] for [1,2,3,4,5,6,7,8]", () => {
    assert.deepEqual(tail([1,2,3,4,5,6,7,8]), [2,3,4,5,6,7,8]);
  });

  it("returns the last element ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
