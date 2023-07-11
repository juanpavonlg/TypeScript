export class Cube {
  
  private _side: number;

  constructor(side: number = 0) {
    this._side = Math.abs(side);
  }

  public getSide(): number {
    return this._side;
  }

  public setSide(value: number) {
    this._side = Math.abs(value);
  }
} // Cube

const cube = new Cube(-5);
// cube.setSide(-7);
console.log(cube.getSide());
const cube2 = new Cube();
console.log(cube2.getSide());
