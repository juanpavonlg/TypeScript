export function longestConsec(strarr: string[], k: number): string {
  let longest: string = "";
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return longest;
  }
  for (let i = 0; i <= strarr.length - k; i++) {
    const concat = strarr.slice(i, i + k).join("");
    longest = concat.length > longest.length ? concat : longest;  
  }
  return longest;
} // longestConsec()

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));
