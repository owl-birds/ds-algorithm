// LEETCODE PROBLEMS
var MedianFinder = /** @class */ (function () {
    function MedianFinder() {
        this.arr = [];
    }
    MedianFinder.prototype.addNum = function (num) {
        if (this.arr.length === 0) {
            this.arr.push(num);
        }
        else {
            //   this.arr.push(num);
            //   this.arr.sort((a, b) => a - b);
            for (var i = 0; i < this.arr.length; i += 1) {
                if (num < this.arr[i] && i === 0) {
                    this.arr.splice(i, 0, num);
                    break;
                }
                else if (num === this.arr[i]) {
                    this.arr.splice(i, 0, num);
                    break;
                }
                else if (num > this.arr[i] && num < this.arr[i + 1]) {
                    this.arr.splice(i + 1, 0, num);
                    break;
                }
                else if (num > this.arr[i] && i === this.arr.length - 1) {
                    this.arr.splice(i + 1, 0, num);
                    break;
                }
            }
        }
    };
    MedianFinder.prototype.findMedian = function () {
        var median = this.arr.length % 2 === 0
            ? (this.arr[this.arr.length / 2 - 1] +
                this.arr[this.arr.length / 2 + 1 - 1]) /
                2
            : this.arr[Math.ceil(this.arr.length / 2) - 1];
        return median;
    };
    return MedianFinder;
}());
var newArr = new MedianFinder();
newArr.addNum(6);
newArr.addNum(10);
// newArr.addNum(9);
// newArr.addNum(9);
// newArr.addNum(4);
// newArr.addNum(6);
// newArr.addNum(9);
console.log(newArr.arr);
console.log(newArr.findMedian());
