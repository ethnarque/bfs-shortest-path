import { find } from "./find";

const grid = [
  [1, 1, 1, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
];

find(grid, { start: [2, 4], finish: [1, 0] });
