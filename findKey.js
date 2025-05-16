const findKey = function(object, callback) {
  let allKeys = Object.keys(object);
  for (let key of allKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;