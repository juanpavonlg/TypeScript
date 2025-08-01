export function spot(s1:string ,s2: string): number[]{
  const ans: number[] = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      ans.push(i);
    }
  }
  return ans;
} // spot()

console.log(spot("abcdefg", "abcqetg"));
