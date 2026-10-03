class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let node = head;
  while (node && node.next) {
    const tmp = new ListNode(gcd(node.val, node.next.val), node.next);
    node.next = tmp;
    node = tmp.next;
  }
  return head;
} // insertGreatestCommonDivisors()

function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : a;
} // gcd()

const n4 = new ListNode(3);
const n3 = new ListNode(10, n4);
const n2 = new ListNode(6, n3);
let n1 = new ListNode(18, n2);
let r = insertGreatestCommonDivisors(n1);
while (r) {
  console.log(r.val);
  r = r.next;
}
n1 = new ListNode(7);
console.log(insertGreatestCommonDivisors(n1));
