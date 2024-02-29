class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;
  let carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    if (tail) {
      tail.next = node;
      tail = node;
    } else {
      head = node;
      tail = head;
    }
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }
  return head;
} // addTwoNumbers()

let l13 = new ListNode(3);
let l12 = new ListNode(4, l13);
let l11 = new ListNode(2, l12);
let l23 = new ListNode(4);
let l22 = new ListNode(6, l23);
let l21 = new ListNode(5, l22);
console.log(addTwoNumbers(l11, l21));
l11 = new ListNode();
l21 = new ListNode();
console.log(addTwoNumbers(l11, l21));
let l17 = new ListNode(9);
let l16 = new ListNode(9, l17);
let l15 = new ListNode(9, l16);
let l14 = new ListNode(9, l15);
l13 = new ListNode(9, l14);
l12 = new ListNode(9, l13);
l11 = new ListNode(9, l12);
let l24 = new ListNode(9);
l23 = new ListNode(9, l24);
l22 = new ListNode(9, l23);
l21 = new ListNode(9, l22);
console.log(addTwoNumbers(l11, l21));
let r3 = addTwoNumbers(l11, l21);
while (r3) {
  console.log(r3.val);
  r3 = r3.next;
}
