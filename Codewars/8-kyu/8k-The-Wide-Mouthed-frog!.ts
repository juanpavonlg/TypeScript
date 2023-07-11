export function mouthSize(animal: string): string {
  return /alligator/i.test(animal) ? "small" : "wide";
} // mouthSize()

console.log(mouthSize("toucan"));
console.log(mouthSize("alligator"));
