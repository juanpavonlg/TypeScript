export function boolfuck(code: string, input: string = ""): string {
  input = input.split("").map((byte) => byte.charCodeAt(0).toString(2).padStart(8, "0").split("").reverse().join("")).join("");
  const memory: number[] = [];
  let [ip, p] = [0, 0];
  let output = "";
  while (ip < code.length) {
    switch (code[ip]) {
      case "+":
        if (!memory.length) {
          memory[p] = 0;
        }
        memory[p] ^= 1;
        break;
      case ",":
        if (input) {
          memory[p] = +input[0];
          input = input.slice(1);
        } else {
          memory[p] = 0;
        }
        break;
      case ";":
        if (!memory.length) {
          memory[p] = 0;
        }
        output += memory[p];
        break;
      case "<":
        if (!memory.length) {
          memory[p] = 0;
        } else if (p === 0) {
          memory.unshift(0);
        } else {
          p--;
        }
        break;
      case ">":
        if (!memory.length) {
          memory[p] = 0;
        } else if (p === memory.length - 1) {
          memory.push(0);
          p++;
        } else {
          p++;
        }
        break;
      case "[":
        if (memory[p] === 0) {
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
        if (memory[p] === 1) {
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
    }
    ip++;
  }
  return (output.match(/.{1,8}/g) ?? []).map((byte) => String.fromCharCode(parseInt(byte.split("").reverse().join(""), 2))).join("");
} // boolfuck()

console.log(
  boolfuck(`;;;+;+;;+;+;
            +;+;+;+;;+;;+;
            ;;+;;+;+;;+;
            ;;+;;+;+;;+;
            +;;;;+;+;;+;
            ;;+;;+;+;+;;
            ;;;;;+;+;;
            +;;;+;+;;;+;
            +;;;;+;+;;+;
            ;+;+;;+;;;+;
            ;;+;;+;+;;+;
            ;;+;+;;+;;+;
            +;+;;;;+;+;;
            ;+;+;+;`)
);
console.log(
  boolfuck(
    ">,>,>,>,>,>,>,>,<<<<<<<[>]+<[+<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]<<<<<<<<;>;>;>;>;>;>;>;<<<<<<<,>,>,>,>,>,>,>,<<<<<<<[>]+<[+<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]",
    "Codewars" + String.fromCharCode(255)
  )
);
console.log(
  boolfuck(
    ">,>,>,>,>,>,>,>,>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>;>;>;>;>;>;>;>;>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]>,>,>,>,>,>,>,>,>+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]",
    "Codewars" + String.fromCharCode(0)
  )
);
console.log(
  boolfuck(
    ">,>,>,>,>,>,>,>,>>,>,>,>,>,>,>,>,<<<<<<<<+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]>[>]+<[+<]>>>>>>>>>[+]>[>]+<[+<]>>>>>>>>>[+]<<<<<<<<<<<<<<<<<<+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]>>>>>>>>>>>>>>>>>>>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]<<<<<<<<<<<<<<<<<<<<<<<<<<[>]+<[+<]>>>>>>>>>[+]>>>>>>>>>>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]<<<<<<<<<<<<<<<<<<+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]>>>>>>>>>>>>>>>>>>>;>;>;>;>;>;>;>;<<<<<<<<",
    String.fromCharCode(8, 9)
  )
);
