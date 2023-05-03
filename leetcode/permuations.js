const permutations = (str)=> {
    let acc = new Set()

    for (let j = 0; j < str.length - 1; j ++) {
        for (let i = 0; i < str.length - 1; i ++) {
            let permutation = str
            permutation[j], permutation[i] = permutation[i], permutation[j]
            acc.add(permutation)
        }
    }

    return acc
}

console.log(permutations("abc"))

/* abcd -> dbca, adcb, abdc
 -> insert the last element (d) in a positions 0... and append to the acc
 -> then decrease the index by one
 -> return if index is 0
*/
 