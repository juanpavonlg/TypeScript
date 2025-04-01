// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
export function trilingualDemocracy(group: string): string {
  if (group[0] === group[1] && group[1] === group[2]) {
    return group[0];
  } else if (group[0] === group[1]) {
    return group[2];
  } else if (group[0] === group[2]) {
    return group[1];
  } else if (group[1] === group[2]) {
    return group[0];
  }
  return "DFIK".replace(group[0], "").replace(group[1], "").replace(group[2], "");
} // trilingualDemocracy()

console.log(trilingualDemocracy("FFF"));
console.log(trilingualDemocracy("IIK"));
console.log(trilingualDemocracy("DFK"));
