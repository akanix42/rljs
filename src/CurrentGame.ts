import Level from './gameObjects/Level';
import { IComponent } from './components/Component';
import Entity from './gameObjects/Entity';


class EntityManager {
  entities: Map<number, Entity> = new Map;

  get(entityId: number) {
    return this.entities.get(entityId);
  }

  getComponent<T>(entityId: number, componentType: IComponent<T>) {
    const entity = this.get(entityId);
    if (!entity) return;

    return entity.getComponent(componentType);
  }
}


export const entityManager = new EntityManager();
export const levelManager: Map<number, Level> = new Map();
