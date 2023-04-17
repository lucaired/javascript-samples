var TimeLimitedCache = function() {
    this.cache = new Map();    
};

/** 
 * Do an "upsert" on some datastructure, setting a key, value
 * with some TTL in milliseconds.
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (this.cache.has(key)) {
        const {value, lastSeen, duration} = this.cache.get(key);
        const now = new Date().getTime();
        this.cache.set(key, {
            value: value,
            lastSeen: new Date().getTime(),
            duration: duration
        });
        return (now < lastSeen + duration);
    } else {
        this.cache.set(key, {
            value: value,
            lastSeen: new Date().getTime(),
            duration: duration
        });
        return false;
    }
};

/** 
 * Returns value for given un-expired key.
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        const {value, lastSeen, duration} = this.cache.get(key);
        const now = new Date().getTime();
        if (now < lastSeen + duration) {
            return value;
        } else {
            // delete from cache ?
            return -1;
        }
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = new Date().getTime();
    return Array.from(this.cache.values()).filter((cacheEntry) => {
        const {value, lastSeen, duration} = cacheEntry;
        return (now < lastSeen + duration);
    }).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

 /**
  * - use a hashmap: key -> val, lastSeen, duration
  *   - set will check non-expired keys with now < lastSeen + duration return true and update the value, lastSeen, duration
  *   - get will do the same check and return an specified above
  *   - count will return the number of values with now < lastSeen + duration 
  */  

 var obj = new TimeLimitedCache()
 console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)) // 42
console.log(obj.set(1, 50, 500)); // false
console.log(obj.get(1)) // 42
setTimeout(() => {
    console.log(obj.set(1, 1000, 1000)); // false
}, 2000);