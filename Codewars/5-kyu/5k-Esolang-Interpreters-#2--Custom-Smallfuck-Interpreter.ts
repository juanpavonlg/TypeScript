export function interpreter(code: string, tape: string): string {
  const output = tape.split("").map(Number);
  let ip = 0;
  let dp = 0;
  while (ip < code.length && dp >= 0 && dp < tape.length) {
    switch (code[ip]) {
      case ">":
        dp++;
        break;
      case "<":
        dp--;
        break;
      case "*":
        output[dp] ^= 1;
        break;
      case "[":
        if (output[dp] === 0) {
          let pairs = -1;
          while (true) {
            if (code[ip] === "[") {
              pairs++;
            } else if (code[ip] === "]") {
              if (pairs) {
                pairs--;
              } else {
                break;
              }
            }
            ip++;
          }
        }
        break;
      case "]":
        if (output[dp]) {
          let pairs = -1;
          while (true) {
            if (code[ip] === "]") {
              pairs++;
            } else if ((code[ip] === "[")) {
              if (pairs) {
                pairs--;
              } else {
                break;
              }
            }
            ip--;
          }
        }
        break;
    }
    ip++;
  }
  return output.join("");
} // interpreter()

console.log(interpreter("*", "00101100"));
console.log(interpreter(">*>*", "00101100"));
console.log(interpreter("*>*>*>*>*>*>*>*", "00101100"));
console.log(interpreter("*>*>>*>>>*>*", "00101100"));
console.log(interpreter(">>>>>*<*<<*", "00101100"));
  