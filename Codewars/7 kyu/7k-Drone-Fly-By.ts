export function flyBy(lamps: string, drone: string): string {
  let res = lamps.split("");
  for (let i = 0; i < drone.length && i < lamps.length; i++) {
    res[i] = "o";
  }
  return res.join("");
} // flyBy()

console.log(flyBy('xxxxxx', '====T'));
