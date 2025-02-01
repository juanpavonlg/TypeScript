export const josephus = <T>(items: T[], k: number): T[] => {
  const ans: T[] = [];
  let index = 0;
  while (items.length) {
    index = (index + k - 1) % items.length;
    ans.push(items.splice(index, 1)[0]);
  }
  return ans;
}; // josephus()

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));
