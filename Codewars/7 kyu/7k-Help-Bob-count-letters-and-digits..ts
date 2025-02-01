export function countLettersAndDigits(input: string): number {
  return (input.match(/[0-9a-z]/gi) || []).length;
} // countLettersAndDigits()

console.log(countLettersAndDigits("hel2!lo"));
console.log(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"));
console.log(countLettersAndDigits('E"(|6_A-W'));
