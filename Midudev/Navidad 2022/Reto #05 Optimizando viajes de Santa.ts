function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number,
) {
  let max = 0;

  function backtrack(index: number, sum: number, used: number) {
    if (sum > maxGifts || used > maxCities) {
      return;
    }
    max = Math.max(sum, max);
    if (index === giftsCities.length) {
      return;
    }
    backtrack(index + 1, sum + giftsCities[index], used + 1);
    backtrack(index + 1, sum, used);
  } // backtrack()

  backtrack(0, 0, 0);
  return max;
} // getMaxGifts()

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;
console.log(getMaxGifts(giftsCities, maxGifts, maxCities));
console.log(getMaxGifts([50], 15, 1));
console.log(getMaxGifts([50], 100, 1));
console.log(getMaxGifts([50, 70], 100, 1));
console.log(getMaxGifts([50, 70, 30], 100, 2));
console.log(getMaxGifts([50, 70, 30], 100, 3));
console.log(getMaxGifts([50, 70, 30], 100, 4));
