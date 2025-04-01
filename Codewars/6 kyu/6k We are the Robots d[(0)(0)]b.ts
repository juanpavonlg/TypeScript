export function countRobots(a: string[]) {
  let automatik = 0;
  let mechanik = 0;
  for (const str of a) {
    if (/automatik/i.test(str)) {
      automatik += getRobots(str);
    } else if (/mechanik/i.test(str)) {
      mechanik += getRobots(str);
    }
  }
  return [`${automatik} robots functioning automatik`, `${mechanik} robots dancing mechanik`];
} // countRobots()

function getRobots(str: string): number {
  return str.match(/[a-z]([|};&#\[\]/><()*]{2}0){2}[|};&#\[\]/><()*]{2}[a-z]/gi)?.length ?? 0;
} // getRobots()

console.log(countRobots([]));
console.log(
  countRobots(["We're functioning automatik", "And we are dancing mechanik"])
);
console.log(
  countRobots([
    "We're functioning automatik d[(0)(0)]b",
    "And we are dancing mechanik d[(0)(0)]b d[(0)(0)]b",
  ])
);
console.log(
  countRobots([
    "d[(0)(0)]b We're functioning automatik d[(0)(0)]b",
    "And we are d[(0)(0)]b dancing mechanik d[(0)(0)]b d[(0)(0)]b",
  ])
);
console.log(
  countRobots([
    "d[(0)(0)}b We're functioning automatik D[(0)(0)]b",
    "And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b",
  ])
);
console.log(
  countRobots([
    "d*(0)(0)}b We're functioning e(<0/>0]#m Automatik Roboter0%1 D[(0)(0)]b",
    "And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b",
  ])
);
console.log(
  countRobots([
    "d*(0)(0)}b We're functioning d>[0;;0&&f automatik D[(0)(0)]b",
    "and m><0(;0[;a we dancing are Mechanic",
  ])
);
console.log(
  countRobots([
    "We're charging our battery",
    "And now we're full of energy",
    "We are the robots",
    "We're functioning automatik",
    "And we are dancing mechanik",
    "We are the robotororo robots",
    "Ja tvoi sluga",
    "Ja tvoi Rabotnik robotnik",
    "We are programmed just to do",
    "anything you want us to",
    "we are the robots",
    "We're functioning Automatic",
    "and we are dancing Mechanic",
    "we are the robots",
    "Ja tvoi sluga",
    "Ja tvoi Rabotnik robotnik",
    "We are the robots",
    "d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
    "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b",
  ])
);
console.log(
  countRobots([
    "d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b",
    "and m><0(;0 ;a we dancing are Mechanic",
  ])
);
