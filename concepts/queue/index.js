var Queue = /** @class */ (function () {
    function Queue(isUniqueQueue) {
        if (isUniqueQueue === void 0) { isUniqueQueue = false; }
        this.collections = [];
        this.isUniqueQueue = isUniqueQueue;
    }
    Queue.prototype.isExist = function (element) {
        return this.collections.indexOf(element) !== -1;
    };
    Queue.prototype.enter = function (element) {
        if (this.isUniqueQueue && this.isExist(element)) {
            return false;
        }
        this.collections.push(element);
        return true;
    };
    Queue.prototype.firstExit = function () {
        if (this.collections.length <= 0)
            return false;
        var tempQueue = this.collections[0];
        var tempCollections = [];
        for (var idx = 1; idx < this.collections.length; idx += 1) {
            tempCollections.push(this.collections[idx]);
        }
        this.collections = tempCollections;
        return tempQueue;
    };
    Queue.prototype.peek = function () {
        return this.collections[0];
    };
    Queue.prototype.peekAll = function () {
        return this.collections;
    };
    return Queue;
}());
var queue1 = new Queue(true);
queue1.enter("9999");
queue1.enter("user1");
queue1.enter("user1");
queue1.enter("user1");
queue1.enter("user2");
queue1.enter("user2");
console.log(queue1.peekAll());
queue1.firstExit();
console.log(queue1.peekAll());
queue1.firstExit();
console.log(queue1.peekAll());
queue1.firstExit();
console.log(queue1.peekAll());
console.log(queue1.firstExit());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.collections = [];
    }
    PriorityQueue.prototype.has = function (elementValue) {
        return true;
    };
    PriorityQueue.prototype.enter = function (element) {
        //enqueue
        if (!element.value || !element.priority) {
            return false;
        }
        var idx = 0;
        if (this.isEmpty()) {
            this.collections.splice(idx, 0, element);
            return true;
        }
        for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
            var queueE = _a[_i];
            if (element.priority > queueE.priority) {
                break;
            }
            idx += 1;
        } // find the idx
        this.collections.splice(idx, 0, element);
        return true;
    };
    PriorityQueue.prototype.firstExit = function () {
        // dequeue
        // if (this.collections.length <= 0) return false;
        if (this.isEmpty())
            return false;
        // because this is a priority queue;
        //
        var tempExitedElement = this.collections.shift();
        return tempExitedElement; // temporary
    };
    PriorityQueue.prototype.front = function () {
        return this.collections[0];
    };
    PriorityQueue.prototype.getQueue = function () {
        return this.collections;
    };
    PriorityQueue.prototype.length = function () {
        return this.collections.length;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.length() === 0;
    };
    return PriorityQueue;
}());
// let a: QueueElement = {
//   element: "WTF",
//   value: 90,
// };
// const a = [23, 43, 1, 32, 2, 43];
// a.sort((a, b) => a - b);
// console.log(a);
// a.sort((a, b) => b - a);
// console.log(a);
var a = [
    { element: 999, value: 89 },
    { element: 13, value: 19 },
    { element: 239, value: 999 },
    { element: 9, value: 9 },
    { element: 87, value: 59 },
    { element: 900, value: 9 },
];
a.sort(function (a, b) { return b.value - a.value; });
// console.log(a);
a.push({ element: 123, value: 9 });
a.push({ element: 9, value: 10 });
a.push({ element: 8, value: 10 });
a.push({ element: 8, value: 999 });
a.push({ element: 8, value: 89 });
//
a.push({ element: 18, value: 1000 });
a.push({ element: 28, value: 1001 });
a.push({ element: 38, value: 1000 });
a.push({ element: 48, value: 1001 });
//
a.sort(function (a, b) { return a.value - b.value; }); // cant
// cant be used to sort priority queue yet\
// still need to find how to make the same priority,
// then the first element of that array will
// out/served first, cause its got in first
// but first in is served/exit/out first
console.log(a);
console.log(a.filter(function (row) { return row.value === 1001; }));
console.log(a.filter(function (row) { return row.value === 1001; })[0]);
console.log(a[a.indexOf(a.filter(function (row) { return row.value === 1001; })[0])]);
// scuffed solution
// find every the same priority value, the first
// element will out first
var b = [1, 2, 3, 4, 5];
var tempB_sliced = b.splice(0, 2);
console.log(tempB_sliced);
console.log(b);
b.push.apply(b, tempB_sliced);
console.log(b);
console.log({ a: 99999 } === { a: 99999 });
console.log(a[a.length - 1]);
console.log(a.indexOf(a.filter(function (e) { return e.value === 1001 && e.element === 48; })[0]));
console.log(a[a.indexOf(a.filter(function (e) { return e.value === 1001 && e.element === 48; })[0])]);
var temp_find_a = { element: 48, value: 1001 };
console.log(a.indexOf(temp_find_a));
console.log(a.filter(function (e) { return e.value === 1000; }));
console.log(a[a.indexOf(a.filter(function (e) { return e.value === 1000; })[0])]);
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].splice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(1), 
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(3)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].length));
console.log(b);
// iterableStuff.splice(starting index, how many,
//               replace with (optional))
console.log(b.splice(0, 2, 9999));
console.log(b);
console.log(b.splice(2, 0, 1111));
console.log(b);
b.push(777777777777777);
console.log(b);
b.splice(b.length, 0, 22222);
console.log(b);
// const temp_popped = b.pop();
var temp_popped = b.shift();
console.log(b);
console.log(temp_popped);
// TESTING PRIORITY QUEUE
var priorityQueue1 = new PriorityQueue();
console.log(priorityQueue1.firstExit());
console.log(priorityQueue1.enter({ value: 999, priority: 89 }));
console.log(priorityQueue1.getQueue());
console.log(priorityQueue1.firstExit());
console.log(priorityQueue1.getQueue());
console.log(priorityQueue1.enter({ value: 999, priority: 89 }));
// console.log(priorityQueue1.enter({ value: 99, priority: 79 }));
console.log(priorityQueue1.enter({ value: 9, priority: 99 }));
// console.log(priorityQueue1.enter({ value: 10, priority: 99 }));
console.log(priorityQueue1.enter({ value: 2345, priority: 99 }));
console.log(priorityQueue1.enter({ value: 657, priority: 90 }));
console.log(priorityQueue1.getQueue());
console.log(priorityQueue1.firstExit());
console.log(priorityQueue1.getQueue());
console.log(priorityQueue1.firstExit());
console.log(priorityQueue1.getQueue());
console.log(priorityQueue1.firstExit());
console.log(priorityQueue1.firstExit());
console.log(priorityQueue1.firstExit());
