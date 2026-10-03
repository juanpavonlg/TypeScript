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

function averageOfLevels(root: TreeNode | null): number[] {
  const ans: number[] = [];
  if (!root) {
    return ans;
  }
  const queue: TreeNode[] = [root];
  let index = 0;
  let prevLen = 0;
  let currLen = queue.length;
  while (index < queue.length) {
    let sum = 0;
    const n = currLen - prevLen;
    for (let i = 0; i < n; i++) {
      const node = queue[index++];
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    prevLen = currLen;
    currLen = queue.length;
    ans.push(sum / n);
  }
  return ans;
} // averageOfLevels()

const n5 = new TreeNode(7);
const n4 = new TreeNode(15);
let n3 = new TreeNode(20, n4, n5);
let n2 = new TreeNode(9);
const n1 = new TreeNode(3, n2, n3);
console.log(averageOfLevels(n1));
n3 = new TreeNode(20);
n2 = new TreeNode(9, n4, n5);
console.log(averageOfLevels(n1));
