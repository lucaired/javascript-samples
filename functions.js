/*
* What does .appy do?
* .apply() is a method that calls a function with a given this value, and arguments provided as an array (or an array-like object).
*/

// list of arguments to be passed to the function

const logArgumentsOfAFunction = function (fn) {
    return function () {
        console.log(arguments);
        return fn.apply(this, arguments);
    }
}

const add = function (a, b) {
    return a + b;
}
logArgumentsOfAFunction(add)(1, 2);