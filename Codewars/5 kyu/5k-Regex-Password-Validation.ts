// assign your RegExp to REGEXP
export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

console.log(REGEXP.test("fjd3IR9_"));
console.log(REGEXP.test("ghdfj32"));
console.log(REGEXP.test("4fdg5Fj3"));
console.log(REGEXP.test("123456"));
console.log(REGEXP.test("Ab3"));
