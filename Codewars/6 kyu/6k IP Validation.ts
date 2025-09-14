export function isValidIP(str: string): boolean {
  const octets = str.split(".");
  if (octets.length !== 4) {
    return false;
  }
  if (!octets.every((octet) => /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(octet))) {
    return false;
  }
  return true;
} // isValidIP()

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
