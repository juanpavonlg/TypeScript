function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const n = stones.pop()! - stones.pop()!;
    if (n) {
      stones.push(n);
    }
  }
  return stones.length ? stones[0] : 0;
} // lastStoneWeight()

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
