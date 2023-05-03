// Implement all array functions here
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. forEach
arr.forEach((item, index) => console.log(item, index));
// 2. map
const map = arr.map((item, idx) => item * 2);

// 3. filter
const filter = arr.filter((item) => item % 2 === 0);

// 4. some - returns true if at least one element in the array satisfies the provided testing function
const some = arr.some((item) => item % 2 === 0);

// 5. every - returns true if all elements in the array satisfies the provided testing function
const every = arr.every((item) => item % 2 === 0); // false

// 6. reduce - executes a reducer function (that you provide) on each element of the array,
//             resulting in a single output value
const reduce = arr.reduce((acc, item) => acc + item, 0); // 55

// 7. includes - determines whether an array includes a certain value among its entries, 
//               returning true or false as appropriate
const includes = arr.includes(5); // true
// 8. indexOf
const index = arr.indexOf(5); // 4
// 9. push
arr.push(11);
// 10. lastIndexOf - returns the last index at which a given element can be found in the array,
arr = arr + [5, 5, 5, 5, 5];
const lastIndex = arr.lastIndexOf(5); // 14

// 11. find - returns the value of the first element in the provided array 
//            that satisfies the provided testing function
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const find = arr.find((item) => item % 2 === 0); // 2

// 12. findIndex - returns the index of the first element in the array that 
//                 satisfies the provided testing function
const findIndex = arr.findIndex((item) => item % 2 === 0); // 1

// 13. concat - returns a new array comprised of this array joined with other array(s) and/or value(s)
const concat = arr.concat([11, 12, 13, 14, 15]);

// 14. slice - returns a shallow copy of a portion of an array into a new array object
//             A shallow copy means that it copies only the elements of the array, 
//             no  t the underlying objects. However, if the array contains objects,
//             the objects are copied by reference, not duplicated. This means that
//             if a copied object is modified, the change is visible in both the copy and the original.
//             If the element is not in the array, undefined is returned. 
//             The time complexity is O(n).
const slice = arr.slice(0, 5); // [1, 2, 3, 4, 5]

// 15. splice - changes the contents of an array by removing or replacing existing elements 
//              and/or adding new elements
const splice = arr.splice(0, 5); // [1, 2, 3, 4, 5]
console.log(arr) // [6, 7, 8, 9, 10, 11, 5, 5, 5, 5, 5, 11, 12, 13, 14, 15] - original array is changed

// 16. join - joins all elements of an array into a string
const join = arr.join(' '); // "1 2 3 4 5 6 7 8 9 10 11 5 5 5 5 5 11 12 13 14 15"

// 17. reverse - reverses an array in place. The first array element becomes the last, ...
const reverse = arr.reverse();

// 18. shift - removes the first element from an array and returns that removed element
const shift = arr.shift(); // 15

// 19. unshift - adds one or more elements to the beginning of an array and 
//               returns the new length of the array
const unshift = arr.unshift(0); // 21

// 20. sort
const sort = arr.sort((a, b) => a - b); // [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 15]

const arr2 = [1, 2, 3, 4, 5];
arr2.push(6); // [1, 2, 3, 4, 5, 6]