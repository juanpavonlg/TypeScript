export function minUmbrellas(weather: string[]): number {
  let umbrellas = [0, 0];
  for (let i = 0; i < weather.length; i++) {
    if (["rainy", "thunderstorms"].includes(weather[i])) {
      const curr = i % 2;
      const next = 1 - curr;
      if (umbrellas[curr] > 0) {
        umbrellas[curr]--;
      }
      umbrellas[next]++;
    }
  }
  return umbrellas[0] + umbrellas[1];
} // minUmbrellas()

console.log(minUmbrellas(["rainy", "clear", "rainy", "cloudy"]));
console.log(minUmbrellas(["sunny", "windy", "sunny", "clear"]));
console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]));
