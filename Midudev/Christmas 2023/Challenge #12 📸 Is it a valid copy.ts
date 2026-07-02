function checkIsValidCopy(original: string, copy: string) {
  for (let i = 0; i < original.length; i++) {
    const match = original[i].match(/[a-z]/i);
    const upLow = match ? `${match[0]}${match[0].toLowerCase()}` : "";
    const chars = `${upLow}#+:. `;
    if (chars.indexOf(copy[i]) < chars.indexOf(original[i])) {
      return false;
    }
  }
  return true;
} // checkIsValidCopy()

console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#"));
console.log(checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#"));
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s"));
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s"));
console.log(checkIsValidCopy("S#nta Claus", "S#ntA ClauS"));
console.log(checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#"));
console.log(checkIsValidCopy("3 #egalos", "3 .+:# #:"));
console.log(checkIsValidCopy("s+#:.#c:. s", "s#+:.#c:. s"));
console.log(checkIsValidCopy("S#n:a Claus", "S#+:. c:. s"));
