export const listSquared = (m: number, n: number): number[][] => {
  const res: [number, number][] = [];
  for (let i = m; i <= n; i++) {
    let divs: number[] = [];
    let div = 1;
    while (div * div <= i) {
      if (i % div === 0) {
        divs = divs.concat([div, i / div]);
      }
      div++;
    }
    const sum = [...new Set(divs)].reduce((a, e) => a + e ** 2, 0);
    if (Number.isInteger(Math.sqrt(sum))) {
      res.push([i, sum]);
    }
  }
  return res;
}; // listSquared()
