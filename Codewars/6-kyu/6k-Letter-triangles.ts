export function triangle(row: string): string {
  let curr = row.split("");
  while (curr.length > 1) {
    const next: string[] = [];
    for (let i = 0; i < curr.length - 1; i++) {
      next.push(String.fromCharCode((curr[i].charCodeAt(0) + curr[i + 1].charCodeAt(0) - 193) % 26 + 97));
    }
    curr = next;
  }
  return curr.join("");
} // triangle()

console.log(triangle("codewars"));
console.log(triangle("triangle"));
console.log(triangle("abcd"));
console.log(triangle("youhavechosentotranslatethiskata"));
console.log(triangle("cod"));
console.log(triangle("yes"));
console.log(triangle("hours"));
console.log(triangle("circlecipher"));
console.log(triangle("lettertriangles"));
console.log(triangle("cod"));
