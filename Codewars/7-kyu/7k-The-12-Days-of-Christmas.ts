export function comparator(a: string, b: string): number {
  const aStart = /^\w+/.exec(a)![0];
  const bStart = /^\w+/.exec(b)![0];
  if (/On/i.test(aStart) || /a/i.test(bStart)) {
    return -1;
  }
  if (/a/i.test(aStart) || /On/i.test(bStart)) {
    return 1;
  }
  return parseInt(bStart) - parseInt(aStart);
} // comparator()

console.log(comparator("12 drummers drumming,", "11 pipers piping,",));
console.log(comparator("a partridge in a pear tree.", "On the 1st day of Christmas my true love gave to me"));
