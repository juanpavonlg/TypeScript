export function lru(n: number, referencesList: number[]): number[] {
  const memory: number[] = [];
  const oldest: number[] = [];
  referencesList.forEach((page) => {
    if (memory.includes(page)) {
      oldest.push(...oldest.splice(oldest.indexOf(page), 1));
    } else {
      if (memory.length === n) {
        memory[memory.indexOf(oldest.shift()!)] = page;
      } else {
        memory.push(page);
      }
      oldest.push(page);
    }
  });
  return Array.from({length: n}, (_, i) => memory[i] ?? -1);
} // lru()

console.log(lru(3, [1, 2, 3, 4, 3, 2, 5]));
console.log(lru(5, []));
