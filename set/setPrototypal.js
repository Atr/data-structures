const Set = function() {
  const set = Object.create(setMethods);
  set._storage = {};
  return set;
};

const setMethods = {};

setMethods.add = function(item) {
  // Type-checking on 'add' for simplicity, although it limits what our set can hold..
  if ((typeof item !== 'object') && (typeof item !== 'function')) {
    this._storage[item] = true;
  }
};

setMethods.contains = function(item) {
  return Boolean (this._storage[item]);
};

setMethods.remove = function(item) {
  let removedItem;
  if (this._storage[item]) removedItem = item; 
  delete this._storage[item];
  return removedItem;
};