export interface Input {
  start: number[];
  finish: number[];
}

export interface Queue {
  coords: number[];
  distance: number;
}

export type Find = (grid: number[][], input: Input) => any;
