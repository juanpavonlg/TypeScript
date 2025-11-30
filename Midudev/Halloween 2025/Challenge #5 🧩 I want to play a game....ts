function changeLock(current: string, target: string): number {
  if (current.length !== target.length || !/^\d+$/.test(current) || !/^\d+$/.test(target)) {
    return -1;
  }
  let moves = 0;
  for (let i = 0; i < current.length; i++) {
    const diff = Math.abs(+current[i] - +target[i]);
    moves += diff > 5 ? 10 - diff : diff;
  }
  return moves;
} // changeLock()

console.log(changeLock("0022", "0044"));
console.log(changeLock("0000", "9999"));
console.log(changeLock("1234", "5678"));
console.log(changeLock("0000", "0000"));
console.log(changeLock("1357", "2468"));
console.log(changeLock("1557", "2b68"));
