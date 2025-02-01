export function bump(x: string): string {
  return (x.match(/n/g) || []).length <= 15 ? "Woohoo!" : "Car Dead";
} // bump()

console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
