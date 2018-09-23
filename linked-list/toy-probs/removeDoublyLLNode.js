// You are given a doubly linked list
// Assume it is implemented however you like
// You can decide whether you are given the node or the class
// Remove the node if you find a match

class Node {
  constructor (val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

const findMatch = (node, val) => {
  let curNodePointer = node;
  let prevNodePointer = node.prev;
  let nextNodePointer = node.next;

  while(curNodePointer) {
    if (curNodePointer.val === val) {
      if (prevNodePointer) {
      	prevNodePointer.next = nextNodePointer;
      }
      if (nextNodePointer) {
      	nextNodePointer.prev = prevNodePointer;
      }
      curNodePointer.next = curNodePointer.prev = null;
      return curNodePointer;
    }
    curNodePointer = curNodePointer.next;
    if (curNodePointer) {
      nextNodePointer = curNodePointer.next;
      prevNodePointer = curNodePointer.prev;
    }
  }
  return null;
}

/*
I - a node in a doubly linked list
O - either null, or the returned node if it exists
C - none
E - assume you're given a list with always at least one node
*/

let x = new Node(3);
let y = new Node(4);
let z = new Node(5);
x.next = y;
y.prev = x;
y.next = z;
z.prev = y;

findMatch(x, 3);
// findMatch(x, 4);
// findMatch(x, 5);