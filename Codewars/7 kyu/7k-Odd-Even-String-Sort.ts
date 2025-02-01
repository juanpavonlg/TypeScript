export function sortMyString(s:string):string {
  const getChars = (n: number) => s.split("").reduce((str, ch, i) => str += i % 2 === n ? ch : "", "");
  return `${getChars(0)} ${getChars(1)}`;
} // sortMyString()

console.log(sortMyString("Codewars"));
