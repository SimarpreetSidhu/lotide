const assert = require('chai').assert;
const { without } = require("../index");

describe("#without", () => {
  it("returns the [2, 3] for [1,2, 3] ", () => {
    assert.deepEqual(without([1,2,3],[1]), [2,3]);
  });

  it("returns the ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(without(['Hello','Lighthouse', 'Labs'],['Hello']), ['Lighthouse', 'Labs']);
  });

});
