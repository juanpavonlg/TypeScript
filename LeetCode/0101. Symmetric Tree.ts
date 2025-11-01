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

function isSymmetric(root: TreeNode | null): boolean {
  function isSame(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    return isSame(left.left, right.right) && isSame(left.right, right.left);
  } // isSame()

  return isSame(root, root);
} // isSymmetric()

const n7 = new TreeNode(3);
const n6 = new TreeNode(4);
let n5 = new TreeNode(4);
let n4 = new TreeNode(3);
let n3 = new TreeNode(2, n6, n7);
let n2 = new TreeNode(2, n4, n5);
let n1 = new TreeNode(1, n2, n3);
console.log(isSymmetric(n1));
n5 = new TreeNode(3);
n4 = new TreeNode(3);
n3 = new TreeNode(2, null, n5);
n2 = new TreeNode(2, null, n4);
n1 = new TreeNode(1, n2, n3);
console.log(isSymmetric(n1));
