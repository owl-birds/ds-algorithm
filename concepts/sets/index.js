"use strict";
exports.__esModule = true;
var MySet = /** @class */ (function () {
    function MySet() {
        //
        this.collection = [];
        this.size = 0;
    }
    //
    MySet.prototype.isExist = function (element) {
        return !(this.collection.indexOf(element) === -1);
    };
    MySet.prototype.insert = function (element) {
        if (this.isExist(element)) {
            return false;
        }
        this.collection.push(element);
        // adding by one the size of set
        this.size += 1;
        return true;
    };
    MySet.prototype.getSet = function () {
        return this.collection;
    };
    MySet.prototype.removeElement = function (element) {
        if (!this.isExist(element))
            return false;
        this.collection = this.collection.filter(function (ele) { return ele !== element; });
        // decreasing by one size of set
        this.size -= 1;
        return true;
    };
    MySet.prototype.concatenateOtherSet = function (
    // or union
    otherSet, isReturnNewSet) {
        var _this = this;
        if (isReturnNewSet === void 0) { isReturnNewSet = true; }
        // or returnning a new set
        if (isReturnNewSet) {
            var tempSet_1 = new MySet();
            for (var _i = 0, _a = this.collection; _i < _a.length; _i++) {
                var element = _a[_i];
                tempSet_1.insert(element);
            }
            otherSet.getSet().forEach(function (element) {
                // if (!this.isExist(element)) {
                if (!tempSet_1.isExist(element)) {
                    tempSet_1.insert(element);
                    _this.collection.push(element);
                }
            });
            return tempSet_1;
        }
        //
        else {
            otherSet.getSet().forEach(function (element) {
                if (!_this.isExist(element))
                    _this.collection.push(element);
            });
            return this.collection;
        }
    };
    MySet.prototype.intersectOtherSet = function (otherSet) {
        // const tempIntersectResult: Array<any> = [];
        var tempIntersectResult = new MySet();
        for (var _i = 0, _a = otherSet.getSet(); _i < _a.length; _i++) {
            var element = _a[_i];
            if (this.isExist(element))
                tempIntersectResult.insert(element);
        }
        return tempIntersectResult;
    };
    MySet.prototype.isSubsetOf = function (otherSet) {
        for (var _i = 0, _a = this.collection; _i < _a.length; _i++) {
            var element = _a[_i];
            if (!otherSet.isExist(element))
                return false;
        }
        return true;
    };
    MySet.prototype.differenceToOtherSet = function (otherSet) {
        // const tempDifferences: Array<any> = [];
        var tempDifferences = new MySet();
        for (var _i = 0, _a = otherSet.getSet(); _i < _a.length; _i++) {
            var element = _a[_i];
            // if (!this.isExist(element)) tempDifferences.push(element);
            if (!this.isExist(element))
                tempDifferences.insert(element);
        }
        return tempDifferences;
    };
    return MySet;
}());
var mySet1 = new MySet();
console.log(mySet1.getSet());
mySet1.insert(90);
console.log(mySet1.getSet());
mySet1.insert(190);
console.log(mySet1.getSet());
mySet1.insert(490);
console.log(mySet1.getSet());
mySet1.insert(999);
console.log(mySet1.getSet());
mySet1.removeElement(999);
console.log(mySet1.getSet());
var otherSet1 = new MySet();
otherSet1.insert(90);
otherSet1.insert(490);
otherSet1.insert(990);
otherSet1.insert(1490);
var superSet1 = new MySet();
superSet1.insert(1);
superSet1.insert(2);
superSet1.insert(3);
superSet1.insert(4);
superSet1.insert(90);
superSet1.insert(190);
superSet1.insert(490);
superSet1.insert(999);
//
var tempConcatenate = mySet1.concatenateOtherSet(otherSet1, 
//
true);
console.log(tempConcatenate);
console.log(mySet1.getSet());
console.log("other set ".concat(otherSet1.getSet()));
console.log(mySet1.intersectOtherSet(otherSet1).getSet() + "intersect");
console.log(superSet1);
console.log(mySet1);
console.log(mySet1.isSubsetOf(superSet1));
console.log(superSet1.isSubsetOf(mySet1));
//
console.log("Diffetence to other set");
console.log("set 1 : ".concat(mySet1.getSet()));
console.log("set 2 : ".concat(otherSet1.getSet()));
console.log("difference set 1 to set 2 : ".concat(mySet1
    .differenceToOtherSet(otherSet1)
    .getSet()));
console.log("difference set 2 to set 1 : ".concat(otherSet1
    .differenceToOtherSet(mySet1)
    .getSet()));
mySet1.insert(9999999);
console.log(mySet1.getSet());
console.log(mySet1.getSet().length);
console.log(mySet1.size);
//
var tempMySet1 = new MySet();
tempMySet1.insert("WTF");
tempMySet1.insert("WTF");
tempMySet1.insert("WT!!!!!!!!");
tempMySet1.insert(1490);
tempMySet1.insert(1499);
var concatetanet = tempMySet1.concatenateOtherSet(otherSet1);
console.log(concatetanet);
console.log(tempMySet1.getSet());
console.log("other set ".concat(otherSet1.getSet()));
