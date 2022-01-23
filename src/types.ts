export type Grid = number[][];

export interface Input {
  start: number[];
  finish: number[];
}

export interface Queue {
  coords: number[];
  distance: number;
}

export interface ErrorResult {
  message: string;
  coords: Queue["coords"];
}

export interface SuccessResult extends Queue {
  souceMap: boolean[][];
}

export interface Result extends Partial<Queue> {
  message?: string;
  success: boolean;
  souceMap?: boolean[][];
  grid: Grid;
}

export type FindPath = (map: number[][], input: Input) => Result;
