# Recursion

-> the simp lest way: recursion is a function that calls itself untill the problem is solved.

-> this usually involved what is refered as a "base case", A base case is the point in which the problem is solved at.

### recusion simple example

```ts
// SUM from 1 to n
const sum_till_n = (n: number): number => {
  if (n === 1) return 1; // THIS IS THE BASE CASE
  return n + sum_till_n(n - 1); // RECURSE
};
```

# RECURSION STEP

- PRE
- RECURSE
- POST

1. NEED SOLID BASE CASE
1. AND RECURSE

# PATH FINDING: Base Case

### MazesSolver

list of string

[

"#######E##",

"#####---##",

"#-----####",

"#S########",

]

S : START

E : ENDING

\- : path

\# : walls

how we gonna solve the maze

for every position in the maze u can go in 4 directions

- up
- down
- right
- left

THE BASE CASE

1. its a wall
2. off the map
3. its the end (E)
4. if we have seen it (the position before)

--> go on all directions
