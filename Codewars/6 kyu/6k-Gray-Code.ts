export function bin2gray(bits: number[]): number[] {
  const gray = [bits[0]];
  for (let i = 1; i < bits.length; i++) {
    gray[i] = bits[i] ^ bits[i - 1];
  }
  return gray;
} // bin2gray()

export function gray2bin(gray: number[]): number[] {
  const bits = [gray[0]];
  for (let i = 1; i < gray.length; i++) {
    bits[i] = gray[i] ^ bits[i - 1];
  }
  return bits;
} // gray2bin()

console.log(bin2gray([1, 1]));
console.log(bin2gray([1, 0, 1]));
console.log(gray2bin([1, 0]));
console.log(gray2bin([1, 1, 1]));
  