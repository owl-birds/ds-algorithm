// BIG O
const sum_char_codes = (str: string): number => {
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }
  return sum;
}; // ---> O(n) -->> the algorithm's growth is linear
console.log(`ABCDEFG -> ${sum_char_codes("ABCDEFG")}`);
