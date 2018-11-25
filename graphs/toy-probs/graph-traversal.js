const Graph = function (val) {
  this.val = val;
  this.relations = [];
}

/* Traversals */

const BFtraverse = (root, callback) => {
  let nodes = [];
  nodes.push(root);
  while (nodes.length) {
    let curNode = nodes.shift();
    curNode.visited = true;
    callback(curNode);
    curNode.relations.forEach((vertex)=>{
      if (!vertex.visited) {
        nodes.push(vertex);
      }
    });
  }
}

const DFtraverse = (root, callback) => {  
  const recurse = (vertex) => {
    callback(vertex);
    vertex.visited = true;
    vertex.relations.forEach((vertex)=>{
      if (!vertex.visited) {
        recurse(vertex);
      }
    });
  }
  recurse(root);
}

/* Testing */

const zero = new Graph(0);
const one = new Graph(1);
const two = new Graph(2);
const three = new Graph(3);

zero.relations.push(one);
zero.relations.push(two);
one.relations.push(two);
two.relations.push(zero);
two.relations.push(three);
three.relations.push(three);

BFtraverse(zero, (vert) => {console.log(vert.val)});