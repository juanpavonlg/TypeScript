export const removeOutliers = (data: number[]): number[] => {
  data.sort((a, b) => a - b);
  let removed = true;
  while (removed) {
    removed = false;
    let mid = (data.length / 2) | 0;
    const [end, start] = data.length % 2 ? [mid - 1, mid + 1] : [mid - 1, mid];
    const [low, upp] = [data.slice(0, end + 1), data.slice(start)];
    mid = (low.length / 2) | 0;
    const lq = low.length % 2 ? low[mid] : (low[mid] + low[mid]) / 2;
    const uq = upp.length % 2 ? upp[mid] : (upp[mid] + upp[mid]) / 2;
    const diff = uq - lq;
    const [lowLim, uppLim] = [lq - 1.5 * diff, uq + 1.5 * diff];
    const len = data.length;
    data = data.filter((e) => e >= lowLim && e <= uppLim);
    if (data.length < len) {
      removed = true;
    }
  }
  return data;
}; // removeOutliers()

console.log(removeOutliers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
console.log(removeOutliers([1, 4, 2, 5, 1000000, 3, 9]));
