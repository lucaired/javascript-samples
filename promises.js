/**
 * Explain JavaScript Promises:
 * 1. What is a Promise?
 *  A Promise is an object that may produce a single value some time in the future: either a resolved value,
 *  or a reason that it’s not resolved (e.g., a network error occurred). 
 *  A Promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
 *  Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
 *
 * 2. What is the difference between a Promise and a Callback?
 *  A callback is a function that is to be executed after another function has finished executing — 
 *  hence the name ‘call back’. In JavaScript, functions are objects.
 *  Because of this, functions can take functions as arguments, and can be returned by other functions.
 * 
 * 3. What is the difference between a Promise and a Future?
 *  A Future is a value that may not yet be available. JavaScript Promises are a subset of Futures.
 * 
 * 4. What is the difference between a Promise and an Observable?
 * 5. What is the difference between a Promise and a Task?
 * 6. What is the difference between a Promise and a Deferred?
 * 7. What is the difference between a Promise and a Job?
 * 8. What is the difference between a Promise and a Thread?
 * 9. What is the difference between a Promise and a Process?
 * 10. What is the difference between a Promise and a Channel?
 * 11. What is the difference between a Promise and a Semaphore?
 * 12. What is the difference between a Promise and a Lock?
 * 13. What is the difference between a Promise and a Condition Variable?
 * 14. What is the difference between a Promise and a Monitor?
 * 15. What is the difference between a Promise and a Mutex?
 */

const promise = new Promise((resolve, reject) => {
  // do a thing, possibly async, then…
  if (true) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});

promise.then(result => console.log(result)); // "Stuff worked!"

promise.catch(error => console.log(error)); // Error: "It broke"

/**
 * To wait for multiple promises to complete, use Promise.all:
 * All promises must resolve, or else the Promise.all call will fail.
 * It does not follow the order of the promises.
 */ 

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");    
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "bar");    
});
const promise5 = new Promise((resolve, reject) => {
    setTimeout(reject, 150, "Rejected baz");
});
const all = Promise.all([promise1, promise2, promise3, promise4, promise5]);
all
.then(results => console.log(results))
.catch(error => console.log(error)); // Error: "baz"

/**
 * To handle multiple promises that may fail, use Promise.allSettled:
 * 
 * The Promise.allSettled() method returns a promise that resolves after 
 * all of the given promises have either fulfilled or rejected,
 * with an array of objects that each describes the outcome of each promise.
 */
Promise.allSettled([promise1, promise2, promise3, promise4, promise5])
.then(results => console.log(results))
.catch(error => console.log(error));
/*
[
  { status: 'fulfilled', value: 3 },
  { status: 'fulfilled', value: 42 },
  { status: 'fulfilled', value: 'foo' },
  { status: 'fulfilled', value: 'bar' },
  { status: 'rejected', reason: 'Rejected baz' }
]
*/

/**
 * To wait only for the first one being settled use Promise.race():
 */
Promise.race([
    new Promise((resolve, reject) => setTimeout(resolve, 200, "one")),
    new Promise((resolve, reject) => setTimeout(reject, 100, "Rejected two")),
])
.then(results => console.log(results)) // "one"
.catch(error => console.log(error)); // Error: "two"

/**
 * To wait for the first promise to resolve or reject, use Promise.any():
 * The Promise.any() method returns a promise that is fulfilled by the first given promise to be fulfilled,
 * or rejected with an AggregateError if all of the given promises are rejected.
 * It resolves all given promises and ignores rejected ones.
 * The difference to race is that it waits for all promises to settle.
 * And unlike allSettled it rejects with an AggregateError if all promises are rejected.
 * Unlike to race it waits for the first resolved promise.
 */
Promise.any([
    new Promise((resolve, reject) => setTimeout(resolve, 200, "Resolve one with any")),
    new Promise((resolve, reject) => setTimeout(reject, 100, "Rejected two")),
    new Promise((resolve, reject) => setTimeout(reject, 150, "Rejected three")),
])
.then(results => console.log(results)) // "one"
.catch(error => console.log(error)); // AggregateError: All promises were rejected

/** Provide me a short summary of Promises */
// Promises are a way to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations 
// where callbacks can create callback hell leading to unmanageable code.
// Promises provide a clean way of handling asynchronous code.
// They are a part of the ES6 specification.

// How can I use async/await with Promises?
// Async/await is a way to write asynchronous code that looks synchronous.
// It is built on top of Promises.

const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000);
});
const b = await a;
console.log(b); // "Promise resolved"

// How can I use async/await with async functions?
// Async functions are functions that return a Promise.
// They can be used with await.

async function asyncFunction() {
  return "Async function resolved";
}
const c = await asyncFunction();