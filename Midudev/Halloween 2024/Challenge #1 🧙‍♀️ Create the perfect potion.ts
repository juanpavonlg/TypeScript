function createMagicPotion(potions: number[], target: number) {
  const used: { [key: number]: number } = {};
  for (let i = 0; i < potions.length; i++) {
    if (used[potions[i]] !== undefined) {
      return [used[potions[i]], i];
    }
    used[target - potions[i]] = i;
  }
  return undefined;
} // createMagicPotion()

console.log(createMagicPotion([4, 5, 6, 2], 8));
console.log(createMagicPotion([1, 2, 3, 4], 9));
console.log(createMagicPotion([1, 2, 3, 4], 5));
