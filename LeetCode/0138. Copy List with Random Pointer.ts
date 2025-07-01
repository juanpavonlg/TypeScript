class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  } // constructor()
} // _Node

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node | null, _Node | null>();
  let curr = head;
  while (curr) {
    map.set(curr, new _Node(curr.val));
    curr = curr.next;
  }
  for (const [key, value] of map) {
    value!.next = map.get(key!.next) ?? null;
    value!.random = map.get(key!.random) ?? null;
  }
  return map.get(head!) ?? null;
} // copyRandomList()

const n4 = new _Node(1);
const n3 = new _Node(10, n4);
let n2 = new _Node(11, n3);
let n1 = new _Node(13, n2);
let n0 = new _Node(7, n1);
n1.random = n0;
n2.random = n4;
n3.random = n2;
n4.random = n0;
console.log(copyRandomList(n0));
n1 = new _Node(2);
n0 = new _Node(1, n1);
n0.random = n1;
n1.random = n1;
console.log(copyRandomList(n0));
n2 = new _Node(3);
n1 = new _Node(3, n2);
n0 = new _Node(3, n1);
n1.random = n0;
console.log(copyRandomList(n0));
