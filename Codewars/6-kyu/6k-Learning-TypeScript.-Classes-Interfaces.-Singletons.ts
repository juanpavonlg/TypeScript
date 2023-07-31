export class SingletonCounter {
  private static singletonCounter: SingletonCounter;
  private counter: number;

  private constructor() {
    this.counter = 0;
  } // constructor()

  public static getInstance(): SingletonCounter {
    if (!SingletonCounter.singletonCounter) {
      SingletonCounter.singletonCounter = new SingletonCounter();
    }
    return SingletonCounter.singletonCounter;
  } // getInstance()

  public inc(): number {
    return ++this.counter;
  } // inc()
} // SingletonCounter

const counter1 = SingletonCounter.getInstance();
console.log(counter1.inc());
const counter2 = SingletonCounter.getInstance();
console.log(counter2.inc());
console.log(counter1 === counter2);
