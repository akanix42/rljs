import BehaviorSystem from "systems/BehaviorSystem";
import ActorComponent from "components/ActorComponent";
import Entity from "gameObjects/Entity";
import { entityManager } from "CurrentGame";
import PositionComponent from "components/PositionComponent";
import { RNG } from "rot-js";
import MovementSystem from "systems/MovementSystem";

export default function aimlessWanderBehavior(actorComponent: ActorComponent, entity: Entity) {
  const positionComponent = entity.getComponent(PositionComponent);
  if (!positionComponent) return;
  const newPosition = { x: positionComponent.position + RNG.getUniformInt(-1, 1), y: positionComponent.position + RNG.getUniformInt(-1, 1) };
  MovementSystem.onMove.dispatch(entity.id, newPosition);
}

BehaviorSystem.behaviors.set('aimlessWander', aimlessWanderBehavior);
