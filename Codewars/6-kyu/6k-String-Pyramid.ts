export function watchPyramidFromTheSide(characters: string | null): string | null {
  if (!characters) {
    return characters;
  }
  const pyramid: string[] = [];
  for (let i = 0; i < characters.length; i++) {
    const line = characters[characters.length - 1 - i].repeat(2 * i + 1);
    const space = " ".repeat((2 * characters.length - 1 - line.length) / 2);
    pyramid.push(`${space}${line}${space}`);
  }
  return pyramid.join("\n");
} // watchPyramidFromTheSide()

export function watchPyramidFromAbove(characters: string | null): string | null {
  if (!characters) {
    return characters;
  }
  const pyramid: string[] = [];
  let line = " ".repeat(2 * characters.length - 1).split("");
  for (let i = 0; i < characters.length; i++) {
    for (let j = i; j < line.length - i; j++) {
      line[j] = characters[i];
    }
    pyramid[i] = line.join("");
    pyramid[2 * characters.length - 2 - i] = pyramid[i];
  }
  return pyramid.join("\n");
} // watchPyramidFromAbove()

export function countVisibleCharactersOfThePyramid(characters: string | null): number {
  return characters ? (2 * characters.length - 1) ** 2 : -1;
} // countVisibleCharactersOfThePyramid()

export function countAllCharactersOfThePyramid(characters: string | null): number {
  if (!characters) {
    return -1;
  }
  let sum = 0;
  for (let i = 0; i < characters.length; i++) {
    sum += (2 * i + 1) ** 2;
  }
  return sum;
} // countAllCharactersOfThePyramid()

var characters = "*#$";
console.log(watchPyramidFromTheSide(characters));
console.log(watchPyramidFromAbove(characters));
console.log(countVisibleCharactersOfThePyramid(characters));
console.log(countAllCharactersOfThePyramid(characters));
