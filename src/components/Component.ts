import { IConstructor } from "../gameObjects/IConstructor";

export default class Component {
  entityId: number;

  get name() {
    return this.constructor.name;
  }
}

export type IComponent<T> = IConstructor<T> & typeof Component;
