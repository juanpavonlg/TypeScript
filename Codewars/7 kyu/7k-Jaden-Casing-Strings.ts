String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");
} // toJadenCase()

interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
