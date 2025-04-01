export class Dinglemouse {
  constructor(private firstName: string, private lastName: string) {} // constructor()

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  } // getFullName()
} // Dinglemouse()

console.log(new Dinglemouse("Clint", "Eastwood").getFullName());
