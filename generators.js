/**
 * @param {number} n 
 * @return {Generator} generator
 */
function* incrementer(n) {
    let increments = 0;

    while (increments < 1000) {
        yield n+increments
        increments++;
    }
}

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    const gen = incrementer(n)
    return function() {
        return gen.next().value
    };
};