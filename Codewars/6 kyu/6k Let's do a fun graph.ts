export function graph(arr: number[]): string {
  const N = Math.max(...arr);
  const ans = Array.from({length: N + 1}, (_, i) => [...".".repeat(6 * arr.length), i ? " | " : " ^ ", `${N - i}`]);
  for (let i = 0; i < arr.length; i++) {
    const row = N - arr[i];
    const col = 6 * i;
    for (let r = row; r <= N; r++) {
      ans[r].splice(col, 6, ...(r !== row ? "|    |" : " ____ "));
    }
  }
  return ans.map((row) => row.join("")).join("\n");
} // graph()

console.log(graph([10, 5, 3, 1, 4]));
