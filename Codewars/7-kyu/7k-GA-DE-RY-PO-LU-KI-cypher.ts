const cypher: {[i: string]: string} = {"G": "A", "D": "E", "R": "Y", "P": "O", "L": "U", "K": "I",
                                       "A": "G", "E": "D", "Y": "R", "O": "P", "U": "L", "I": "K", 
                                       "g": "a", "d": "e", "r": "y", "p": "o", "l": "u", "k": "i",
                                       "a": "g", "e": "d", "y": "r", "o": "p", "u": "l", "i": "k"};

export function encode(str: string): string {
  return str.split("").map(ch => cypher[ch] || ch).join("");
} // encode()

export function decode(str: string): string {
  return str.split("").map(ch => cypher[ch] || ch).join("");
} // decode()

console.log(encode("Ala has a cat"));
console.log(decode("Gug hgs g cgt"));
