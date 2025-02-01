export abstract class Animal {
  /** @param {number} value The length of the animal in parrots. */
  protected constructor(public value: number) {}

  convertTo (someone: Animal): number {
    return this.value / someone.value;
  }
} // Animal

export class Boa extends Animal {
  constructor() {
    super(38);
  } // constructor()
} // Boa

export class Monkey extends Animal {
  constructor() {
    super(7.6);
  } // constructor()
} // Monkey

export class Parrot extends Animal {
  constructor() {
    super(1);
  } // constructor()
} // Parrot

const boa = new Boa();
const monkey = new Monkey();
const parrot = new Parrot();
console.log(boa.convertTo(boa));
console.log(boa.convertTo(monkey));
console.log(boa.convertTo(parrot));
console.log(monkey.convertTo(boa));
console.log(monkey.convertTo(monkey));
console.log(monkey.convertTo(parrot));
console.log(parrot.convertTo(boa));
console.log(parrot.convertTo(monkey));
console.log(parrot.convertTo(parrot));
