function searchPhone(phones: number[], target: number): number {
  let [l, r] = [0, phones.length - 1];
  while (l <= r) {
    const m = ((l + r) / 2) | 0;
    if (phones[m] === target) {
      return m;
    } else if (phones[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
} // searchPhone()

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020];
console.log(searchPhone(phones, 1008));
console.log(searchPhone(phones, 1001));
console.log(searchPhone(phones, 1020));
console.log(searchPhone(phones, 9999));
