const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (results[item] !== undefined) {
        results[item] = results[item] + 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;



