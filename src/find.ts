import type { Find, Queue } from "./types";

function isValidCoord(x: number, y: number, grid: number[][]) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid.length;
}

export const find: Find = (grid, input) => {
  const { start, finish } = input;

  // Array for all possible directions
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], //right
  ];

  const queue: Queue[] = [];

  grid[2][4] = 9;

  const source = { coords: [...start], distance: 1 };

  queue.push(source);

  while (queue.length) {
    const {
      coords: [x, y],
      distance,
    } = queue.shift();

    for (let [moveX, moveY] of directions) {
      const nextX = x + moveX;
      const nextY = y + moveY;

      // Found the right paths
      if (nextX == finish[0] && nextY == finish[1]) {
        // return the path that led to the find
        console.log(grid);
        console.log("hit", [nextX, nextY], "distance", distance);
        return;
      }

      if (isValidCoord(nextX, nextY, grid) && grid[nextX][nextY] === 1) {
        grid[nextX][nextY] = 9;
        queue.push({ coords: [nextX, nextY], distance: distance + 1 });
      }

      // console.log(grid[2 + moveX][4 + moveY]);
    }
  }
};
