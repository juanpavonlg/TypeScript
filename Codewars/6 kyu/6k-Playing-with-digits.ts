export class G964 {
  public static digPow = (n: number, p: number) => {
    let sum = n.toString().split("").map(Number).reduce((s, d, i) => s + d ** (p + i), 0);
    return sum % n ? -1 : sum / n;
  } // digPow()
} // G964

console.log(G964.digPow(89, 1));
