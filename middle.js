const middle = function(array) {
  let len = array.length;
  let midIndex = Math.floor(len / 2);

  let midArr = [];
  if (len > 2) {
    if (len % 2 === 0) {
      midArr = array.slice(midIndex - 1, midIndex + 1);
    } else {
      midArr = array.slice(midIndex, midIndex + 1);
    }
    
  }
  return midArr;
};
module.exports = middle;








