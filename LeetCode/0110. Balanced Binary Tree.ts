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

function isBalanced(root: TreeNode | null): boolean {
  let balanced = true;

  function getHeight(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    const leftHeight = getHeight(root.left);
    if (!balanced) {
      return 0;
    }
    const rightHeight = getHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      balanced = false;
      return 0;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  } // getHeight()

  getHeight(root);
  return balanced;
} // isBalanced()

let n5 = new TreeNode(7);
let n4 = new TreeNode(15);
let n3 = new TreeNode(20, n4, n5);
let n2 = new TreeNode(9);
let n1 = new TreeNode(3, n2, n3);
console.log(isBalanced(n1));
const n7 = new TreeNode(4);
const n6 = new TreeNode(4);
n5 = new TreeNode(3);
n4 = new TreeNode(3, n6, n7);
n3 = new TreeNode(2);
n2 = new TreeNode(2, n4, n5);
n1 = new TreeNode(1, n2, n3);
console.log(isBalanced(n1));
console.log(isBalanced(null));
