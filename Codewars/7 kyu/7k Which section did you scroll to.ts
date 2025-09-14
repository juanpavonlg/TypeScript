export function getSectionId(scroll: number, sizes: number[]) {
  let size = -1;
  for (let i = 0; i < sizes.length; i++) {
    size += sizes[i];
    if (scroll <= size) {
      return i;
    } 
  }
  return -1;
} // getSectionId()

console.log(getSectionId(300, [300, 200, 400, 600, 100]));
console.log(getSectionId(1600, [300, 200, 400, 600, 100]));
