function fixLetter(letter: string) {
  return letter
    .trim()
    .replace(/ +/g, " ")
    .replace(/, ?/g, ", ")
    .replace(/ ([,.?])/g, "$1")
    .replace(/\?+/g, "?")
    .replace(/^[a-z]|[.?!] [a-z]/gi, (e) => e.toUpperCase())
    .replace(/santa claus/gi, "Santa Claus")
    .replace(/([^?!.])$/, "$1.");
} // fixLetter()

console.log(
  fixLetter(
    ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `,
  ),
);
console.log(
  fixLetter(
    "  Hi Santa claus. I'm a girl from Barcelona , Spain . please,send me a bike.  Is it possible?",
  ),
);
