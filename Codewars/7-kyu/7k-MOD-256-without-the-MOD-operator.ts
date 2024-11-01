export function mod256WithoutMod(n: number): number{
  return Math.abs(n) < 256 ? n : mod256WithoutMod(n > 0 ? n - 256 : n + 256);
} // mod256WithoutMod()

console.log(mod256WithoutMod(254));
console.log(mod256WithoutMod(256));
console.log(mod256WithoutMod(258));
console.log(mod256WithoutMod(-258));
console.log(mod256WithoutMod(-520));
  