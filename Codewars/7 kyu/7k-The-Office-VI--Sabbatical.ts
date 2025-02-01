export function sabb(s: string, val: number, happiness: number): string {  
  const score = (s.match(/[sabticl]/gi) || []).length + val + happiness;
  return score > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
} // sabb()

console.log(sabb("Can I have a sabbatical?", 5, 5));
