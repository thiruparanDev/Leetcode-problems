/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let quotient = Math.trunc(dividend/divisor)
    if (quotient>=(2**31 - 1)) return 2**31-1
    else if (quotient<= (Math.pow(-2,31))) return Math.pow(-2,31)
    else return quotient
    
};