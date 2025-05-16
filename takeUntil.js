const takeUntil = function(array, callback) {
  let resultArray = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      resultArray.push(item);
    }
    
  }
  return resultArray;
};

module.exports = takeUntil;









