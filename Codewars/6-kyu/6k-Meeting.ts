export function meeting(s: string): string {
  return s.toUpperCase().split(";").map((name) => `(${name.split(":").reverse().join(", ")})`).sort().join("");
} // meeting()

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
