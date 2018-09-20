// Do not use arrow functions - improper 'this' binding

const LinkedListNode = function(val) {
  this.val = val;
  this.next = null;
}

const LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(val) {
  const newTail = new LinkedListNode(val);
  if (!this.head) {
    this.head = newTail;
    this.tail = this.head;
  } else {
    this.tail.next = newTail;
    this.tail = this.tail.next;
  }
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  }
  if (!this.head.next) {
      this.tail = null;
  }
  const temp = this.head;
  this.head = this.head.next;
  return temp.val;
}

LinkedList.prototype.contains = function(val) {
  let cur = this.head;
  while (cur) {
    if (cur.val === val) {
      return true;
    }
    cur = cur.next;
  }
  return false;
}