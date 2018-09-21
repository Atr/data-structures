const BinaryTree = function(value) {
  this.value = value;
  this.left = this.right = null;
};

BinaryTree.prototype.addLeftChild = function(value) {
  this.left = new BinaryTree (value);
  return this.left;
}

BinaryTree.prototype.addRightChild = function(value) {
  this.right = new BinaryTree (value);
  return this.right;
}

BinaryTree.prototype.DFTraverse = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.DFTraverse(callback);
  }
  if (this.right) {
    this.right.DFTraverse(callback);
  }
}

BinaryTree.prototype.BFTraverse = function(callback) {
  let queue = [this];
  while (queue.length) {
    curNode = queue.shift();
    callback(curNode.value);
    if (curNode.left) {
      queue.push(curNode.left);
    }
    if (curNode.right) {
      queue.push(curNode.right);
    }
  }
}

BinaryTree.prototype.contains = function(val) {
  let result = false;
  this.DFTraverse( (nodeVal) => {
    if (nodeVal === val) {
      result = true;
    }
  });
  return result;
}