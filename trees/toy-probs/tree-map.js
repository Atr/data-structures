/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

const Tree = function(value) {
  this.value = value;
  this.children = [];
};


// initial helper method
Tree.prototype.addChild = function(value) {
  const newChild = new Tree (value);
  this.children.push(newChild);
  return newChild;
}

/*
I - (it's a method) that accepts a callback
O - returns a newTree, with the callback called on each value of the first tree
C - none
E - none

Process:
//
take the current node's value
create a new tree, with a value equal to the current node's value passed to the callback

then, for each of the existing tree's children
we're going to push the result of our map function called recursively on those children...
  ...to our new children array

then return the new tree
*/

Tree.prototype.map = function(callback) {
  let newTree = new Tree(callback(this.value));
  for (let i = 0; i < this.children.length; i++) {
    newTree.children.push(this.children[i].map(callback));
  }
  return newTree;
}

//test:
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (value) {
  return value * 2;
})
console.log(newTree);