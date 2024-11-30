export function trafficLights(road: string, n: number): string[] {
  const seq: { [key: string]: string } = { G: "O", O: "R", R: "G" };
  const time: { [key: string]: number } = { G: 5, O: 1, R: 5 };
  const lights: { [key: number]: { color: string; time: number } } = {};
  for (let i = 0; i < road.length; i++) {
    if (road[i] in seq) {
      lights[i] = { color: road[i], time: time[road[i]] };
    }
  }
  const ans= [road];
  const state = road.split("");
  let car = road.indexOf("C");
  while (n--) {
    for (const light in lights) {
      lights[light].time--;
      if (lights[light].time === 0) {
        lights[light].color = seq[lights[light].color];
        lights[light].time = time[lights[light].color];
      }
      state[light] = lights[light].color;
    }
    if (car < state.length && (["G", "."].includes(state[car + 1]) || !state[car + 1])) {
      if (state[car] === "C") {
        state[car] = ".";
      }
      car++;
      if (car < state.length) {
        state[car] = "C";
      }
    }
    ans.push(state.join(""));
  }
  return ans;
} // trafficLights()

console.log(trafficLights("C...R............G......", 10));
console.log(trafficLights("CG...", 5));
