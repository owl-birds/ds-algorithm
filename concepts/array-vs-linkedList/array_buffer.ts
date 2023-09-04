class ArrBuff {
  protected container: (number | string | boolean)[];
  protected head: number;
  protected tail: number;

  constructor(length: number = 10) {
    this.container = new Array(length);
    this.head = Math.floor(this.container.length / 2);
    this.tail = Math.floor(this.container.length / 2);
  }

  push(item: number | string | boolean): void {
    if (this.head == this.tail) {
      this.container[this.tail] = item;
      this.tail += 1;
      return;
    }
    if (this.tail === this.container.length) {
    }
  }
  pop() {}
  shift() {}
  unshift() {}
  slice() {}
}
