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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
} // invertTree()

const n7 = new TreeNode(9);
const n6 = new TreeNode(6);
let n3 = new TreeNode(7, n6, n7);
const n5 = new TreeNode(3);
const n4 = new TreeNode(1);
let n2 = new TreeNode(2, n4, n5);
let n1 = new TreeNode(4, n2, n3);
invertTree(n1);
console.log(n1);
n3 = new TreeNode(3);
n2 = new TreeNode(1);
n1 = new TreeNode(2, n2, n3);
invertTree(n1);
console.log(n1);
console.log(invertTree(null));
n2 = new TreeNode(2);
n1 = new TreeNode(1, null, n2);
invertTree(n1);
console.log(n1);
