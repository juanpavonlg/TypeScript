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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const ans: number[][] = [];
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    const level: number[] = [];
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      level.push(node!.val);
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
    ans.push(level);
  }
  return ans;
} // levelOrder()

const n5 = new TreeNode(7);
const n4 = new TreeNode(15);
const n3 = new TreeNode(20, n4, n5);
const n2 = new TreeNode(9);
let n1 = new TreeNode(3, n2, n3);
console.log(levelOrder(n1));
n1 = new TreeNode(1);
console.log(levelOrder(n1));
console.log(levelOrder(null));
