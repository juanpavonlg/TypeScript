export class Potion {
  constructor(public color: [number, number, number], public volume: number) {
  } // constructor()

  mix(potion: Potion): Potion {
    const color: [number, number, number] = [0, 0, 0];
    const volume = this.volume + potion.volume;
    color.forEach((_, i) => {
      color[i] = Math.ceil(
        (this.color[i] * this.volume + potion.color[i] * potion.volume) /
          volume
      );
    });
    return new Potion(color, volume);
  } // mix()
} // Potion

let potion = new Potion([255, 255, 0], 10).mix(new Potion([0, 254, 0], 5));
console.log(potion.color, potion.volume);
potion = new Potion([255, 255, 255], 7).mix(new Potion([51, 102, 51], 12));
console.log(potion.color, potion.volume);
potion = new Potion([153, 210, 199], 32).mix(new Potion([135, 34, 0], 17));
console.log(potion.color, potion.volume);
