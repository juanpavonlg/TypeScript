export function trim(str: string, size: number): string {
  return str.length > size
    ? `${str.slice(0, size > 3 ? size - 3 : size)}...`
    : str;
} // trim()

console.log(trim("Creating kata is fun", 14));
console.log(trim("He", 1));
console.log(trim("Code Wars is pretty rad", 50));
console.log(trim("Gslk EB", 1));
