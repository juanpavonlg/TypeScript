export function shark(pontoonDistance: number, sharkDistance: number, youSpeed: number, sharkSpeed: number, dolphin: boolean): string {
  sharkSpeed *= dolphin ? 0.5 : 1;
  const ty = pontoonDistance / youSpeed;
  const ts = sharkDistance / sharkSpeed;
  return ts > ty ?  "Alive!" : "Shark Bait!";
} // shark()

console.log(shark(12, 50, 4, 8, true));
console.log(shark(40, 35, 3, 20, true));
