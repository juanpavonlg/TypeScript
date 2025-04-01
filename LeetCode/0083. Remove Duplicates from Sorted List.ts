//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode()

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head;
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
} // deleteDuplicates()

const node13 = new ListNode(2);
const node12 = new ListNode(1, node13);
const node11 = new ListNode(1, node12);
console.log(deleteDuplicates(node11));
const node25 = new ListNode(3);
const node24 = new ListNode(3, node25);
const node23 = new ListNode(2, node24);
const node22 = new ListNode(1, node23);
const node21 = new ListNode(1, node22);
console.log(deleteDuplicates(node21));
const node33 = new ListNode(1);
const node32 = new ListNode(1, node33);
const node31 = new ListNode(1, node32);
console.log(deleteDuplicates(node31));
