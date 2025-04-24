const countLetters = function(str) {
  let result = {};
  let noSpacesStr = str.split(" ").join("");
  for (let i = 0; i < noSpacesStr.length; i++) {
    if (result[noSpacesStr[i]] !== undefined) {
      result[noSpacesStr[i]] = result[noSpacesStr[i]] + 1;
    } else {
      result[noSpacesStr[i]] = 1;
    }
  }
  console.log(result);
  return result;
};

countLetters(`Simarpreet Kaur`);
