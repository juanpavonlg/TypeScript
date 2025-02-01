export function playPass(s: string, n: number): string {
  s = s.replace(/[a-z]/gi, (e, i) => String.fromCharCode(65 + (e.toUpperCase().charCodeAt(0) - 65 + n) % 26));
  s = s.replace(/[A-Z]/g, (e, i) => i % 2 ? e.toLowerCase() : e);
  s = s.replace(/\d/g, (e) => `${9 - +e}`);
  return [...s].reverse().join("");
} // playPass()

console.log(playPass("BORN IN 2015!", 1));
