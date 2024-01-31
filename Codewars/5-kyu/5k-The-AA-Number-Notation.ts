export function formatNumber(x: number): string {
  let div = 1;
  let exp = 0;
  while (Math.abs(x) / div >= 1000) {
    div = +(1000 * div).toPrecision();    
    exp++;
  }
  return `${toPrecision3(x / div)}${getUnits(exp)}`;
} // formatNumber()

function getUnits(exp: number): string {
  const units = ["", "K", "M", "B", "T"];
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  if (exp < 5) {
    return units[exp];
  }
  exp -= 5;
  return `${alpha[Math.floor(exp / 26)]}${alpha[exp % 26]}`;
} // getUnits()

function toPrecision3(n: number): number {
  const str = (Math.sign(n) * Math.floor(100 * Math.abs(n)) / 100).toString();  
  let c = 0;
  let res = "";
  for (let i = 0; i < str.length && c < 3; i++) {
    res += str[i];
    if (["-", "."].includes(str[i])) {
      continue;
    }
    c++;
  }
  return +res;
} // toPrecision3()

console.log(formatNumber(1234));
console.log(formatNumber(-123456789));
console.log(formatNumber(0.009));
console.log(formatNumber(1000000000000000000));
console.log(formatNumber(-0.9999));
console.log(formatNumber(999999999999999));
console.log(formatNumber(1e300));
console.log(formatNumber(8.745088402063762e+134));
console.log(formatNumber(-8.175723160575941e+241));
console.log(formatNumber(1.4040975474199917e+265));
console.log(formatNumber(1.23e-10));
