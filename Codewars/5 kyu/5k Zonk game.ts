export function getScore(dice: number[]): number {
  const faces = new Set(dice);  
  let score = 0;
  if (faces.size === 6) {
    score = 1000;
    faces.clear();
  }
  let scored = true;
  if (faces.size === 3) {
    for (const face of faces) {
      if (dice.filter((e) => e === face).length !== 2) {
        scored = false;
        break;
      }
    }
    if (scored) {
      score = 750;
      faces.clear();
    }
  }
  for (const face of faces) {
    if (dice.filter((e) => e === face).length === 3) {
      score += face === 1 ? 1000 : 100 * face;
      faces.delete(face);
    }
  }
  for (const face of faces) {
    if (dice.filter((e) => e === face).length === 4) {
      score += face === 1 ? 2000 : 200 * face;
      faces.delete(face);
      break;
    }
  }
  for (const face of faces) {
    if (dice.filter((e) => e === face).length === 5) {
      score += face === 1 ? 3000 : 300 * face;
      faces.delete(face);
      break;
    }
  }
  for (const face of faces) {
    if (dice.filter((e) => e === face).length === 6) {
      score += face === 1 ? 4000 : 400 * face;
      faces.delete(face);
      break;
    }
  }
  if (faces.has(1)) {
    score += 100 * dice.filter((e) => e === 1).length;
    faces.delete(1);
  }
  if (faces.has(5)) {
    score += 50 * dice.filter((e) => e === 5).length;
    faces.delete(5);
  }
  return score;
} // getScore()

console.log(getScore([1, 2, 3]));
console.log(getScore([3, 4, 1, 1, 5]));
console.log(getScore([2, 3, 2, 3, 3, 2]));
console.log(getScore([1, 1, 1, 1, 1, 5]));
console.log(getScore([2, 3, 4, 3, 6, 6]));
console.log(getScore([2, 2, 6, 6, 2, 2]));
console.log(getScore([1, 3, 4, 3, 4, 1]));
console.log(getScore([3, 3, 3, 3]));
console.log(getScore([1, 2, 3, 4, 5]));
