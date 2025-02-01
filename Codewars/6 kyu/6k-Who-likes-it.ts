export const likes = (a: string[]): string => {
  let who = ["no one", a[0], `${a[0]} and ${a[1]}`, `${a[0]}, ${a[1]} and ${a[2]}`, `${a[0]}, ${a[1]} and ${a.length - 2} others`];
  return `${who[Math.min(a.length, 4)]} like${a.length > 1 ? "" : "s"} this`;
}; // likes()

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
