import type { FindPath, Grid, Queue } from "./types";

export const findPath: FindPath = (grid, input) => {
  const { start, finish } = input;
  const [startX, startY] = start;
  const [finishX, finishY] = finish;

  // Usable direction possible for the bfs
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  const visitedTiles = generateVisitedGrid(grid);

  const source = { coords: start, distance: 0 };
  const queue: Queue[] = [source]; // start with [2,4]

  while (queue.length) {
    // Extract data of the first item of array
    const { coords, distance } = queue.shift()!;
    const [currentX, currentY] = coords;

    // TODO:
    // a conditional params `checkOnStart` boolean to overide start and finish
    // or check if start and finish are 0
    if (grid[startX][startY] === 0 || grid[finishX][finishY] === 0) {
      return {
        success: false,
        message: `Pas possible car la valeur à la position de début ou de fin est de 0`,
      };
    }

    // Victory
    if (currentX === finishX && currentY === finishY) {
      grid[currentX][currentY] = 7;

      return {
        distance,
        success: true,
        coords: [currentX, currentY],
        visitedTiles,
      };
    }

    // For each possible move
    for (let [moveX, moveY] of directions) {
      // Simulate movement input
      const nextX: number = currentX + moveX;
      const nextY: number = currentY + moveY;

      if (isValid(nextX, nextY, grid) && grid[nextX][nextY] === 1) {
        visitedTiles[nextX][nextY] = true;
        grid[nextX][nextY] = 9;
        queue.push({ coords: [nextX, nextY], distance: distance + 1 });
      }
    }
  }
  // Defeat
  return { success: false, message: "Impossible" };
};

function isValid(x: number, y: number, grid: Grid) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid.length;
}

function generateVisitedGrid(grid: Grid) {
  const rows = new Array(grid.length).fill("");
  return rows.map((_, i) => new Array(grid[i].length).fill(false));
}
