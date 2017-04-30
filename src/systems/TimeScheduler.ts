import Entity from '../gameObjects/Entity';
import Signal from '../gameObjects/Signal';

enum TimeSpent {
  WaitForSignal = -1
}

interface IEntitySchedule {
  entityId: number
  time: number
}

export default class TimeScheduler {
  static onAct = Signal.create(function (entityId: number): number { return 0; });
  static onS = Signal.create(function (entityId: number) { });

  private isRunning: boolean;
  private timetable: Array<IEntitySchedule>;
  private currentTime: number = 0;
  private currentIndex: number = 0;

  constructor() {
    Entity.onComponentAdded.watch(this.schedule.bind(this));
  }

  private schedule(entityId: number, timeDelta: number) {
    this.timetable.push({ entityId, time: this.currentTime + timeDelta });
  }

  run() {
    while (this.isRunning) {
      for (let i = this.currentIndex; i < this.timetable.length; i++) {
        const entry = this.timetable[i];
        this.currentTime = entry.time;
        this.currentIndex = i;
        const timeSpentOnAction = TimeScheduler.onAct.dispatch(entry.entityId);
        if (timeSpentOnAction === TimeSpent.WaitForSignal) {
          return;
        }
        this.schedule(entry.entityId, timeSpentOnAction);
        if (!this.isRunning) {
          return;
        }
      }
      this.clean();
    }
  }

  stop() {
    this.isRunning = false;
  }

  private clean() {
    this.currentIndex = 0;
  }
}
