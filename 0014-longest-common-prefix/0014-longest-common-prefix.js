/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
let i = 0;
let coPr = "";
while (i < strs[0].length) {
  let s = strs[0][i];
  for (j = 1; j < strs.length; j++) {
    if (strs[j][i] === s) {
      continue;
    } else {
      i = strs[0].length + 1;
      break;
    }
  }
  if (i !== strs[0].length + 1 && j === strs.length) {
    console.log(true);
    coPr += s;
  }
  i++;
}
    return coPr
};