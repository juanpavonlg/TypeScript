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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function isSameTree(s: TreeNode | null, t: TreeNode | null): boolean {
    if (!s && !t) {
      return true;
    }
    if (!s || !t) {
      return false;
    }
    if (s.val !== t.val) {
      return false;
    }
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
  } // isSameTree()

  function hasSubtree(root: TreeNode | null): boolean {
    if (!root) {
      return false;
    }
    if (isSameTree(root, subRoot)) {
      return true;
    }
    return hasSubtree(root.left) || hasSubtree(root.right);
  } // hasSubtree()

  return hasSubtree(root);
} // isSubtree()

let n15 = new TreeNode(2);
let n14 = new TreeNode(1);
let n13 = new TreeNode(5);
let n12 = new TreeNode(4, n14, n15);
let n11 = new TreeNode(3, n12, n13);
const n23 = new TreeNode(2);
const n22 = new TreeNode(1);
const n21 = new TreeNode(4, n22, n23);
console.log(isSubtree(n11, n21));
const n16 = new TreeNode(0);
n15 = new TreeNode(2, n16);
n14 = new TreeNode(1);
n13 = new TreeNode(5);
n12 = new TreeNode(4, n14, n15);
n11 = new TreeNode(3, n12, n13);
console.log(isSubtree(n11, n21));
