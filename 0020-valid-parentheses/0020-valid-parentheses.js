/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let obj = { ")": "(", "]": "[", "}": "{" };
  let stack = [];
  for (let i of s) {
    if (obj[i]) {
      if (stack[stack.length - 1] == obj[i]) {
        console.log(stack);
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(i);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};