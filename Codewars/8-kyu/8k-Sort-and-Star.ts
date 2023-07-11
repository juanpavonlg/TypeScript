export function twoSort(s: string[]): string {
  return s.sort()[0].split("").join("***");
} // twoSort()

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
