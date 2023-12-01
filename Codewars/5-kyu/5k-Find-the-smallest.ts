export function smallest(n: number): number[] {
  const digits = n.toString().split("");
  let ans = [n, 0, 0];
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      const copy = [...digits];
      copy.splice(i, 1);
      const newN = +[...copy.slice(0, j), digits[i], ...copy.slice(j)].join("");
      if (newN < ans[0]) {
        ans = [newN, i, j];
      }
    }
  }
  return ans;
} // smallest()

console.log(smallest(261235));
console.log(smallest(209917));
console.log(smallest(1000000));
console.log(smallest(285365));
console.log(smallest(269045));
console.log(smallest(296837));
console.log(smallest(935855753));
console.log(smallest(688002));
console.log(smallest(302898));
