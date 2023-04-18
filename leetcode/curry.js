/**
 * Explanation:
 * curry is a function that takes a function and returns a function.
 * 
 * - f(x, y, z) => f(x)(y)(z)
 * 
 * This is a very useful function in functional programming, because
 * it allows you to create function that is already partially applied. 
 */

const doSomething = (subject) => {
    return (verb) => {
        return (object) => {
            return `${subject} ${verb} ${object}`;
        }
    }
}

const doSomethingWith = doSomething('Jesus');
const doSomethingWithJesus = doSomethingWith('loves');
const doSomethingWithJesusYou = doSomethingWithJesus('you');
console.log(doSomethingWithJesusYou);

// Output: Jesus loves you


/**
 * The ieda is to directly apply the args to the function if the
 * function has already received all the arguments it expects.
 * 
 * If not this action can be repeated until the function has received
 * all the arguments it expects. 
 * 
 * 
 */
function curry(func) {
    return function curried(...args) {
        // func.length returns the number of arguments the function expects
        if (args.length >= func.length) {
           return func.apply(this, args);
        } else {
            // here we return a function that will be called in the future
            // with the remaining arguments
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}
const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2,3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying