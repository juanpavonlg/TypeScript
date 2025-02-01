export function apple(x: number | string): string {
  if (typeof x === "string") {
    x = parseInt(x);
  }
  return x ** 2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
} // apple()

console.log(apple("50"));
