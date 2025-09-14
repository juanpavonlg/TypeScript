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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
} // maxDepth()

const n5 = new TreeNode(7);
const n4 = new TreeNode(15);
const n3 = new TreeNode(20, n4, n5);
let n2 = new TreeNode(9);
let n1 = new TreeNode(3, n2, n3);
console.log(maxDepth(n1));
n2 = new TreeNode(2);
n1 = new TreeNode(1, null, n2);
console.log(maxDepth(n1));
