class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode()

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next ?? null;
  }
  return slow;
} // middleNode()

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);
console.log(middleNode(n1));
const n6 = new ListNode(6);
n5.next = n6;
console.log(middleNode(n1));
