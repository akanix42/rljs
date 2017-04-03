import { entityManager } from '../CurrentGame';
import { IPoint } from "./IPoint";
import { IConstructor } from "gameObjects/IConstructor";
import { IComponent } from "components/Component";
export default class Tile {
  // static create(levelId: number, position: IPoint) {
  //   const tile = new Tile;
  //   tile.levelId = levelId;
  //   tile.position = position;
  //   return tile;
  // }

  entities: number[];

  constructor(private levelId: number, private position: IPoint) {

  }

  queryEntities<T>(componentType: IComponent<T>) {
    return this.entities
      .map(entityId => entityManager.getComponent(entityId, componentType))
      .filter(component => component !== undefined);

      // create component with reuse:
      // Component.for(entityId).create<IComponent<T>>();
      // ComponentCache.get(entityId, componentType) || new componentType()
      // Tile.CollidablesComponent.collidables: number[] = this.queryEntities(CollidableComponent).map(component=>component.entityId)
  }
}
