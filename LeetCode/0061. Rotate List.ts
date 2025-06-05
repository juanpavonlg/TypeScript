class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let size = head ? 1 : 0;
  let pointer = head;
  while (pointer && pointer.next) {
    pointer = pointer.next;
    size++;
  }
  k = size ? k % size : 0; 
  while (k--) {
    let ahead = head?.next ?? null;
    let behind = head;
    while (ahead && ahead.next) {
      ahead = ahead.next;
      behind = behind!.next;
    }
    if (ahead) {
      ahead.next = head;
      head = ahead;
      behind!.next = null;
    }
  }
  return head;
} // rotateRight()

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
let n3 = new ListNode(3, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, n2);
console.log(rotateRight(n1, 2));
n3 = new ListNode(2);
n2 = new ListNode(1, n3);
n1 = new ListNode(0, n2);
console.log(rotateRight(n1, 4));
