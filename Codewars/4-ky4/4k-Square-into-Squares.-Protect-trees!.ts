export const decompose = (n: number): null | number[] => {
  let ns = n * n;
  const ans: number[] = [];
  n--;
  while (ns > 0) {    
    if (n >= ans[0]) {
      for (let i = 0; i < 2; i++) {
        let m = ans.shift();
        if (m) {
          ns += m * m;
          n = m;
          n--; 
        } else {
          return null;
        }       
      }
    }
    ns -= n * n;
    ans.unshift(n);
    n = Math.floor(Math.sqrt(ns));
  }  
  return ans;
}; // decompose()

console.log(decompose(50));
console.log(decompose(44));
console.log(decompose(3327));
console.log(decompose(5));
console.log(decompose(2));
