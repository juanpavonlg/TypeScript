function decode(message: string) {
  while (message.includes("(")) {
    message = message.replace(/\(([^()]+)\)/g, (_, c) =>
      [...c].reverse().join(""),
    );
  }
  return message;
} // decode()

const a = decode("hola (odnum)");
console.log(a);
const b = decode("(olleh) (dlrow)!");
console.log(b);
const c = decode("sa(u(cla)atn)s");
console.log(c);
