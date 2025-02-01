export function brainLuck(code: string, input: string) {
  const memory = Array(30000).fill(0);
  let ip = 0;
  let dp = code.length;
  let output = "";
  // Load program
  for (let i = 0; i < code.length; i++) {
    memory[i] = code.charCodeAt(i);
  }
  // Run program
  while (ip < code.length) {
    switch (memory[ip]) {
      case 62: // >
        dp++;
        break;
      case 60: // <
        dp--;
        break;
      case 43: // +
        memory[dp] = ++memory[dp] % 256;
        break;
      case 45: // -
        memory[dp] = (memory[dp] + 255) % 256;
        break;
      case 46: // .
        output += String.fromCharCode(memory[dp]);
        break;
      case 44: // ,
        memory[dp] = input.charCodeAt(0);
        input = [...input].splice(1).join("");
        break;
      case 91: // [
        if (memory[dp] === 0) {
          let pairs = -1;
          while (true) {
            if (memory[ip] === 91) {
              pairs++;
            } else if (memory[ip] === 93) {
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
      case 93: // ]
        if (memory[dp]) {
          let pairs = -1;
          while (true) {
            if (memory[ip] === 93) {
              pairs++;
            } else if (memory[ip] === 91) {
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
  // Output results
  return output;
} // brainLuck()

console.log(brainLuck(",+[-.,+]", "Codewars" + String.fromCharCode(255)));
console.log(brainLuck(",[.[-],]", "Codewars" + String.fromCharCode(0)));
console.log(brainLuck(",>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.", String.fromCharCode(8, 9)));
console.log(brainLuck("++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.", ""));
