import { IPoint } from '../gameObjects/IPoint';
import Component from "components/Component";

export default class PositionComponent extends Component {
  position: IPoint;
  levelId: number;
}
