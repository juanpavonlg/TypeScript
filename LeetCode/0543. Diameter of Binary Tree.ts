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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function getHeight(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    diameter = Math.max(leftHeight + rightHeight, diameter);
    return 1 + Math.max(leftHeight, rightHeight);
  } // getHeight()

  getHeight(root);
  return diameter;
} // diameterOfBinaryTree()

const n5 = new TreeNode(5);
const n4 = new TreeNode(4);
const n3 = new TreeNode(3);
let n2 = new TreeNode(2, n4, n5);
let n1 = new TreeNode(3, n2, n3);
console.log(diameterOfBinaryTree(n1));
n2 = new TreeNode(2);
n1 = new TreeNode(3, n2);
console.log(diameterOfBinaryTree(n1));
