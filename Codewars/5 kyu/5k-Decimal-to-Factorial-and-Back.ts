export class G964 {
  public static dec2FactString = (nb: number): string => {
    let str = "";
    for (let f = 1; nb > 0; f++) {
      const dig = nb % f;
      nb = (nb - dig) / f;
      str = (dig > 9 ? String.fromCharCode(55 + dig) : dig) + str;
    }
    return str;
  }; // dec2FactString()

  public static factString2Dec = (str: string): number => {
    return [...str].reduce((a, e, i) => a * (str.length - i) + (e > "9" ? e.charCodeAt(0) - 55 : +e), 0);
  }; // factString2Dec()
} // G964()

console.log(G964.dec2FactString(463));
console.log(G964.dec2FactString(2982));
console.log(G964.dec2FactString(36288000));
console.log(G964.factString2Dec("341010"));
console.log(G964.factString2Dec("4041000"));
console.log(G964.factString2Dec("A0000000000"));
