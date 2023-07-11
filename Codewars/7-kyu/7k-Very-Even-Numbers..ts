export function isVeryEvenNumber(n: number): boolean {
  let digits = n.toString();
  while (digits.length > 1) {
    digits = digits.split("").reduce((a, e) => a + +e, 0).toString();
  }
  return !(+digits % 2);
} // isVeryEvenNumber()

console.log(isVeryEvenNumber(222));
console.log(isVeryEvenNumber(88));
