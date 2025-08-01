export function waterbombs(fire: string, w: number): number {
  return fire.split("Y").reduce((a, e) => a + Math.ceil(e.length / w), 0);
} // waterbombs()

console.log(waterbombs("xxYxx", 3));
console.log(waterbombs("xxYxx", 1));
console.log(waterbombs("xxxxYxYx", 5));
console.log(waterbombs("xxxxxYxYx", 2));
