class Counter {
  #value = 0;

  increment() {
    this.#value += 1;
  }

  get count() {
    return this.#value;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count);