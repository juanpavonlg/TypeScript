export function binaryFingers(binString: string): string[] {
  const fingers = ["Thumb", "Index", "Middle", "Ring", "Pinkie"];
  const ans: string[] = [];
  for (let i = 0; i < binString.length; i++) {
    if(+binString[i]) {
      ans.push(fingers[binString.length - 1 - i]);
    }
  }
  return ans;
} // binaryFingers()

console.log(binaryFingers("101"));
console.log(binaryFingers("11111"));
console.log(binaryFingers("11101"));
