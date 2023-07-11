export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!(a1 && a2)) {
    return false;
  }
  a1 = a1 ? a1.sort((a, b) => a - b) : [];
  a2 = a2 ? a2.sort((a, b) =>  a - b) : [];
  for (let i = 0; i < a1.length; i++) {
    if (a1[i]**2 !== a2[i]) {
      return false;
    }
  }
  return true;
} // comp()

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(comp([], null));
