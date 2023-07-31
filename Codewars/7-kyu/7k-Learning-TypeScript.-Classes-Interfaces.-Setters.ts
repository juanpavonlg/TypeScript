declare var ICuboid: {
  new (length: number): ICuboid;
}

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  constructor(public length: number) {

  } // constructor()

  get surfaceArea(): number {
    return 6 * this.length ** 2;
  } // surfaceArea()

  get volume(): number {
    return this.length ** 3;
  } // volume()

  set surfaceArea(surfaceArea: number) {
    this.length = Math.sqrt(surfaceArea / 6);
  } // surfaceArea()

  set volume(volume: number) {
    this.length = volume ** (1 / 3);
  } // volume()
} // Cube

const cube = new Cube(4);
console.log(cube.surfaceArea);
console.log(cube.volume);
cube.volume = 27;
console.log(cube.length);
console.log(cube.surfaceArea);
cube.surfaceArea = 54;
console.log(cube.length);
console.log(cube.volume);