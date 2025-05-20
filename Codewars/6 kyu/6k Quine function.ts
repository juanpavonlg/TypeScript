export const quine = (): string => `export const quine = (): string ${quine.toString().slice(3).replace("exports.", "")}`

console.log(quine());
