export function clock(n: number, referenceList: number[]): number[] {
  const pages: number[] = new Array(n).fill(-1);
  const rBits: number[] = new Array(n).fill(0);
  let it = 0;
  referenceList.forEach((page) => {
    if (pages.includes(page)) {
      rBits[pages.indexOf(page)] = 1;
    } else {
      if (pages[it] === -1) {
        pages[it] = page;
      } else {
        while (rBits[it] === 1) {
          rBits[it] = 0;
          it = ++it % n;
        }
        pages[it] = page;
      }
      it = ++it % n;
    }
  });
  return pages;
} // clock()

console.log(clock(3, [6, 3, 6, 3, 2, 5, 1, 6]));
