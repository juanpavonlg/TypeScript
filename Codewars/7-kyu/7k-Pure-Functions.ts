type State = { modifier: number };

const state: State = { modifier: 2 };

export function solution(arr: number[], options: State) {
  return arr.map((e) => e + 2 * options.modifier);
} // solution()

console.log(solution([1, 2, 3], { modifier: 2 }));
const source = "return " + solution.toString();
const sol = Function("arr", "options", source)();
console.log(sol([1, 2], { modifier: 1 }));
