/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  const output: number[] = [];
  let val = 0;
  for (const op of data) {
    switch (op) {
      case "i":
        val++;
        break;
      case "d":
        val--;
        break;
      case "s":
        val *= val;
        break;
      case "o":
        output.push(val);
    }
  }
  return output;
} // parse()

console.log(parse("iiisdoso"));
