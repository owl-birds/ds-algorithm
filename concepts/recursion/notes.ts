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

const dir = [
  [1, 0], // left
  [-1, 0], // right
  [0, 1], // up
  [0, -1], // down
];

const walk = (
  maze: string[], //
  wall: string,
  curr: Point, // where we are
  end: Point, // ENDING
  seen: boolean[][],
  // initiate seen as false for every position
  path: Point[]
): boolean => {
  // BASE CASE
  // 1. its a wall
  // 2. off the map
  // 3. its the end (E)
  // 4. if we have seen it (the position before)

  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }
  // its on the wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // its then end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  // if we have seen it (the position before)
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // !!!!!!!!!
  // the recursive case is completely different
  // then the base cases

  // recurse
  // pre
  path.push(curr);
  seen[curr.y][curr.x] = true;

  // recurse
  for (let d of dir) {
    const [x, y] = d;
    if (
      walk(
        maze,
        wall, //
        { x: curr.x + x, y: curr.y + y },
        end,
        seen,
        path
      )
    ) {
      return true;
    }
  }

  // post
  path.pop();

  return false; // we dont find the end
};
const maze_solver = (
  maze: string[],
  wall: string,
  start: Point,
  end: Point
  // path: string
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
  const path: Point[] = [];
  const seen: boolean[][] = [];
  for (let _r of maze) {
    const temp_row: boolean[] = [];
    for (let _p of _r) {
      temp_row.push(false);
    }
    seen.push(temp_row);
  }
  walk(maze, wall, start, end, seen, path);
  // console.log("seen", seen);
  return path;
};

// TEST
const maze_1 = [
  "########E", //
  "#--------",
  "#S#######",
];
const maze_2 = [
  "###--##-E", //
  "###--##-#", //
  "#-------#",
  "#S#######",
];
const maze_3 = [
  "###--##-E", //
  "#########", //
  "#-------#",
  "#S#######",
];
const maze_4 = [
  "#####---E", //
  "#-----###",
  "#S#######",
];
console.log("1->3 : ", sum_till_n(3));
console.log("1->5 : ", sum_till_n(5));
console.log("1->10 : ", sum_till_n(10));

console.log(
  "maze_1 ",
  maze_solver(maze_1, "#", { x: 1, y: 2 }, { x: 8, y: 0 })
);
console.log("maze_2", maze_solver(maze_2, "#", { x: 1, y: 2 }, { x: 8, y: 0 }));
console.log("maze_3", maze_solver(maze_3, "#", { x: 1, y: 2 }, { x: 8, y: 0 }));
console.log("maze_4", maze_solver(maze_4, "#", { x: 1, y: 2 }, { x: 8, y: 0 }));
