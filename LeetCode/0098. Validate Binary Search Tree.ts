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

function isValidBST(root: TreeNode | null): boolean {
  let isValid = true;
  let prev = -Infinity;

  function dfs(root: TreeNode | null) {
    if (!root) {
      return;
    }
    dfs(root.left);
    if (prev > -Infinity && prev >= root.val) {
      isValid = false;
    }
    prev = root.val;
    dfs(root.right);
  } // dfs()

  dfs(root);
  return isValid;
} // isValidBST()

let n3 = new TreeNode(3);
let n2 = new TreeNode(1);
let n1 = new TreeNode(2, n2, n3);
console.log(isValidBST(n1));
const n5 = new TreeNode(6);
const n4 = new TreeNode(3);
n3 = new TreeNode(4, n4, n5);
n2 = new TreeNode(1);
n1 = new TreeNode(5, n2, n3);
console.log(isValidBST(n1));
