export function fish(shoal: String): Number {
  let size = 1;
  let eaten = 0;
  shoal = shoal.split("").sort().join("");
  for (const fish of shoal) {      
    if (+fish <= size) {
      eaten += +fish;
      size += Math.floor(eaten / (2 * size * (size + 1)));
    } else {
      break;
    }
  }
  return size;
} // fish()

console.log(fish("11112222"));
console.log(fish("151128241212192113722321331"));
