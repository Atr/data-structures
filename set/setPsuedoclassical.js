const Set = function() {
  this._storage = {};
};

Set.prototype.add = function(item) {
  // Type-checking on 'add' for simplicity, although it limits what our set can hold..
  if ((typeof item !== 'object') && (typeof item !== 'function')) {
    this._storage[item] = true;
  }
};

Set.prototype.contains = function(item) {
  return Boolean (this._storage[item]);
};

Set.prototype.remove = function(item) {
  let removedItem;
  if (this._storage[item]) removedItem = item; 
  delete this._storage[item];
  return removedItem;
};