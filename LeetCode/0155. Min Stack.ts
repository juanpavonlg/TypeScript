class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  constructor() {} // constructor()

  push(val: number): void {
    this.stack.push(val);
    if (!this.minStack.length || val <= this.getMin()) {
      this.minStack.push(val);
    }
  } // push()

  pop(): void {
    const val = this.stack.pop();
    if (this.getMin() === val) {
      this.minStack.pop();
    }
  } // pop()

  top(): number {
    return this.stack[this.stack.length - 1];
  } // top()

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  } // getMin()
} // MinStack

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
