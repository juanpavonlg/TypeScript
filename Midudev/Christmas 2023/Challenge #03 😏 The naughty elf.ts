function findNaughtyStep(original: string, modified: string) {
  const [M, N] = [original.length, modified.length];
  const [a, b] = M >= N ? [original, modified] : [modified, original];
  return [...a].find((e, i) => e !== b[i]) ?? "";
} // findNaughtyStep()

let original = "abcd";
let modified = "abcde";
console.log(findNaughtyStep(original, modified));
original = "stepfor";
modified = "stepor";
console.log(findNaughtyStep(original, modified));
original = "abcde";
modified = "abcde";
console.log(findNaughtyStep(original, modified));
