type Gifts = number[];
type MaxWeight = number;
type Result = number | null;

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  let sleighs = 0;
  let currWeight = 0;
  for (const gift of gifts) {
    if (gift > maxWeight) {
      return null;
    }
    if (currWeight + gift <= maxWeight) {
      currWeight += gift;
    } else {
      currWeight = gift;
      sleighs++;
    }
  }
  if (currWeight > 0) {
    sleighs++;
  }
  return sleighs;
} // packGifts()

console.log(packGifts([2, 3, 4, 1], 5));
console.log(packGifts([3, 3, 2, 1], 3));
console.log(packGifts([1, 1, 1, 1], 2));
console.log(packGifts([5, 6, 1], 5));
console.log(packGifts([], 10));
