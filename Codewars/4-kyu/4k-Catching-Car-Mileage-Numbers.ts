export function isInteresting(n: number, awesomePhrases: number[]): number {
  return isCool(n, awesomePhrases) ? 2 : isCool(n + 1, awesomePhrases) || isCool(n + 2, awesomePhrases) ? 1 : 0;
} // isInteresting()

function isCool(n: number, awesomePhrases: number[]): boolean {
  const num = [...n.toString()].map(Number);
  return (
    num.length > 2 &&
    (num.slice(1).every((e) => e === 0) ||
      num.every((e) => e === num[0]) ||
      num.slice(1).every((e, i) => e === (num[i] + 1) % 10) ||
      num.slice(1).every((e, i) => e === num[i] - 1) ||
      isPalindrome(num) ||
      awesomePhrases.includes(n))
  );
} // isCool()

function isPalindrome(num: number[]): boolean {
  const lim = num.length / 2;
  for (let i = 0; i < lim; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }
  return true;
} // isPalindrome()

console.log(isInteresting(3, [1337, 256]));
console.log(isInteresting(3236, [1337, 256]));
console.log(isInteresting(11207, []));
console.log(isInteresting(11208, []));
console.log(isInteresting(11209, []));
console.log(isInteresting(11210, []));
console.log(isInteresting(11211, []));
console.log(isInteresting(1335, [1337, 256]));
console.log(isInteresting(1336, [1337, 256]));
console.log(isInteresting(1337, [1337, 256]));
