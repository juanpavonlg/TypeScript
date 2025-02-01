export function* fibonacciSequence(): Iterator<number> {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
} // fibonacciSequence()

const fibonacci = fibonacciSequence();
for (let i = 0; i < 30; i++) {
  console.log(fibonacci.next().value);
}
