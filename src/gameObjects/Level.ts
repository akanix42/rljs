import Tile from "./Tile";
import { IPoint } from "./IPoint";
export default class Level {
  static create(size: IPoint) {
    const map = initializeMap(size);
    const level = new Level(map);
    // level.map = map;

    return level;
  }


  private constructor(private map: Tile[][]) {

  }

  getTile(point: IPoint) {
    return this.map[point.x][point.y];
  }
}

function initializeMap(size: IPoint) {
  const map: Tile[][] = [];
  for (let x = 0; x < size.x; x++) {
    map[x] = [];
  }
  return map;
}
