export function dominoReaction(sequence: string): string {
  let ans = "";
  let i = 0;
  while (sequence[i] === "|") {
    ans += "/";
    i++;
  }
  return ans + sequence.slice(i);
  return sequence.replace(/^\|+/, (x) => "/".repeat(x.length));
} // dominoReaction()

console.log(dominoReaction("||| ||||//| |/"));
