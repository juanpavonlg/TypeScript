class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let pointer = head;
  let count = 1;
  while (pointer?.next) {
    pointer = pointer.next;
    count++;
  }
  let i = 1;
  pointer = head;
  while (i < count - n) {
    pointer = pointer?.next ?? null;
    i++;
  }
  if (i <= count - n) {
    pointer!.next = pointer?.next?.next ?? null;
  } else {
    head = head?.next ?? null;
  }
  return head;
} // removeNthFromEnd()

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, n2);
let r1: ListNode | null = n1;
while(r1) {
  console.log(r1.val);
  r1 = r1.next
}
console.log(removeNthFromEnd(n1, 2));
r1 = n1;
while(r1) {
  console.log(r1.val);
  r1 = r1.next
}
n1 = new ListNode(1);
console.log(removeNthFromEnd(n1, 1));
n2 = new ListNode(2);
n1 = new ListNode(1, n2);
console.log(removeNthFromEnd(n1, 1));
