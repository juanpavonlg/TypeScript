class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  } // constructor()
} // _Node

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) {
    return null;
  }
  const nodes = new Map<_Node, _Node>();
  let visited = new Set([node.val]);
  let stack = [node];
  while (stack.length) {
    const curr = stack.pop()!;
    nodes.set(curr, new _Node(curr.val));
    for (const neig of curr.neighbors) {
      if (!visited.has(neig.val)) {
        visited.add(neig.val);
        stack.push(neig);
      }
    }
  }
  for (const [oldNode, newNode] of nodes.entries()) {
    for (const neig of oldNode.neighbors) {
      newNode.neighbors.push(nodes.get(neig)!);
    }
  }
  return nodes.get(node)!;
} // cloneGraph()

const n4 = new _Node(4);
const n3 = new _Node(3);
const n2 = new _Node(2);
let n1 = new _Node(1, [n2, n4]);
n2.neighbors = [n1, n3];
n3.neighbors = [n2, n4];
n4.neighbors = [n1, n3];
console.log(cloneGraph(n1));
n1 = new _Node(1, []);
console.log(cloneGraph(n1));
console.log(cloneGraph(null));
