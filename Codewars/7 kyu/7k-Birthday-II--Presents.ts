export function present(x: string, y: number): string {
  const presents: { [key: string]: string } = {
    goodpresent: [...x].map((e) => String.fromCharCode(e.charCodeAt(0) + y)).join(""),
    crap: [...x].sort().join(""),
    empty: [...x].sort().join(""),
    bang: [...x].reduce((a, e) => a + e.charCodeAt(0) - y, 0).toString(),
    badpresent: "Take this back!",
    dog: `pass out from excitement ${y} times`
  };
  return presents[x];
} // present()

console.log(present("badpresent", 3));
console.log(present("goodpresent", 9));
console.log(present("crap", 10));
console.log(present("bang", 9));
