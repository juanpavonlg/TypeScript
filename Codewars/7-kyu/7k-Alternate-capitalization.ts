export function capitalize(s: string) {
  let even = "";
  let odd = "";
  for (let i = 0; i < s.length; i++) {
    even += i % 2 ? s[i] : s[i].toUpperCase();
    odd += i % 2 ? s[i].toUpperCase() : s[i];
  }
  return [even, odd];
} // capitalize()

console.log(capitalize("codewars"));
