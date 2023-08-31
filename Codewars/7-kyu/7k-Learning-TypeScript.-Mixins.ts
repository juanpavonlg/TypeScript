export class Serializable {
  serialize(): string {
    return JSON.stringify(this);
  } // serialize()

  deserialize(source: string): void {
    Object.assign(this, JSON.parse(source));
  } // deserialize()
} // Serializable

class Person implements Serializable {
  constructor(public firstName?: string, public lastname?: string) {} // constructor()

  // @ts-ignore strictPropertyInitialization
  serialize: () => string;

  // @ts-ignore strictPropertyInitialization
  deserialize: (source: string) => void;
} // Person

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
} // applyMixins()

applyMixins(Person, [Serializable]);

const person = new Person("Robert", "Oppenheimer");
const serializedPerson = person.serialize();
const deserializedPerson = new Person();
deserializedPerson.deserialize(serializedPerson);
console.log(serializedPerson);
console.log(deserializedPerson);

