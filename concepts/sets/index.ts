class MySet {
  //
  protected collection: Array<any> = [];
  size: number = 0;
  //
  isExist(element: any): boolean {
    return !(this.collection.indexOf(element) === -1);
  }
  insert(element: any): boolean {
    if (this.isExist(element)) {
      return false;
    }
    this.collection.push(element);
    // adding by one the size of set
    this.size += 1;
    return true;
  }
  getSet(): Array<any> {
    return this.collection;
  }
  removeElement(element: any): boolean {
    if (!this.isExist(element)) return false;
    this.collection = this.collection.filter((ele) => ele !== element);
    // decreasing by one size of set
    this.size -= 1;
    return true;
  }
  concatenateOtherSet(
    // or union
    otherSet: MySet,
    isReturnNewSet: boolean = true
  ): Array<any> | MySet {
    // or returnning a new set
    if (isReturnNewSet) {
      const tempSet = new MySet();
      for (let element of this.collection) tempSet.insert(element);
      otherSet.getSet().forEach((element: any) => {
        // if (!this.isExist(element)) {
        if (!tempSet.isExist(element)) {
          tempSet.insert(element);
          this.collection.push(element);
        }
      });
      return tempSet;
    }
    //
    else {
      otherSet.getSet().forEach((element: any) => {
        if (!this.isExist(element)) this.collection.push(element);
      });
      return this.collection;
    }
  }
  intersectOtherSet(otherSet: MySet): MySet {
    // const tempIntersectResult: Array<any> = [];
    const tempIntersectResult: MySet = new MySet();
    for (let element of otherSet.getSet()) {
      if (this.isExist(element)) tempIntersectResult.insert(element);
    }
    return tempIntersectResult;
  }
  isSubsetOf(otherSet: MySet): boolean {
    for (let element of this.collection) {
      if (!otherSet.isExist(element)) return false;
    }
    return true;
  }
  differenceToOtherSet(otherSet: MySet): MySet {
    // const tempDifferences: Array<any> = [];
    const tempDifferences: MySet = new MySet();
    for (let element of otherSet.getSet()) {
      // if (!this.isExist(element)) tempDifferences.push(element);
      if (!this.isExist(element)) tempDifferences.insert(element);
    }
    return tempDifferences;
  }
}

const mySet1 = new MySet();
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

const otherSet1 = new MySet();
otherSet1.insert(90);
otherSet1.insert(490);
otherSet1.insert(990);
otherSet1.insert(1490);
const superSet1 = new MySet();
superSet1.insert(1);
superSet1.insert(2);
superSet1.insert(3);
superSet1.insert(4);
superSet1.insert(90);
superSet1.insert(190);
superSet1.insert(490);
superSet1.insert(999);

//
const tempConcatenate = mySet1.concatenateOtherSet(
  otherSet1,
  //
  true
);
console.log(tempConcatenate);
console.log(mySet1.getSet());
console.log(`other set ${otherSet1.getSet()}`);
console.log(mySet1.intersectOtherSet(otherSet1).getSet() + "intersect");
console.log(superSet1);
console.log(mySet1);
console.log(mySet1.isSubsetOf(superSet1));
console.log(superSet1.isSubsetOf(mySet1));
//
console.log("Diffetence to other set");
console.log(`set 1 : ${mySet1.getSet()}`);
console.log(`set 2 : ${otherSet1.getSet()}`);
console.log(
  `difference set 1 to set 2 : ${mySet1
    .differenceToOtherSet(otherSet1)
    .getSet()}`
);
console.log(
  `difference set 2 to set 1 : ${otherSet1
    .differenceToOtherSet(mySet1)
    .getSet()}`
);

mySet1.insert(9999999);
console.log(mySet1.getSet());
console.log(mySet1.getSet().length);
console.log(mySet1.size);

//
const tempMySet1 = new MySet();
tempMySet1.insert("WTF");
tempMySet1.insert("WTF");
tempMySet1.insert("WT!!!!!!!!");
tempMySet1.insert(1490);
tempMySet1.insert(1499);
const concatetanet = tempMySet1.concatenateOtherSet(otherSet1);
console.log(concatetanet);
console.log(tempMySet1.getSet());
console.log(`other set ${otherSet1.getSet()}`);

export {};
