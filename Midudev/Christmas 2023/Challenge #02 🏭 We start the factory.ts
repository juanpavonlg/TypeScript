function manufacture(gifts: string[], materials: string) {
  return gifts.filter((gift) => [...gift].every((e) => materials.includes(e)));
} // manufacture()

let gifts = ["tren", "oso", "pelota"];
let materials = "tronesa";
console.log(manufacture(gifts, materials));
gifts = ["juego", "puzzle"];
materials = "jlepuz";
console.log(manufacture(gifts, materials));
gifts = ["libro", "ps5"];
materials = "psli";
console.log(manufacture(gifts, materials));
