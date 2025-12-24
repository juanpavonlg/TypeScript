function filterGifts(gifts: string[]): string[] {
  return gifts.filter((e) => /^[^#]*$/.test(e));
} // filterGifts()

console.log(filterGifts(["car", "doll#arm", "ball", "#train"]));
console.log(filterGifts(["#broken", "#rusty"]));
console.log(filterGifts([]));
