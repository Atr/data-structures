// Instantiate a new graph
const Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if ((typeof node !== 'object') && (typeof node !== 'function')) {
    const newNode = {
      edges: {},
    };   
    this.storage[node] = newNode;
  }
};

// Return a boolean value indicating whether the passed-in value is contained in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let key in this.storage[node].edges) {
    this.storage[key][node] = false;
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // We shouldn't need both if statements here...
  // ...because by definition, if one node is listed as an edge of another...
  // ...the vice versa situation should also be true.
  // But we're being verbose!
  if ((this.storage[fromNode]) && (this.storage[toNode])) {
    if (this.storage[fromNode].edges[toNode] &&
        this.storage[toNode].edges[fromNode]) {
      return true;    
    }
  }    
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges[toNode] = true;
  this.storage[toNode].edges[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    this.storage[fromNode].edges[toNode] = false;
    this.storage[toNode].edges[fromNode] = false;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addNode - O(1)
// contains - O(1)
// removeNode - O(n)
// hasEdge - O(1)
// addEdge - O(1)
// removeEdge - O(1)
// forEachNode - O(n)

