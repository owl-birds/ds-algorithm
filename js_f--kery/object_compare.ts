// JS references : https://dmitripavlutin.com/value-vs-reference-javascript/

// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
const hero1 = {
  name: "Batman",
};
const hero2 = {
  name: "Batman",
};

// 1.The strict equality operator ===
// 2.The loose equality operator ==
// 3.Object.is() function

// JS
// COMPARE Object by references
// JavaScript compares objects by reference, not value.

// When using the strict comparison operator ===,
// 2 variables having values are equal if they have
// the same value.All of the below comparisons are
// equal:
// 1 === 1
const aa = 1;
const bb = 1;
console.log("aa===bb", aa === bb);
// But the comparison operator === works differently
// when comparing references. 2 references are equal
// only if they reference exactly the same object.
const ar1 = [1];
const ar2 = [1];

console.log(ar1 === ar2); // false
console.log(ar1 === [1]); // false

const ar11 = ar1;
console.log(ar1 === ar11); // true
console.log(ar1 === ar1); // true

console.log("hero1===hero1 : ", hero1 === hero1);
// => true
console.log("hero1===hero2 : ", hero1 === hero2);
// => false

console.log("hero1==hero1 : ", hero1 == hero1);
// => true
console.log("hero1==hero2 : ", hero1 == hero2);
// => false

console.log("Object.is(hero1,hero1) : ", Object.is(hero1, hero1)); // => true
console.log("Object.is(hero1, hero2) : ", Object.is(hero1, hero2)); // => false
