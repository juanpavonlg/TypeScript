class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function swapPairs(head: ListNode | null): ListNode | null {
  // let p = head;
  // let q = head?.next;
  // let r: ListNode | null;
  // let first = true;
  // while (p && q) {
  //   p.next = q.next;
  //   q.next = p;
  //   if (first) {
  //     head = q;
  //     first = false;
  //   } else {
  //     r!.next = q;
  //   }
  //   r = p;
  //   p = p.next;
  //   q = p?.next;
  // }
  // return head;
  if (head === null || head.next === null) {
    return head;
  }
  const node = head.next;
  head.next = swapPairs(node.next);
  node.next = head;
  return node;
} // swapPairs()

const n4 = new ListNode(4);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
let n1: ListNode | null = new ListNode(1, n2);
let r = swapPairs(n1);
console.log(r);
while (r) {
  console.log(r.val);
  r = r.next;
}
n1 = null;
r = swapPairs(n1);
console.log(r);
n1 = new ListNode(1);
r = swapPairs(n1);
console.log(r);
