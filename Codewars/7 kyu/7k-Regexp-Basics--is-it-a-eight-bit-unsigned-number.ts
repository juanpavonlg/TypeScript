interface String {
  eightBitNumber(): boolean;
}

String.prototype.eightBitNumber = function(): boolean {
  return /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(this.toString());
} // eightBitNumber()

console.log("255".eightBitNumber());
console.log("256".eightBitNumber());
console.log("99".eightBitNumber());
console.log("216".eightBitNumber());
console.log("19".eightBitNumber());
console.log("00".eightBitNumber());
console.log("-0".eightBitNumber());
