export function mixbonacci(pattern: string[], length: number): number[] {
  if (pattern.length === 0) {
    return [];
  }
  const ans: number[] = [];
  const seq: { [key: string]: Generator<number, void, unknown> } = {
    fib: fibonacci(),
    pad: padovan(),
    jac: jacobstahl(),
    pel: pell(),
    tri: tribonacci(),
    tet: tetranacci(),
  };
  for (let i = 0; i < length; i++) {
    ans.push(seq[pattern[i % pattern.length]].next().value!);
  }
  return ans;
} // mixbonacci()

function* fibonacci() {
  const fib = [0, 1];
  let i = 0;
  while (true) {
    if (i > 1) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    yield fib[i];
    i++;
  }
} // fibonacci()

function* padovan() {
  const pad = [1, 0, 0];
  let j = 0;
  while (true) {
    if (j > 2) {
      pad[j] = pad[j - 2] + pad[j - 3];
    }
    yield pad[j];
    j++;
  }
} // padovan()

function* jacobstahl() {
  const jac = [0, 1];
  let k = 0;
  while (true) {
    if (k > 1) {
      jac[k] = jac[k - 1] + 2 * jac[k - 2];
    }
    yield jac[k];
    k++;
  }
} // jacobstahl()

function* pell() {
  const pel = [0, 1];
  let i = 0;
  while (true) {
    if (i > 1) {
      pel[i] = 2 * pel[i - 1] + pel[i - 2];
    }
    yield pel[i];
    i++;
  }
} // pell()

function* tribonacci() {
  const tri = [0, 0, 1];
  let j = 0;
  while (true) {
    if (j > 2) {
      tri[j] = tri[j - 1] + tri[j - 2] + tri[j - 3];
    }
    yield tri[j];
    j++;
  }
} // tribonacci()

function* tetranacci() {
  const tet = [0, 0, 0, 1];
  let k = 0;
  while (true) {
    if (k > 3) {
      tet[k] = tet[k - 1] + tet[k - 2] + tet[k - 3] + tet[k - 4];
    }
    yield tet[k];
    k++;
  }
} // tetranacci()

console.log(mixbonacci(["fib", "pad", "pel"], 6));
console.log(mixbonacci(["fib", "fib", "pel"], 6));
console.log(mixbonacci([], 10));
