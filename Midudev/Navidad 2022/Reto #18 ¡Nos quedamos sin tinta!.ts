function dryNumber(dry: number, numbers: number) {
  return Array.from({ length: numbers }, (_, i) => i + 1).filter((e) =>
    `${e}`.includes(`${dry}`),
  );
} // dryNumber()

console.log(dryNumber(1, 15));
console.log(dryNumber(2, 20));
