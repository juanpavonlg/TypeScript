export function mean(lst: string[]): [number, string] {
  let str = "";
  let sum = 0;
  for (const e of lst) {
    if (isNaN(Number(e))) {
      str += e;
    } else {
      sum += parseInt(e);
    }
  }
  return [sum / 10, str];
} // mean()

console.log(mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']));
