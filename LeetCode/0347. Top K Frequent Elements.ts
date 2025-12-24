function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const num of nums) {
    if (freq.has(num)) {
      freq.set(num, freq.get(num)! + 1);
    } else {
      freq.set(num, 1);
    }
  }
  const keys = Array.from(freq.keys());
  keys.sort((a, b) => freq.get(b)! - freq.get(a)!);
  return keys.slice(0, k);
} // topKFrequent()

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
