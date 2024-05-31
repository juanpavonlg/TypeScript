export function ipToInt32(ip: string): number {
  return parseInt(ip.split(".").map((e) => (+e).toString(2).padStart(8, "0")).join(""), 2);
} // ipToInt32()

console.log(ipToInt32("128.32.10.1"));
