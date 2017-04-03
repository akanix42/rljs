import Component, { IComponent } from "components/Component";
import Signal from "gameObjects/Signal";

export default class Entity {
  static onComponentAdded = Signal.create(function (entityId: number, component: Component) { });

  id: number;
  components: Map<string, Component> = new Map;

  constructor() {
    this.id = 0;
  }

  addComponent(component: Component) {
    this.components.set(component.name, component);
    Entity.onComponentAdded.dispatch(this.id, component);
  }

  getComponent<T>(componentType: IComponent<T>): T | undefined {
    return this.components.get(componentType.name) as any as T;
  }
}
