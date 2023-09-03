const bubble_sort_copy = (nums: number[], is_ascend: boolean = true) => {
  const new_nums: number[] = [...nums];

  let limit: number = new_nums.length;

  if (is_ascend) {
    while (limit > 0) {
      for (let i = 0; i < limit; i += 1) {
        if (new_nums[i] > new_nums[i + 1]) {
          const temp = new_nums[i];
          new_nums[i] = new_nums[i + 1];
          new_nums[i + 1] = temp;
        }
      }
      limit -= 1;
    }
  } else {
    while (limit > 0) {
      for (let i = 0; i < limit; i += 1) {
        if (new_nums[i] < new_nums[i + 1]) {
          const temp = new_nums[i];
          new_nums[i] = new_nums[i + 1];
          new_nums[i + 1] = temp;
        }
      }
      limit -= 1;
    }
  }

  return new_nums;
};

// SOME COMPLEXITIES
// N
// N-1
// N-2
// N-3
// ...
// N-N+1

// 1..100 :: the SUM ???

// 1..100 :: 1 + 100 = 101
// 2..99 :: 2 + 99 = 101
// 3..98 :: 3 + 98 = 101
// ...
// 50..51 :: 50 + 51 = 101
// the sum

// so there are fifty 101

// generalize :::> 101 x 50
// (N+1) N/2

console.log(bubble_sort_copy([1, 3, 7, 4, 2]));
console.log(bubble_sort_copy([1]));
console.log(bubble_sort_copy([]));
console.log(bubble_sort_copy([23, 12, 43, 2, 3, 5, 1, 3, 7, 4, 2]));
console.log(bubble_sort_copy([23, 12, 43, 2, 3, 5, 1, 3, 7, 4, 2], false));
