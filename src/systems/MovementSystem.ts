import { IPoint } from '../gameObjects/IPoint';
import Signal from "gameObjects/Signal";
import { entityManager, levelManager } from "CurrentGame";
import PositionComponent from "components/PositionComponent";

export default class MovementSystem {
  static onPrepareMove = Signal.create(function (entityId: number, position: IPoint): number { return 0; });
  static onMove = Signal.create(function (entityId: number, position: IPoint): number { return 0; });

  constructor() {
    MovementSystem.onMove.watch(this.move);
  }

  private move = (entityId: number, position: IPoint) => {

    return 0;
  }

  private checkForCollision(entityId: number, position: IPoint) {
    const entity = entityManager.get(entityId);
    if (!entity) return;

    const positionComponent = entity.getComponent(PositionComponent);
    if (!positionComponent) return;

    const level = levelManager.get(positionComponent.levelId);
    if (!level) return;
    const entities = level.getTile(position).queryEntities(CollidableComponent);

  }

}
