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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let lca = root;
  while (lca) {
    if (p!.val < lca.val && q!.val < lca.val) {
      lca = lca.left;
    } else if (p!.val > lca.val && q!.val > lca.val) {
      lca = lca.right;
    } else {
      return lca;
    }
  }
  return null;
} // lowestCommonAncestor()

const n9 = new TreeNode(5);
const n8 = new TreeNode(3);
const n7 = new TreeNode(9);
const n6 = new TreeNode(7);
const n5 = new TreeNode(4, n8, n9);
const n4 = new TreeNode(0);
const n3 = new TreeNode(8, n6, n7);
let n2 = new TreeNode(2, n4, n5);
let n1 = new TreeNode(6, n2, n3);
console.log(lowestCommonAncestor(n1, n2, n3));
console.log(lowestCommonAncestor(n1, n2, n5));
n2 = new TreeNode(1);
n1 = new TreeNode(2, n2);
console.log(lowestCommonAncestor(n1, n2, n1));
