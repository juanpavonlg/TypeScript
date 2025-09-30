class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  } // constructor()
} // TreeNode

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
} // isSameTree()

let qn3 = new TreeNode(3);
let qn2 = new TreeNode(2);
let qn1 = new TreeNode(1, qn2, qn3);
let pn3 = new TreeNode(3);
let pn2 = new TreeNode(2);
let pn1 = new TreeNode(1, pn2, pn3);
console.log(isSameTree(pn1, qn1));
qn2 = new TreeNode(2);
qn1 = new TreeNode(1, null, qn2);
pn2 = new TreeNode(2);
pn1 = new TreeNode(1, pn2);
console.log(isSameTree(pn1, qn1));
qn3 = new TreeNode(2);
qn2 = new TreeNode(1);
qn1 = new TreeNode(1, qn2, qn3);
pn3 = new TreeNode(1);
pn2 = new TreeNode(2);
pn1 = new TreeNode(1, pn2, pn3);
console.log(isSameTree(pn1, qn1));
