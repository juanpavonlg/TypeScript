export function time(distance: number, boatSpeed: number, stream: String): number {
  const streamSpeed = +stream.match(/\d+/)![0] * (stream.includes("Down") ? 1 : -1);
  return +(distance / (boatSpeed + streamSpeed)).toFixed(2);
} // time()

console.log(time(24,10,"Downstream 2"));
console.log(time(24,14,"Upstream 2"));
