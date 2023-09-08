// simple recusion example

// SUM from 1 to n
const sum_till_n = (n: number): number => {
  if (n === 1) return 1;
  return n + sum_till_n(n - 1);
};

// MAZE SOLVER
interface Point {
  x: number;
  y: number;
}
// base cases: requires us to know where
//             we re currently at
// recurse cases: walk in directions
// THE BASE CASE

// 1. its a wall
// 2. off the map
// 3. its the end (E)
// 4. if we have seen it (the position before)
const walk = (
  maze: string[], //
  wall: string,
  curr: Point, // where we are
  end: Point // ENDING
): boolean => {
  // BASE CASE
  // 1. its a wall
  // 2. off the map
  // 3. its the end (E)
  // 4. if we have seen it (the position before)
};
const maze_solver = (
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
  path: string
): Point[] => {
  /*
      [
        "########E",
        "#--------",
        "#S#######"
      ]
      # wall
      - path
      S start
      E end
   */
};

// TEST
console.log("1->3 : ", sum_till_n(3));
console.log("1->5 : ", sum_till_n(5));
console.log("1->10 : ", sum_till_n(10));
