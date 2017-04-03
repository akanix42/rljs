import IPoint from '../gameObjects/IPoint';
import Signal, { AbstractSignal } from "gameObjects/Signal";
import { IStringMap } from "gameObjects/IStringMap";

const events = {
    PrepareMove: Signal.create(function (entityId: number, position: IPoint): number { return 0; }),
    Move: Signal.create(function (entityId: number): number { return 0; }),
}

export default events;

