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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function hasSum(root: TreeNode | null, sum: number): boolean {
    if (!root) {
      return false;
    }
    sum += root.val;
    if (!root.left && !root.right) {
      return sum === targetSum;
    }
    return hasSum(root.left, sum) || hasSum(root.right, sum);
  } // getHeight()

  return hasSum(root, 0);
} // hasPathSum()

const n9 = new TreeNode(1);
const n8 = new TreeNode(2);
const n7 = new TreeNode(7);
const n6 = new TreeNode(4, null, n9);
const n5 = new TreeNode(13);
const n4 = new TreeNode(11, n7, n8);
let n3 = new TreeNode(8, n5, n6);
let n2 = new TreeNode(4, n4);
let n1 = new TreeNode(5, n2, n3);
console.log(hasPathSum(n1, 22));
n3 = new TreeNode(3);
n2 = new TreeNode(2);
n1 = new TreeNode(1, n2, n3);
console.log(hasPathSum(n1, 5));
