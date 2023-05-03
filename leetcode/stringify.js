const stringify = (obj, acc) => {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'string') {
            acc += `"${key}":"${value}"`;
        } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
            acc += `"${key}":${value}`;
        } else {
            if (Array.isArray(value)) {
                acc += `"${key}":[`;
                // to fight the trailing comma and space we can join the array with a comma and space   
                value.map((element) => { 
                    console.log(element);
                    if (typeof element === 'number' || typeof element === 'boolean' || element === null) {
                        acc += `${element}`;
                    } else if (typeof element === 'string') {
                        acc += `"${element}"`;
                    } else {
                        acc += `${stringify(element, '')}`;
                    }
                 });
                acc += `]`;
            }
        }
    });
    return acc
}

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    const stringified = stringify(object, '');
    return `{${stringified}}`;
};

console.log(jsonStringify({x: 5, y: '6', c: null, a: [-1, 'b', null, true, [1,2,3]]}));

// Check how to iterate over objects etc.
// How to check if element is null in array ? 

// I guess that the problem is that it is callign stringify on the array and not on the elements of the array
// that have been mapped before.
// Solved by calling a forEach on it.

// Remove the trailing comma and space 