enum Issuer {
  VISA = "VISA",
  AMEX = "AMEX",
  Mastercard = "Mastercard",
  Discover = "Discover",
  Unknown = "Unknown",
}

export const getIssuer = (x: number): Issuer => {
  const digs = x.toString();
  switch (true) {
    case /^3[47]/.test(digs) && digs.length === 15:
      return Issuer.AMEX;
    case /^6011/.test(digs) && digs.length === 16:
      return Issuer.Discover;
    case /^5[1-5]/.test(digs) && digs.length === 16:
      return Issuer.Mastercard;
    case /^4/.test(digs) && (digs.length === 13 || digs.length === 16):
      return Issuer.VISA;
    default:
      return Issuer.Unknown;
  }
}; // getIssuer()

console.log(getIssuer(4111111111111111));
console.log(getIssuer(378282246310005));
console.log(getIssuer(9111111111111111));
