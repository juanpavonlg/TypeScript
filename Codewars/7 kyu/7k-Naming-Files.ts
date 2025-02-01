export function nameFile(fmt: string, nbr: number, start: number): string[] {
  if (!Number.isInteger(nbr) || !Number.isInteger(start)) {
    return [];
  }
  const files: string[] = [];
  for (let i = 0; i < nbr; i++) {
    // files.push(fmt.replace(/<index_no>/g, `${start + i}`));
    files.push(fmt.replaceAll("<index_no>", `${start + i}`));
  }
  return files;
} // nameFile()

console.log(nameFile("IMG <index_no>", 4, 1));
console.log(nameFile("image #<index_no>.jpg", 3, 7));
console.log(nameFile('#<index_no> #<index_no>', 3, -2));
