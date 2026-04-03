function getCompleted(part: string, total: string) {
  const getSeconds = (time: string) => {
    return time.split(":").reduce((a, e, i) => a + +e * 60 ** (2 - i), 0);
  }; // getSeconds()

  const gcd = (a: number, b: number): number => {
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
    // return a ? gcd(b % a, a) : b;
  }; // gcd()

  const pSecs = getSeconds(part);
  const tSecs = getSeconds(total);
  const div = gcd(pSecs, tSecs);
  return `${pSecs / div}/${tSecs / div}`;
} // getCompleted()

console.log(getCompleted("01:00:00", "03:00:00"));
console.log(getCompleted("02:00:00", "04:00:00"));
console.log(getCompleted("01:00:00", "01:00:00"));
console.log(getCompleted("00:10:00", "01:00:00"));
console.log(getCompleted("01:10:10", "03:30:30"));
console.log(getCompleted("03:30:30", "05:50:50"));
