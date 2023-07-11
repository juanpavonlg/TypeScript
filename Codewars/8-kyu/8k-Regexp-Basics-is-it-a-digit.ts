interface String {    // Necessary, keep it here.
  digit(): boolean;
}

String.prototype.digit = function(): boolean {
  return /^\d$/.test(this.toString());
};

console.log("7".digit());
console.log("a5".digit());
console.log("14".digit());
