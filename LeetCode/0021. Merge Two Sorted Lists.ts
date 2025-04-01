class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } // constructor()
} // ListNode

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // let [head, tail]: [ListNode | null, ListNode | null] = [null, null];
  // while (list1 || list2) {
  //   let node: ListNode | null = null;
  //   if (list1 && list2) {
  //     if (list1.val <= list2.val) {
  //       node = list1;
  //       list1 = list1.next;
  //     } else {
  //       node = list2;
  //       list2 = list2.next;
  //     } 
  //   } else if (list1) {
  //     node = list1;
  //     list1 = list1.next;
  //   } else if (list2) {
  //     node = list2;
  //     list2 = list2.next;
  //   }
  //   if (tail) {
  //     tail.next = node;
  //     tail = node;
  //   } else {
  //     tail = node;
  //     head = node;
  //   }
  // }
  // return head;
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
} // mergeTwoLists()

const n13 = new ListNode(4);
const n12 = new ListNode(2, n13);
let n11: ListNode | null = new ListNode(1, n12);
const n23 = new ListNode(4);
const n22 = new ListNode(3, n23);
let n21: ListNode | null = new ListNode(1, n22);
let r1 = mergeTwoLists(n11, n21);
console.log(r1);
while (r1) {
  console.log(r1.val);
  r1 = r1.next;
}
n11 = null;
n21 = null;
r1 = mergeTwoLists(n11, n21);
console.log(r1);
n21 = new ListNode(0);
r1 = mergeTwoLists(n11, n21);
console.log(r1);
