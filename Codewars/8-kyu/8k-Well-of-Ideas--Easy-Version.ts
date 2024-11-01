export function well(x: string[]): string {
  switch (x.filter((e) => e === "good").length) {
    case 0:
      return "Fail!";
    case 1:
    case 2:
      return "Publish!";
  }
  return "I smell a series!";
} // well()

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]));
