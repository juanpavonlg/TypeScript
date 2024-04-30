import { MORSE_CODE } from './preloaded';

export function decodeMorse(morseCode: string): string {
  return morseCode.trim().split("   ").map((w) => w.split(" ").map((l) => MORSE_CODE[l]).join("")).join(" ");
} // decodeMorse()

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
