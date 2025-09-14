export const evenOrOdd = new Proxy(
  function (n: number): String {
    return new String(n % 2 ? "Odd" : "Even");
  },
  {
    construct: (target, [n]) => target(n),
    get: (target, p: string) => {
      const r = target(+p);
      const res = function () {
        return r;
      };
      res.valueOf = () => r.valueOf();
      return res;
    },
  }
); // evenOrOdd()

console.log(evenOrOdd(2));
console.log(evenOrOdd[2]);
console.log(new evenOrOdd(2));
console.log(new evenOrOdd[2]);
console.log(evenOrOdd(7));
console.log(evenOrOdd[7]);
console.log(new evenOrOdd(7));
console.log(new evenOrOdd[7]);
