class Stack {
  
  constructor() {
    this.numItems = 0;
    this.storage = {};
  }
  
  push(val) {
    this.storage[this.numItems] = val;
    this.numItems++;
  }
  
  pop() {
    const poppedItem =  this.storage[this.numItems - 1];
    delete this.storage[this.numItems - 1];
    if (this.numItems > 0) this.numItems--;
    return poppedItem;
  }

  size() { 
    return this.numItems;
  }
}