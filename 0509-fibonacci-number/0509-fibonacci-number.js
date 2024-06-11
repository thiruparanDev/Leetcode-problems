/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let prev = 0;
    let fib = 0;
    for (let m=1; m<=n; m++){
        if (m<=2){
            fib = 1;
            prev = 1;
        }
        else {
            let tempFib= fib
            fib = fib + prev
            prev = tempFib
        }
    }
    return fib
};