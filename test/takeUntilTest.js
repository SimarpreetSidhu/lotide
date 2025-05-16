const assert = require('chai').assert;
const { takeUntil } = require("../index");

describe("#takeUntil", () => {

  it(`returns [ "I've", 'been', 'to', 'Hollywood'] for ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]`, () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], ele => ele === ","), [ "I've", 'been', 'to', 'Hollywood']);
  });

  it("returns the [1,2,5,7,2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], num => num < 0), [1,2,5,7,2]);
  });

});
