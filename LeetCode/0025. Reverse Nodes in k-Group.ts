class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let count = 0;
  let next = head;
  let start: ListNode | null = null;
  let prev: ListNode | null = null;
  while (next) {
    if (count % k === 0) {
      start = next;
    } else if (count % k === k - 1) {
      const end = next;
      next = start;
      if (count === k - 1) {
        head = end;
      }
      while (start !== end) {
        const temp: ListNode | null = start!.next;
        start!.next = end.next;
        end.next = start;
        start = temp;
      }
      if (prev) {
        prev.next = end;
      }
      prev = next;
    }
    count++;
    next = next?.next ?? null;
  }
  return head;
} // reverseKGroup()

const n15 = new ListNode(5);
const n14 = new ListNode(4, n15);
const n13 = new ListNode(3, n14);
const n12 = new ListNode(2, n13);
const n11 = new ListNode(1, n12);
let r = reverseKGroup(n11, 2);
console.log(r);
while (r) {
  console.log(r.val);
  r = r.next;
}
const n25 = new ListNode(5);
const n24 = new ListNode(4, n25);
const n23 = new ListNode(3, n24);
const n22 = new ListNode(2, n23);
const n21 = new ListNode(1, n22);
r = reverseKGroup(n21, 3);
console.log(r);
while (r) {
  console.log(r.val);
  r = r.next;
}
