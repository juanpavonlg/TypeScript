function findBalancedSegment(message: (0 | 1)[]) {
  const segment: number[] = [];
  let max = 0;
  for (let i = 0; i < message.length - 1; i++) {
    let [zeros, ones] = [0, 0];
    for (let j = i; j < message.length; j++) {
      message[j] ? ones++ : zeros++;
      if (zeros === ones && j - i > max) {
        segment[0] = i;
        segment[1] = j;
        max = j - i;
      }
    }
  }
  return segment;
} // findBalancedSegment()

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
console.log(findBalancedSegment([1, 1, 0]));
console.log(findBalancedSegment([1, 1, 1]));
console.log(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0]));

