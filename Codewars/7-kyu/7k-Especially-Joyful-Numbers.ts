export const numberJoy = (n: number): boolean => {
  const sum = [...n.toString()].reduce((a, e) => a + +e, 0);
  if (n % sum === 0) {
    const rev = +[...sum.toString()].reverse().join("");
    if (sum * rev === n) {
      return true;
    }
  }
  return false;
}; // numberJoy()

console.log(numberJoy(1729));
console.log(numberJoy(1997));
