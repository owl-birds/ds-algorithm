// making stack
class Stack {
  protected storage: { [idx: number]: number } = {};
  protected length: number = 0;
  push(newValue: any): void {
    this.length += 1;
    this.storage[this.length] = newValue;
  }
  pop(): any {
    if (this.length <= 0) return undefined;
    const poppedValue = this.storage[this.length];
    delete this.storage[this.length];
    this.length -= 1;
    return poppedValue;
  }
  stackLength(): number {
    return this.length;
  }
  peek(): number {
    // peeking to the top of the stack
    return this.storage[this.length];
    console.log(`the top of the stack : ${this.storage[this.length]}`);
  }
}
class Stack2 {
  protected storage: Array<any> = [];
  protected length: number = 0;
  push(newValue: any): void {
    this.storage[this.length] = newValue;
    this.length += 1;
  }
  pop(): any {
    if (this.length <= 0) return undefined;
    const poppedValue = this.storage[this.length - 1];
    this.storage.length = this.length - 1;
    this.length -= 1;
    return poppedValue;
  }
  peek(): void {
    console.log(`The stack : ${this.storage}`);
  }
  stackLength() {
    return this.length;
  }
}

// const tempStack = new Stack2();
const tempStack = new Stack();
// push
tempStack.push(23);
console.log(tempStack.peek());
tempStack.push("WGHAR");
console.log(tempStack.peek());
tempStack.push(99);
console.log(tempStack.peek());
// pop
console.log(tempStack.pop());
console.log(tempStack.pop());
console.log(tempStack.pop());
console.log(tempStack.pop());

// lenght
console.log(tempStack.stackLength());
tempStack.peek();
export {};
