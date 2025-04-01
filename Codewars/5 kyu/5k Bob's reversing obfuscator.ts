export function decoder(encoded: string, marker: string): string {
  const decoded = encoded.split(marker);
  for (let i = 2; i < decoded.length; i++) {
    if (i % 2) {
      decoded[1] += decoded[i];
    } else {
      decoded[0] += decoded[i];
    }
  }
  return decoded[0] + decoded[1].split("").reverse().join("");
} // decoder()

console.log(
  decoder("Lor-.tile gnicsipida rutetcesnoc ,tema tis rolod muspi me", "-")
);
console.log(
  decoder("Dq.silucaiqonec mollq odommoc qis ipsum qlsin lev", "q")
);
