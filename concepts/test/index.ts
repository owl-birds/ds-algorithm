// LEETCODE PROBLEMS

// maybe u can do it like this
interface Value {
  num: number;
  freq: number;
}
class MedianFinder {
  arr: number[] = [];
  // interesting idea
  // using js object, we save the frequency of the number
  container = {}; // but sorting the value become a problem;
  container2: Array<Value> = [];
  constructor() {}

  addNum(num: number): void {
    if (this.arr.length === 0) {
      this.arr.push(num);
    } else {
      //   this.arr.push(num);
      //   this.arr.sort((a, b) => a - b);
      for (let i = 0; i < this.arr.length; i += 1) {
        if (num < this.arr[i] && i === 0) {
          this.arr.splice(i, 0, num);
          break;
        } else if (num === this.arr[i]) {
          this.arr.splice(i, 0, num);
          break;
        } else if (num > this.arr[i] && num < this.arr[i + 1]) {
          this.arr.splice(i + 1, 0, num);
          break;
        } else if (num > this.arr[i] && i === this.arr.length - 1) {
          this.arr.splice(i + 1, 0, num);
          break;
        }
      }
    }
  }

  findMedian(): number {
    const median: number =
      this.arr.length % 2 === 0
        ? (this.arr[this.arr.length / 2 - 1] +
            this.arr[this.arr.length / 2 + 1 - 1]) /
          2
        : this.arr[Math.ceil(this.arr.length / 2) - 1];
    return median;
  }
}
const newArr = new MedianFinder();
newArr.addNum(6);
newArr.addNum(10);
// newArr.addNum(9);
// newArr.addNum(9);
// newArr.addNum(4);
// newArr.addNum(6);
// newArr.addNum(9);

console.log(newArr.arr);
console.log(newArr.findMedian());
