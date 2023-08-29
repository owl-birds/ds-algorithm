// given two crystall balls taht will break if dropped
// from high enough distance. determine the exact spot
// in which it will break in the most optimized way

//Since there are two balls, we can use first ball to find an approximate breaking point by jumping by a certain amount in each loop(sqrt(n) in our case). We will do linear search in that interval to find the correct breaking position.

//
// --- >>> we have two balls :: O O
// we use the first crystal ball to find which distance
// will it break, the increment of the drop distance
// will bre increment by sqrt of n
// after we know which distance the ball broke
// we iterate starting before we inc the jump amount
//

export const two_crystal_ball = (breaks: boolean[]): number => {
  //
  const jump_amount: number = Math.floor(Math.sqrt(breaks.length));
  let i: number = 0;
  for (; i < breaks.length; i += jump_amount) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jump_amount; // starting distance for drop inc
  //   console.log("i->", i);
  //   console.log("jump->", jump_amount);
  for (let j = i; j <= i + jump_amount; j += 1) {
    //
    if (breaks[j]) {
      return j;
    }
  }
  return -1;
};

console.log(
  two_crystal_ball([false, false, false, false, false, true, true, true, true])
);
console.log(two_crystal_ball([false, false, true, true, true, true]));
console.log(two_crystal_ball([true, true, true, true]));

console.log(
  two_crystal_ball([false, false, false, false, false, true, true, true])
);
console.log(
  two_crystal_ball([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
  ])
);
