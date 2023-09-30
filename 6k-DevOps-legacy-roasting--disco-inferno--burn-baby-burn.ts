export function roastLegacy(workloads: string): string {
  const complaints = ["slow!", "expensive!", "manual!", "down!", "hostage!", "security!"];
  const keywords: {[i: string]: number} = { COBOL: 1000, nonobject: 500, monolithic: 500, fax: 100, modem: 100, thickclient: 50, tape: 50, floppy: 50, oldschoolIT: 50 };
  let resolved = 0;
  let points = 0;
  for (const complaint of complaints) {
    resolved += (workloads.match(new RegExp(complaint, "gi")) || []).length;
  }
  for (const keyword in keywords) {
    points += keywords[keyword] * (workloads.match(new RegExp(keyword, "gi")) || []).length;
  }
  return resolved + points !== 0 ? `Burn baby burn disco inferno ${points} points earned in this roasting and ${resolved} complaints resolved!` : "These guys are already DevOps and in the Cloud and the business is happy!";
} // roastLegacy()

console.log(roastLegacy("EXPENSIVE!AUTOMATEDRUBYCLOUDMONGOPAASTAPEACTIVE-ACTIVEPYTHONNOSQL"));
