function maxGifts(houses: number[]) {
  let [prev, curr] = [0, 0];
  for (const gifts of houses) {
    [prev, curr] = [curr, Math.max(gifts + prev, curr)];
  }
  return curr;
} // maxGifts()

console.log(maxGifts([2, 4, 2]));
console.log(maxGifts([5, 1, 1, 5]));
console.log(maxGifts([4, 1, 1, 4, 2, 1]));
console.log(maxGifts([1, 3, 1, 3, 100]));
