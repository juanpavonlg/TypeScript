export function interpreter(code: string, iterations: number, width: number, height: number): string {
  const grid = Array.from({length: height}, () => Array(width).fill(0));
  let [i, ip, row, col] = [0, 0, 0, 0];
  while (ip < code.length && i < iterations) {
    switch (code[ip]) {
      case "n":
        row = (row + grid.length - 1) % grid.length;
        break;
      case "e":
        col = ++col % grid[row].length;
        break;
      case "s":
        row = ++row % grid.length;
        break;
      case "w":
        col = (col + grid[row].length - 1) % grid[row].length;
        break;
      case "*":
        grid[row][col] ^= 1;
        break;
      case "[":
        if (grid[row][col] === 0) {
          let pairs = 0;
          while (true) {
            ip++;
            if (code[ip] === "[") {
              pairs++;
            } else if (code[ip] === "]") {
              if (pairs) {
                pairs--;
              } else {
                break;
              }
            }
          }
        }
        break;
      case "]":
        if (grid[row][col] !== 0) {
          let pairs = 0;
          while (true) {
            ip--;
            if (code[ip] === "]") {
              pairs++;
            } else if (code[ip] === "[") {
              if (pairs) {
                pairs--;
              } else {
                break;
              }
            }
          }
        }
        break;
      default:
        ip++;
        continue;
    }
    ip++;
    i++;
  }
  return grid.map((e) => e.join("")).join("\r\n");
} // interpreter()

console.log(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 0, 6, 9));
console.log(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 7, 6, 9));
console.log(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 19, 6, 9));
console.log(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 42, 6, 9));
console.log(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 100, 6, 9));
