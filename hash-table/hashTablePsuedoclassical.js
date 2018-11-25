// Simplified conceptual overview of a hash table:
// ...
// Hash Table has an array of 'buckets' - a bucket at each index of the array.
// This array is called storage.
// Each bucket is an array itself (or a linked list - linked list probably more efficient...
// ...but implementing with array for simplicity).
// Each item in the bucket will be a tuple, where t[0] is key and t[1] is value.
// When inserting a key-value pair into the hash table...
// ...you'll run the key through a hashing function that determines at which 'bucket'...
// ...in storage that key-value pair should live.  You then insert the key-value pair...
// ...as a tuple at that index. 
// As long as you re-size the hash-table, this data structure will provide constant time lookup.



// Do not use the typical bracket notation for arrays 
// when interacting with a limitedArray instance.
// Also note!  To run the below code, you'd need to import hashTableHelpers.js

const HashTable = function() {
  // Arbitrary value for limit (to start..);
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  
  // If no bucket already at index, create empty bucket, push to index
  if (!this._storage.get(index)) {
    const newBucket = [];
    this._storage.set(index, newBucket);
  }
  
  const bucket = this._storage.get(index);
  
  // Iterate through the bucket.  If key already exists, overwrite the value.
  let aSwitch = false;
  
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      aSwitch = true;
      return;
    }
  }
  
  // Otherwise, create a tuple with the key and value and push the tuple to the bucket.
  if (!aSwitch) {
    let newTuple = [k, v];
    this._storage.get(index).push(newTuple);
  }  
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }                           
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);

  if(bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};

