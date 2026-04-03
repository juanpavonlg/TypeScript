function decorateTree(base: string) {
  const deco: { [key: string]: string } = {
    BB: "B",
    PP: "P",
    RR: "R",
    BP: "R",
    PB: "R",
    PR: "B",
    RP: "B",
    BR: "P",
    RB: "P",
  };
  const tree: string[][] = [base.split(" ")];
  let n = tree[0].length;
  while (--n) {
    const level: string[] = [];
    for (let i = 0; i < n; i++) {
      level.push(deco[tree[0][i] + tree[0][i + 1]]);
    }
    tree.unshift(level);
  }
  return tree.map((level) => level.join(" "));
} // decorateTree()

console.log(decorateTree("B P R P"));
console.log(decorateTree("B B"));
