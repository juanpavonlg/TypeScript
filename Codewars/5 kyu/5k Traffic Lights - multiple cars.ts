export function trafficLights(road: string, n: number): string[] {
  const seq: { [key: string]: "G" | "O" | "R" } = { G: "O", O: "R", R: "G" };
  const time: { [key: string]: 1 | 5 } = { G: 5, O: 1, R: 5 };
  const lights: { [index: number]: { color: string; time: number } } = {};
  for (let i = 0; i < road.length; i++) {
    if (road[i] in seq) {
      lights[i] = { color: road[i], time: time[road[i]] };
    }
  }
  const ans = [road];
  const state = road.split("");
  while (n--) {
    for (const light in lights) {
      if (--lights[light].time === 0) {
        lights[light].color = seq[lights[light].color];
        lights[light].time = time[lights[light].color];
      }
    }
    for (let car = state.length - 1; car >= 0; car--) {
      if (state[car] === "C") {
        if (state[car + 1] === "." && !(car + 1 in lights)) {
          [state[car], state[car + 1]] = [state[car + 1], state[car]];
        } else if (
          car + 1 in lights &&
          lights[car + 1].color === "G" &&
          state[car + 2] !== "C"
        ) {
          [state[car], state[car + 1]] = [".", "C"];
        } else if (!state[car + 1]) {
          state[car] = ".";
        }
      }
    }
    for (const light in lights) {
      if (state[light] !== "C") {
        state[light] = lights[light].color;
      }
    }
    ans.push(state.join(""));
  }
  return ans;
} // trafficLights()

console.log(trafficLights("CCC.G...R...", 16));
console.log(trafficLights("CRCRCRCR", 18));
