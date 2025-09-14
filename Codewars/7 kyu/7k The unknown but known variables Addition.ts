export function theVar(theVariables: string): number {
  return theVariables.charCodeAt(0) + theVariables.charCodeAt(2) - 192;
} // theVar()

console.log(theVar("d+g"));
