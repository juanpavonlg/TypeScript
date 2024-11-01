export function uncompress(music: string): number[] {
  const ans: number[] = [];
  for (const desc of music.split(",")) {
    if (/\*/.test(desc)) {
      const a = +desc.match(/^-?\d+/)![0];
      let n = +desc.match(/\d+$/)![0];
      while (n--) {
        ans.push(a);
      }      
    } else if (/-/.test(desc)) {
      let a = +desc.match(/^-?\d+/)![0];
      const b = +desc.match(/-(-?\d+)/)![1];
      const diff = (a < b ? 1 : -1) * (/\//.test(desc) ? +desc.match(/\d+$/)![0] : 1);
      for (; a !== b + diff; a += diff) {
        ans.push(a);
      }
    } else {
      ans.push(+desc);
    }
  }
  return ans;
} // uncompress()

console.log(uncompress("1,3-5,7-11,14,15,17-20"));
console.log(uncompress("0-4/2,5,7-9"));
console.log(uncompress("0-4/2,5,7-5"));
console.log(uncompress("0-4/2,5,7-5,5*4"));
console.log(uncompress("1--5/2"));
  