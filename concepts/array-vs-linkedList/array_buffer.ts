class ArrBuff {
  protected container: (number | string | boolean)[];
  protected head: number;
  protected tail: number;

  constructor(length: number = 10) {
    // must have lenght 10 min
    if (length === undefined || length <= 10) {
      this.container = new Array(10);
    } else {
      this.container = new Array(length);
    }
    this.head = 0;
    this.tail = Math.floor(this.container.length / 2);
  }

  push(item: number | string | boolean): void {}
  pop() {}
  shift() {}
  unshift() {}
  slice() {}
}
