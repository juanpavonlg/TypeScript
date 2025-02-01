export const min = (list: number[]): number => {
  return Math.min(...list);
}; // min()

export const max = (list: number[]): number => {
  return Math.max(...list);
}; // max()

console.log(min([-52, 56, 30, 29, -54, 0, -110]), max([-52, 56, 30, 29, -54, 0, -110]));
