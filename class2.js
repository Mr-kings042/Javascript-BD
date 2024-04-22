function fibo(n) {
    if (n < 1) {
        console.log("It seems the number of desired Fibonacci numbers has got an invalid value: " + n);
        return;
    } else {
        let fib = [0];
        if (n > 1) {
            fib[1] = 1;
        }
        let count = 2;
        while (count < n) {
            fib[count] = fib[count - 2] + fib[count - 1];
            count += 1;
        }
        return fib;
    }
}
let nterms = 10;
console.log("First " + nterms + " terms of Fibonacci sequence are: " + fibo(nterms));
console.log("*** End of generating Fibonacci Numbers ***");



function searchStr(p, r) {
    // performing search in string
    let lp = p.length;
    let i = 0;
    let found = 0;
    while (i < lp) {
        if (p[i] == r) {
            console.log(r + " is found at index " + i);
            found = 1;
        }
        i += 1;
    }
    if (found == 0) {
        console.log("*** " + r + " is NOT FOUND in the array ***")
    }
}
let p = ['2', '55', '888', '9', '30', '45'];
let key = '55';
searchStr(p, key);

export {searchStr};