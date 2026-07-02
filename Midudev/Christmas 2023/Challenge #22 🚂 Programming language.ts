function compile(code: string) {
  let counter = 0;
  let goto = -1;
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "+") {
      counter++;
    } else if (code[i] === "*") {
      counter *= 2;
    } else if (code[i] === "-") {
      counter--;
    } else if (code[i] === "%") {
      goto = i;
    } else if (code[i] === "<" && goto >= 0) {
      i = goto;
      goto = -1;
    } else if (code[i] === "¿" && counter <= 0) {
      i = code.indexOf("?", i + 1);
    }
  }
  return counter;
} // compile()

console.log(compile("++*-"));
console.log(compile("++%++<"));
console.log(compile("++<--"));
console.log(compile("++¿+?"));
console.log(compile("--¿+++?"));
