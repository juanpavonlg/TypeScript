function maxDepth(s: string): number {
  let pairs = 0;
  let max = 0;
  for (const ch of s) {
    if (ch === "[") {
      pairs++;
      max = Math.max(pairs, max);
    } else {
      pairs--;
      if (pairs < 0) {
        return -1;
      }
    }
  }
  return pairs === 0 ? max : -1;
} // maxDepth()

console.log(maxDepth("[]"));
console.log(maxDepth("[[]]"));
console.log(maxDepth("[][]"));
console.log(maxDepth("[[][]]"));
console.log(maxDepth("[[[]]]"));
console.log(maxDepth("[][[]][]"));
console.log(maxDepth("]["));
console.log(maxDepth("[[["));
console.log(maxDepth("[]]]"));
console.log(maxDepth("[][]["));
