import type { FindPath, Grid, Queue } from "./types";

function isValid(x: number, y: number, grid: Grid) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid.length;
}

function generateVisitedMap(grid: Grid) {
  const rows = new Array(grid.length).fill("");
  return rows.map((_, i) => new Array(grid[i].length).fill(false));
}

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

  const source = { coords: start, distance: 1 };
  const visitedGrid = generateVisitedMap(grid);
  let queue: Queue | any[] = []; // [2,4]
  queue.push(source);

  while (queue.length) {
    // Vérifie les valeurs de départ
    if (grid[startX][startY] === 0 || grid[finishX][finishY] === 0) {
      return {
        success: false,
        message: `Pas possible car la valeur à la position de début ou de fin est de 0`,
      };
    }

    // Récupere les positions du 1er élément du tableau
    const currentPosition = queue.shift();

    const {
      coords: [currentX, currentY],
      distance,
    } = currentPosition;

    // Récuperation des mouvements
    // Pour chaque entrée du tableau direction
    for (let [moveX, moveY] of directions) {
      const nextX: number = currentX + moveX;
      const nextY: number = currentY + moveY;
      // Found finish coords

      // Victory condition
      if (nextX === finish[0] && nextY === finish[1]) {
        grid[nextX][nextY] = 7;

        return {
          distance,
          success: true,
          coords: [nextX, nextY],
          souceMap: visitedGrid,
        };
      }

      if (isValid(nextX, nextY, grid) && grid[nextX][nextY] === 1) {
        visitedGrid[nextX][nextY] = true;
        grid[nextX][nextY] = 9;
        queue.push({ coords: [nextX, nextY], distance: distance + 1 });
      }

      // Defeat
      // if (!queue.length && nextX !== end[0] && nextY !== end[1]) {
      //   console.log(`Pas possible, coincé LOL à la position [${x},${y}]`);
      //   grid[x][7] = 7;
      //   return;
      // }
    }
  }
  return { success: false };
};
