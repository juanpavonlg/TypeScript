class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;
  let node: ListNode | null;
  do {
    node = null;
    let index = -1;
    for (const list of lists) {
      if (list) {
        if (node === null || list.val < node.val) {
          node = list;
          index = lists.indexOf(list);
        }
      }
    }
    if (node) {
      if (tail) {
        tail.next = node;
        tail = node;
      } else {
        head = node;
        tail = node;
      }
      lists[index] = lists[index]?.next ?? null;
    }
  } while (node);
  return head;
} // mergeKLists()

const n13 = new ListNode(5);
const n12 = new ListNode(4, n13);
const n11 = new ListNode(1, n12);
const n23 = new ListNode(4);
const n22 = new ListNode(3, n23);
const n21 = new ListNode(1, n22);
const n32 = new ListNode(6);
const n31 = new ListNode(2, n32);
let r1 = mergeKLists([n11, n21, n31]);
console.log(r1);
while (r1) {
  console.log(r1.val);
  r1 = r1.next;
}
r1 = mergeKLists([null]);
console.log(r1);
r1 = mergeKLists([]);
console.log(r1);
