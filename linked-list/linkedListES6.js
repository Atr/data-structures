class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newTail = new LinkedListNode(val);
    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
  }

  removeHead() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.tail = null;
    }
    let tempHead = this.head.val;
    this.head = this.head.next;
    return tempHead;
  }

  contains(val) {
    let copy = this.head;
    while(copy) {
      if (copy.val === val) {
        return true;
      }
      copy = copy.next;
    }
    return false;
  }
  
}