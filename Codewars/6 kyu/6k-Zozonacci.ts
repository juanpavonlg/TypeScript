export function zozonacci(pattern: string[], length: number): number[] {
  if (!pattern.length) {
    return [];
  }
  const ans = (pattern[0] !== "pad" ? [0, 0, 0, 1] : [0, 1, 0, 0]).slice(0, length);
  const seq: {[key: string]: Function} = {
    "fib": fib,
    "jac": jac,
    "pad": pad,
    "pel": pel,
    "tet": tet,
    "tri": tri
  };
  for (let i = 0; i + 4 < length; i++) {
    ans.push(seq[pattern[i % pattern.length]](ans));
  }
  return ans;
} // zozonacci()

function fib(zoz: number[]): number {
  return zoz[zoz.length - 1] + zoz[zoz.length - 2];
} // fib()

function jac(zoz: number[]): number {
  return zoz[zoz.length - 1] + 2 * zoz[zoz.length - 2];
} // jac()

function pad(zoz: number[]): number {
  return zoz[zoz.length - 2] + zoz[zoz.length - 3];
} // pad()

function pel(zoz: number[]): number {
  return 2 * zoz[zoz.length - 1] + zoz[zoz.length - 2];
} // pel()

function tet(zoz: number[]): number {
  return zoz[zoz.length - 1] + zoz[zoz.length - 2] + zoz[zoz.length - 3] + zoz[zoz.length - 4];
} // tet()

function tri(zoz: number[]): number {
  return zoz[zoz.length - 1] + zoz[zoz.length - 2] + zoz[zoz.length - 3];
} // tri()

console.log(zozonacci(["fib"], 10));
console.log(zozonacci(["fib", "tri"], 10));
console.log(zozonacci(["fib", "pel", "tri"], 10));
