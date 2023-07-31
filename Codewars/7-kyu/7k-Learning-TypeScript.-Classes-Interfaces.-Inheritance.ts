declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string
  ): IAnimal;
}

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}

export class Animal implements IAnimal {
  constructor(public name: string, public age: number, public legs: number, public species: string, public status: string) {

  } // constructor()

  public introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
} // Animal

export class Shark extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 0, "shark", status);
  } // constructor()
} // Shark

export class Cat extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 4, "cat", status);
  } // constructor()

  public introduce(): string {
    return `${super.introduce()}  Meow meow!`; 
  } // introduce()
} // Cat

export class Dog extends Animal {
  constructor(name: string, age: number, status: string, public master: string) {
    super(name, age, 4, "dog", status);
  } // constructor()

  public greetMaster(): string {
    return `Hello ${this.master}`; 
  } // introduce()
} // Dog

const octopussy = new Animal("Octopussy", 2, 8, 'octopus', "I'm suffering a sting");
console.log(octopussy.introduce());
const shark = new Shark("Baby Shark", 3, "I'm hateful");
console.log(shark.introduce());
const cat = new Cat("Pushi", 20, "I'm an idiot");
console.log(cat.introduce());
const dog = new Dog("Vidú", 11, "Can't stop barking", "JP");
console.log(dog.introduce());
console.log(dog.greetMaster());
