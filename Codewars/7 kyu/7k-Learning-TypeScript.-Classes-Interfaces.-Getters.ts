export class Cuboid {
  constructor(public length: number, public width: number, public height: number) {
   
  } // constructor()

  get surfaceArea(): number {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  } // surfaceArea()

  get volume(): number {
    return this.length * this.width * this.height;
  } // volume()
} // Cuboid

export class Cube extends Cuboid {
  constructor(length: number) {
    super(length, length, length);
  } // constructor()
} // Cube

const cuboid = new Cuboid(3, 4, 5);
console.log(cuboid.surfaceArea);
console.log(cuboid.volume);
const cube = new Cube(3);
console.log(cube.surfaceArea);
console.log(cube.volume);
