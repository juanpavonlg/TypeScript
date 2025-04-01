// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  while (head) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
} // reverseList()

const node15 = new ListNode(5);
const node14 = new ListNode(4, node15);
const node13 = new ListNode(3, node14);
const node12 = new ListNode(2, node13);
const node11 = new ListNode(1, node12);
console.log(reverseList(node11));
const node22 = new ListNode(2);
const node21 = new ListNode(1, node22);
console.log(reverseList(node21));
