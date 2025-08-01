export function validateBase(num: string, base: number): boolean {
  const MAX = base > 10 ? String.fromCharCode(65 + base - 11): (base - 1).toString();  
  return num.toString().split("").every((digit) => digit <= MAX);
} // validateBase()

console.log(validateBase("17253", 8));
console.log(validateBase("19823", 8));
