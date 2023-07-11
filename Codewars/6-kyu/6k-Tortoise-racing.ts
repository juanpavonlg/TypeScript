export const race = (v1: number, v2: number, g: number) => {
  let t = 3600 * g / (v2 - v1);
  const h = ~~(t / 3600);
  const m = ~~(t / 60 % 60);
  const s = ~~(t % 60);
  return v2 > v1 ? [h, m, s] : null;
} // race()

console.log(race(80, 91, 37));
