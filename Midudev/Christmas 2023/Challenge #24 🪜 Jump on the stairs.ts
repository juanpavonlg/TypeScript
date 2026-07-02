function getStaircasePaths(steps: number, maxJump: number) {
  const seqs: number[][] = [];
  const seq: number[] = [];

  function getSeqs(steps: number) {
    if (steps === 0) {
      seqs.push([...seq]);
      return;
    }
    for (let jump = 1; jump <= maxJump && jump <= steps; jump++) {
      seq.push(jump);
      getSeqs(steps - jump);
      seq.pop();
    }
  } // getSeqs()

  getSeqs(steps);
  return seqs;
} // getStaircasePaths()

console.log(getStaircasePaths(4, 2));
console.log(getStaircasePaths(2, 1));
console.log(getStaircasePaths(3, 3));
console.log(getStaircasePaths(5, 1));
console.log(getStaircasePaths(5, 2));
