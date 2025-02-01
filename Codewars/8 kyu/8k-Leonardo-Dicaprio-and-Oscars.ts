export const leo = (oscar: number): string => {
  switch (true) {
    case oscar > 88:
      return "Leo got one already!";
    case oscar === 88:
      return "Leo finally won the oscar! Leo is happy";
    case oscar === 86:
      return "Not even for Wolf of wallstreet?!";
    default:
      return "When will you give Leo an Oscar?";
  }
}; // leo()

console.log(leo(85));
console.log(leo(86));
console.log(leo(87));
console.log(leo(88));
console.log(leo(89));
