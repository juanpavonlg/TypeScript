function executeCommands(commands: string[]) {
  const regs: number[] = new Array(8).fill(0);
  const MAX = 256;
  const instructions: [string, string, string][] = [];
  commands.forEach((command) => {
    const inst = command.match(/(^[A-Z]{3}) (\w+),?(V\d\d)?/);
    instructions.push([inst![1], inst![2], inst![3] ?? ""]);
  });
  for (let i = 0; i < instructions.length; i++) {
    const inst = instructions[i];
    switch (inst[0]) {
      case "MOV":
        if (inst[1].includes("V")) {
          regs[+inst[2].slice(1)] = regs[+inst[1].slice(1)];
        } else {
          regs[+inst[2].slice(1)] = +inst[1] % MAX;
        }
        break;
      case "ADD":
        const vxx0 = +inst[1].slice(1);
        regs[vxx0] = (regs[vxx0] + regs[+inst[2].slice(1)]) % MAX;
        break;
      case "DEC":
        const vxx1 = +inst[1].slice(1);
        regs[vxx1] = (regs[vxx1] + MAX - 1) % MAX;
        break;
      case "INC":
        const vxx2 = +inst[1].slice(1);
        regs[vxx2] = (regs[vxx2] + 1) % MAX;
        break;
      case "JMP":
        if (regs[0]) {
          i = +inst[1] - 1;
        }
        break;
    }
  }
  return regs;
} // executeCommands()

console.log(
  executeCommands([
    "MOV 5,V00", // V00 es 5
    "MOV 10,V01", // V01 es 10
    "DEC V00", // V00 ahora es 4
    "ADD V00,V01", // V00 = V00 + V01 = 14
  ]),
);
console.log(
  executeCommands([
    "MOV 255,V00", // V00 es 255
    "INC V00", // V00 es MAX, desborda a 0
    "DEC V01", // V01 es -1, desborda a 255
    "DEC V01", // V01 es 254
  ]),
);
console.log(
  executeCommands([
    "MOV 10,V00", // V00 es 10
    "DEC V00", // decrementa V00 en 1  <---┐
    "INC V01", // incrementa V01 en 1      |
    "JMP 1", // bucle hasta que V00 sea 0 ----┘
    "INC V06", // incrementa V06 en 1
  ]),
);
