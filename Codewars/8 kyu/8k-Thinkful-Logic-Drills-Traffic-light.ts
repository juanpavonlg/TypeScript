export function updateLight(current: string): string {
  const lights: {[index: string]: string} = {red: "green", yellow: "red", green: "yellow"}
  return lights[current];
} // updateLight()

console.log(updateLight("green"));

