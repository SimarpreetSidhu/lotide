const findKeyByValue = function(obj, valueToFind) {
  let resultKey;
  for (let key in obj) {
    if (obj[key] === valueToFind) {
      resultKey = key;
      break;
    }
  }
  return resultKey;
};

module.exports = findKeyByValue;
