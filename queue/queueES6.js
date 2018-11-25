class Queue {
  
  constructor() {
    this.numItems = 0;
    this.storage = {};
  }

  enqueue(val) {
    if (val && typeof val !== 'function') {
      this.storage[this.numItems] = val;
      this.numItems++;
    }
  }

  dequeue() {
    if (this.numItems > 0) this.numItems--;

    const keys = Object.keys(this.storage);
    const dequeued = this.storage[0];
    
    for (let i = 0; i < keys.length - 1; i++) {
      this.storage[keys[i]] = this.storage[keys[i + 1]];
    }

    delete this.storage[keys.length - 1];
    return dequeued;
  }

  size() {
    return this.numItems;
  }
}