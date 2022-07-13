"use strict";
exports.__esModule = true;
// making stack
var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = {};
        this.length = 0;
    }
    Stack.prototype.push = function (newValue) {
        this.length += 1;
        this.storage[this.length] = newValue;
    };
    Stack.prototype.pop = function () {
        if (this.length <= 0)
            return undefined;
        var poppedValue = this.storage[this.length];
        delete this.storage[this.length];
        this.length -= 1;
        return poppedValue;
    };
    Stack.prototype.stackLength = function () {
        return this.length;
    };
    Stack.prototype.peek = function () {
        // peeking to the top of the stack
        return this.storage[this.length];
        console.log("the top of the stack : ".concat(this.storage[this.length]));
    };
    return Stack;
}());
var Stack2 = /** @class */ (function () {
    function Stack2() {
        this.storage = [];
        this.length = 0;
    }
    Stack2.prototype.push = function (newValue) {
        this.storage[this.length] = newValue;
        this.length += 1;
    };
    Stack2.prototype.pop = function () {
        if (this.length <= 0)
            return undefined;
        var poppedValue = this.storage[this.length - 1];
        this.storage.length = this.length - 1;
        this.length -= 1;
        return poppedValue;
    };
    Stack2.prototype.peek = function () {
        console.log("The stack : ".concat(this.storage));
    };
    Stack2.prototype.stackLength = function () {
        return this.length;
    };
    return Stack2;
}());
// const tempStack = new Stack2();
var tempStack = new Stack();
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
