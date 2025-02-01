export function tailSwap(arr: [string, string]): [string, string] {
  const fst = arr[0].match(/(.+):(.+)/);
  const sec = arr[1].match(/(.+):(.+)/);
  return [`${fst![1]}:${sec![2]}`, `${sec![1]}:${fst![2]}`];
} // tailSwap()

console.log(tailSwap(["abc:123", "cde:456"]));
console.log(tailSwap(["(:)", "[:]"]));
