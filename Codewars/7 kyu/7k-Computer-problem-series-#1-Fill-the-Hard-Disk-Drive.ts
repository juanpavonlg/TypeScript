export function save(sizes: number[], hd: number) {
  let file = -1;
  while ((hd -= sizes[++file]) >= 0);
  return file;
} // save()

console.log(save([4, 4, 4, 3, 3], 12));
console.log(save([4, 4, 4, 3, 3], 11));
