import { findPath } from "./find";

// const grid = [
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 0, 0, 1, 1],
//   [0, 1, 1, 0, 1, 1],
//   [0, 1, 1, 1, 0, 1],
//   [1, 1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 0, 1],
// ];
const grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
];

console.log("Base grid:");
console.log(grid);
const result = findPath(grid, {
  start: [2, 4],
  finish: [1, 0],
});

if (!result.success) {
  console.log(result.message);
} else {
  console.log("0: Blocked tile");
  console.log("1: Available tile");
  console.log("9: BFS movements");
  console.log(result.grid);
  console.log();
  console.log(`Minimum distance is: ${result.distance}`);
}
