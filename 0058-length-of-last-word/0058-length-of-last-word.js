/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
       let trimmedWord=s.trim()
    return trimmedWord.length-trimmedWord.lastIndexOf(' ')-1
};