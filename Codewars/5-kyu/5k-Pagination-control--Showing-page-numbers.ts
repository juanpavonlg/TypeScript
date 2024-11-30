export const getPages = (length: number, currentPage: number, size: number): number[] => {
  const pages: number[] = [];
  if (length > 1) {
    pages.push(1);
    let start = currentPage - size;
    let end = currentPage + size + 1;
    if (start <= 1) {
      end = Math.min(end + -start + 2, length);
      start = 2;
    } else if (end >= length) {
      start = Math.max(start - end + length, 2);
      end = length;
    }
    for (let i = start; i < end; i++) {
      pages.push(i);
    }
    pages.push(length);
  }
  return pages;
}; // getPages()

console.log(getPages(10, 5, 2));
console.log(getPages(36, 1, 5));
console.log(getPages(36, 7, 5));
console.log(getPages(36, 8, 5));
console.log(getPages(2, 2, 1));
console.log(getPages(30, 29, 5));
