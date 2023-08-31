export function pendulum(values: number[]) {
  values.sort((a, b) => a - b);
  const ans = [values[0]];
  for (let i = 1; i < values.length; i++) {
    i % 2 ? ans.push(values[i]) : ans.unshift(values[i]);
  }
  return ans;
} // pendulum()

console.log(pendulum([9, 4, 6, 4, 10, 5]));
