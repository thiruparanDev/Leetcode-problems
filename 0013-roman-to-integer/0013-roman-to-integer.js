/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // Create an obj with the conversions
  const obj = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      result = result + obj[s[i + 1]] - obj[s[i]];
      i++;
    } else {
      result += obj[s[i]];
    }
  }
  return result;
};