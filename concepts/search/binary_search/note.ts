const bin_search_asc = (haystack: number[], needle: number): boolean => {
  let l: number = 0;
  let r: number = haystack.length;

  while (l < r) {
    const m: number = Math.floor((l + r) / 2);
    // console.log(m);
    if (haystack[m] === needle) return true;
    if (haystack[m] > needle) {
      r = m;
      continue;
    }
    // haystack[m] < needle
    l = m + 1;
  }
  //   console.log(l);
  // return haystack[l] === needle;
  return false;
};
console.log(bin_search_asc([12, 13, 21, 32, 54, 76, 99], 9));
console.log(bin_search_asc([12, 13, 21, 32, 54, 76, 99], 99));
console.log(bin_search_asc([12, 13, 21, 32, 54, 76, 99], 76));
console.log(bin_search_asc([12, 13, 21, 32, 54, 76, 99], 12));
console.log(bin_search_asc([12, 13, 21, 32, 54, 76, 99], 32));
console.log(bin_search_asc([12, 13, 21, 32, 54, 76, 99], 54));
console.log(bin_search_asc([12, 13, 21, 32, 54, 76, 99], -90));
