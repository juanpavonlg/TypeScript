interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
} // IGeometricFigure

export class Square implements IGeometricFigure {
  private side: number;

  constructor(side: number) {
    this.side = side;
  } // constructor()

  area(): number {
    return this.side ** 2;
  } // area()

  perimeter(): number {
    return 4 * this.side;
  } // perimeter()
} // Square

export class Circle implements IGeometricFigure {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  } // constructor()

  area(): number {
    return Math.PI * this.radius ** 2;
  } // area()

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  } // perimeter()
} // Circle

const square = new Square(5);
console.log(square.area());
console.log(square.perimeter());
const circle = new Circle(1);
console.log(circle.area());
console.log(circle.perimeter());
