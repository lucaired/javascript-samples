let hashMap = new Map();
hashMap.set('key1', {
    value: 10,
    lastSeen: 100000,
    ttl: 1000
});
if (hashMap.has('key1')) {
    console.log(hashMap.get('key1'));
}
// { value: 10, lastSeen: 100000, ttl: 1000 }
hashMap.set('key1',{
    value: 20,
    lastSeen: 200000,
    ttl: 1000
})
const {value, lastSeen, ttl} = hashMap.get('key1');
console.log(value, lastSeen, ttl);

console.log(hashMap.get("xyz")) // undefined
hashMap.delete("key1")

// Iterate over the map
for (let [key, value] of hashMap) {
    console.log(key, value);
}
// Iterate with Object.entries
for (let [key, value] of Object.entries(hashMap)) {
    console.log(key, value);
}

// Iterate over the keys

hashMap.set({key: 1}, 1);
hashMap.set({key: 2}, 2);
hashMap.forEach((value, key) => {
    console.log(key, value);
});