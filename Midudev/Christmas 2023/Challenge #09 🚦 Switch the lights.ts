function adjustLights(lights: string[]) {
  function countChanges(lights: string[]) {
    const seq: { [key: string]: string } = { "🔴": "🟢", "🟢": "🔴" };
    let changes = 0;
    let next = seq[lights[0]];
    for (let i = 1; i < lights.length; i++) {
      if (lights[i] !== next) {
        changes++;
      }
      next = seq[next];
    }
    return changes;
  } // countChanges()

  return Math.min(countChanges(lights), countChanges(lights.reverse()));
} // adjustLights()

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
console.log(adjustLights(["🔴", "🔴", "🔴"]));
console.log(adjustLights(["🔴", "🟢", "🟢", "🔴", "🟢"]));
