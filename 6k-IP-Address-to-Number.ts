export function ipToNum(ip: string): number {
  return +`0b${ip.split(".").map((e) => (+e).toString(2).padStart(8, "0")).join("")}`;
} // ipToNum()

export function numToIp(x: number): string {
  // const str = x.toString(2).padStart(32, "0");
  // const ip: number[] = [];
  // for (let i = 0; i < 4; i++) {
  //   ip.push(+`0b${str.slice(8 * i, 8 * i + 8)}`)
  // }
  // return ip.join(".");
  return x.toString(2).padStart(32, "0").match(/\d{8}/g)!.map(e => +`0b${e}`).join(".");
} // numToIp()

console.log(ipToNum("192.168.1.1"));
console.log(numToIp(3232235777));
console.log(ipToNum("10.0.0.0"));
console.log(numToIp(ipToNum("10.0.0.0")));
