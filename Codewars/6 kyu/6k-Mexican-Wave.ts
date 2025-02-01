export function wave(str: string): Array<string>{
  const wave: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      wave.push(str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1));
    }
  }
  return wave;
} // wave()

console.log(wave("two words"));
