export const dashatize = (num: number) => {
  return Number.isInteger(num) ? Math.abs(num).toString().split(/([13579])/).filter((e) => e !== "").join("-") : "NaN";
}; // dashatize()

console.log(dashatize(7345));
console.log(dashatize(274));
console.log(dashatize(6815));
