const Graph = function(val) {
  this.val = val;
  this.relations = [];
}

const isPathBF = (start, targetVertexVal) => {    
  let result = false;
  let nodes = [start];
  while (nodes.length) {
    let curNode = nodes.shift();
    curNode.visited = true;
    curNode.relations.forEach((vertex)=>{
      if (vertex.val === targetVertexVal) {
        result = true;   
      }
      if (!vertex.visited) {
        nodes.push(vertex);
      }
    });
  }
  return result;
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

console.log(isPathBF(two, 3));