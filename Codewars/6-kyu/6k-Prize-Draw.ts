export function rank(st: string, we: number[], n: number): string {
  if (!st) {
    return "No participants";
  }
  const names = st.split(",");
  if (n > names.length) {
    return "Not enough participants";
  }
  const soms = names.map(name => name.toUpperCase().split("").reduce((acc, ch) => acc + (ch.charCodeAt(0) - 64), name.length));
  const weights = soms.map((s, i) => s * we[i]);
  const list: [string, number][] = [];
  for (let i = 0; i < names.length; i++) {
    list.push([names[i], weights[i]]);
  }
  list.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[0] < b[0]) return -1;
    return 1;
  });
  console.log(list);
  
  return list[--n][0];
} // rank()

console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4));
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8));
console.log(rank("Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [1, 3, 5, 5, 3, 6], 2));
