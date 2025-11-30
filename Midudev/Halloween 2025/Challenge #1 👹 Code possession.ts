function translatePossessed(message: string): string {
  return message.trim().length ? message.replace(/[^ ]+/g, (e) => [...e].reverse().join("")) : "";
} // translatePossessed()

console.log(translatePossessed("i yojne gnihctaw uoy"));
console.log(translatePossessed("siht si gnorw"));
console.log(translatePossessed("      "));
console.log(translatePossessed("dooG secitcarP"));
console.log(translatePossessed(",olleH !dlrow"));
