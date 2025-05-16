const flatten = function(arr) {
  let concatArr = [];
  for (let i = 0; i < arr.length; i++) {
    
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        concatArr.push(arr[i][j]);
      }
    } else {
      concatArr.push(arr[i]);
    }
  }
  return concatArr;
};

module.exports = flatten;






