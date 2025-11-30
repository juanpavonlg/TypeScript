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

function getMinimumDifference(root: TreeNode | null): number {
  let prev = -1;
  let min = Infinity;

  function dfs(root: TreeNode | null) {
    if (!root) {
      return;
    }
    dfs(root.left);
    if (prev > -1) {
      min = Math.min(root.val - prev, min);
    }
    prev = root.val;
    dfs(root.right);
  } // dfs()

  dfs(root);
  return min;
} // getMinimumDifference()

let n5 = new TreeNode(3);
let n4 = new TreeNode(1);
let n3 = new TreeNode(6);
let n2 = new TreeNode(2, n4, n5);
let n1 = new TreeNode(4, n2, n3);
console.log(getMinimumDifference(n1));
n5 = new TreeNode(49);
n4 = new TreeNode(12);
n3 = new TreeNode(48, n4, n5);
n2 = new TreeNode(0);
n1 = new TreeNode(1, n2, n3);
console.log(getMinimumDifference(n1));
