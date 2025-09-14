export function vowelShift(text: string | null, n: number): string | null {
  if (!text) {
    return text;
  }
  const vowels: [string, number][] = [];
  const indices: number[] = [];
  let index = 0;
  for (let i = 0; i < text.length; i++) {
    if ("AEIOUaeiou".includes(text[i])) {
      vowels.push([text[i], index++]);
      indices.push(i);      
    }
  }
  n %= indices.length;
  for (const vowel of vowels) {
    vowel[1] = (vowel[1] + indices.length + n) % indices.length;
  }
  const arr = text.split("");
  for (const vowel of vowels) {
    arr[indices[vowel[1]]] = vowel[0];
  }
  return arr.join("");
} // vowelShift()

console.log(vowelShift("This is a test!", 1));
console.log(vowelShift("This is a test!", 3));
console.log(vowelShift("This is a test!", -5));
