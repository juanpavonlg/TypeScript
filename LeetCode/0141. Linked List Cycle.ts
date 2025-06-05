class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next ?? null;
    if (fast === slow) {
      return true;
    }
  }
  return false;
} // hasCycle()

const n4 = new ListNode(-4);
const n3 = new ListNode(0, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(3, n2);
n4.next = n2;
console.log(hasCycle(n1));
n2 = new ListNode(2);
n1 = new ListNode(1, n2);
n2.next = n1;
console.log(hasCycle(n1));
n1 = new ListNode(1);
console.log(hasCycle(n1));
