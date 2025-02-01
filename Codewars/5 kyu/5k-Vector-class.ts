export class Vector {
  readonly #components;
  
  constructor(components: number[]) {
    this.#components = components;
  } // constructor()

  add(v: Vector) {
    this.#sameSize(v);
    return new Vector(this.#components.map((e, i) => e + v.#components[i]));
  } // add()

  #sameSize(v: Vector) {
    if (this.#components.length !== v.#components.length) {
      throw "Different lengths!"; 
    }
  } // #sameSize()

  subtract(v: Vector) {
    this.#sameSize(v);
    return new Vector(this.#components.map((e, i) => e - v.#components[i]));
  } // subtract()

  dot(v: Vector) {
    this.#sameSize(v);
    return this.#components.reduce((a, e, i) => a + e * v.#components[i], 0);
  } // dot()

  norm() {
    return Math.sqrt(this.#components.reduce((a, e) => a + e * e, 0));
  } // norm()

  toString() {
    return `(${this.#components.join()})`
  } // toString()

  equals(v: Vector) {
    return this.#components.every((e, i) => e === v.#components[i]);
  } // equals()
} // Vector

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);
console.log(a.add(b).toString());
console.log(a.subtract(b).toString());
console.log(a.dot(b));
console.log(a.norm());
// console.log(a.add(c));
console.log(a.toString());
console.log(a.equals(b));
