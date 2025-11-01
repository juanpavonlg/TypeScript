export function spiderToFly(spider: string, fly: string): number {
  const s = +spider[1];
  const f = +fly[1];
  let radials = Math.abs(spider.charCodeAt(0) - fly.charCodeAt(0));
  return Math.sqrt(s * s + f * f - 2 * s * f * Math.cos(radials * Math.PI / 4));
} // spiderToFly()
