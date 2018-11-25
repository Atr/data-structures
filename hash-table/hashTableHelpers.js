// This class represents an array with limited functionality and a maximum size.
// Ensures you don't accidentally use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

const LimitedArray = function(limit) {
  const storage = [];

  const limitedArray = {};

  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };

  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  
  limitedArray.each = function(callback) {
    for (let i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  const checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// Hashing Function.  Turn string into an integer distributed between 0 and `max`.
const getIndexBelowMaxForKey = function(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//limitedArray.get - O(1)
//limitedArray.set - O(1)
//limitedArray.each - O(n)
//checkLimit - O(1)
//getIndexBelowMaxForKey - O(n)
