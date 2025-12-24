function sum(n1, n2) { return n1 + n2; }
function multiply(n1, n2) { return n1 * n2; }
function calc(fn, n1, n2) {
    return fn(n1, n2);
}

const result = calc(multiply, 10, 20);
console.log(result)