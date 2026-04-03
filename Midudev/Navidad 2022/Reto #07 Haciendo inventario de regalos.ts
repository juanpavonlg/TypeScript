function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    (e) => +a1.includes(e) + +a2.includes(e) + +a3.includes(e) === 1,
  );
} // getGiftsToRefill()

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];
console.log(getGiftsToRefill(a1, a2, a3));
