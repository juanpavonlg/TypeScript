export const towerBuilder = (nFloors: number): string[] => {
  const ans: string[] = [];
  for (let i = 0; i < nFloors; i++) {
    const pad = " ".repeat(nFloors - 1 - i);
    ans.push(`${pad}${"*".repeat(2 * i + 1)}${pad}`);
  }
  return ans;
} // towerBuilder()

console.log(towerBuilder(6));
