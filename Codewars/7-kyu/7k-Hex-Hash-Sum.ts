export function hexHash(code: string): number {
  return code.replace(/./g, x => x.charCodeAt(0).toString(16).replace(/[\D]/g, "")).split("").reduce((a, e) => a + +e, 0);
} // hexHash()

console.log(hexHash("Yo"));
console.log(hexHash("Hello, World!"));
console.log(hexHash(""));
