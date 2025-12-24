function elfBattle(elf1: string, elf2: string): number {
  const damage: { [move: string]: [number, number] } = {
    AA: [1, 1],
    AB: [0, 0],
    AF: [1, 2],
    BA: [0, 0],
    BB: [0, 0],
    BF: [0, 2],
    FA: [2, 1],
    FB: [2, 0],
    FF: [2, 2],
  };
  let [hp1, hp2] = [3, 3];
  const LIM = Math.min(elf1.length, elf2.length);
  for (let i = 0; i < LIM && hp1 > 0 && hp2 > 0; i++) {
    const [dmg1, dmg2] = damage[elf1[i] + elf2[i]];
    hp1 -= dmg2;
    hp2 -= dmg1;
  }
  if ((hp1 <= 0 && hp2 <= 0) || hp1 === hp2) {
    return 0;
  }
  if (hp1 > hp2) {
    return 1;
  }
  return 2;
} // elfBattle()

console.log(elfBattle("A", "B"));
console.log(elfBattle("F", "B"));
console.log(elfBattle("AAB", "BBA"));
console.log(elfBattle("AFA", "BBA"));
console.log(elfBattle("AFAB", "BBAF"));
console.log(elfBattle("AA", "FF"));
