function organizeGifts(gifts: string) {
  let ans = "";
  for (const gift of gifts.match(/\d+[a-z]/g) ?? []) {
    let num = +gift.slice(0, -1);
    const type = gift.at(-1)!;
    const pallets = (num / 50) | 0;
    num -= 50 * pallets;
    const boxes = (num / 10) | 0;
    num -= 10 * boxes;
    ans += `[${type}]`.repeat(pallets);
    ans += `{${type}}`.repeat(boxes);
    ans += num ? `(${type.repeat(num)})` : "";
  }
  return ans;
} // organizeGifts()

const result1 = organizeGifts("76a11b");
console.log(result1);
