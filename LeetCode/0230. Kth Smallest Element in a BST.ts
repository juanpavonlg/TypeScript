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

function kthSmallest(root: TreeNode | null, k: number): number {
  let ans = -1;

  function dfs(root: TreeNode | null) {
    if (!root) {
      return;
    }
    if (k > 0) {
      dfs(root.left);
      if (k === 1) {
        ans = root.val;
      }
      k--;
      dfs(root.right);
    }
  } // dfs()

  dfs(root);
  return ans;
} // kthSmallest()

let n4 = new TreeNode(2);
let n3 = new TreeNode(4);
let n2 = new TreeNode(1, null, n4);
let n1 = new TreeNode(3, n2, n3);
console.log(kthSmallest(n1, 1));
const n6 = new TreeNode(1);
const n5 = new TreeNode(4);
n4 = new TreeNode(2, n6);
n3 = new TreeNode(6);
n2 = new TreeNode(3, n4, n5);
n1 = new TreeNode(5, n2, n3);
console.log(kthSmallest(n1, 3));
