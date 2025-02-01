interface String {
  sixBitNumber(): boolean
}

String.prototype.sixBitNumber = function(): boolean {
  return /^(\d|[1-5]\d|6[0-3])$/.test(this.toString());
} // sixBitNumber()

console.log("63".sixBitNumber());
console.log("64".sixBitNumber());
console.log("0".sixBitNumber());
console.log("00".sixBitNumber());
console.log("-0".sixBitNumber());
