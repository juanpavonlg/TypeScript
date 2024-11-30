function battleHorde(zombies: string, humans: string): string {
  const h = humans.split("").map(Number);
  const z = zombies.split("").map(Number);
  while (h.length && z.length) {
    const res = h[0] - z[0];
    h.shift();
    z.shift();
    if (res > 0) {
      h[0] = h[0] ? h[0] + res : res;
    } else if (res < 0) {
      z[0] = z[0] ? z[0] - res : -res;
    }
  }
  return h.length ? h[0] + "h" : z.length ? z[0] + "z" : "x";
} // battleHorde()

console.log(battleHorde("242", "334"));
console.log(battleHorde("444", "282"));
console.log(battleHorde("8989898999", "7779998811"));
