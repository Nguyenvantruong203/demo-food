import mitt from 'mitt';
import { PageStackType } from '@/model/PageStack';

export enum EmitEvent {
  ChangeScreen = 'change-screen',
}

export class PageArgs {
  public Name: string = '';
  public Type: PageStackType = PageStackType.NoHistory;
  public Data: any = null;
  public Seconds: number = -1;
  public IsForceClose: boolean = false;

  constructor(
    name: string,
    type: PageStackType,
    data: any = null,
    seconds: number = -1,
    isForceClose: boolean = false
  ) {
    this.Name = name;
    this.Type = type;
    this.Data = data;
    this.Seconds = seconds;
    this.IsForceClose = isForceClose;
  }
}

export class GlobalEvent {
  public static Instance: GlobalEvent;

  private readonly eventBus: any;

  constructor() {
    this.eventBus = mitt();
  }

  public static init() {
    if (this.Instance == null) {
      this.Instance = new GlobalEvent();
    }
  }

  public on(event: string | string[], callback: Function): void {
    this.eventBus.on(event, callback);
  }

  public off(event?: string | string[], callback?: Function): void {
    this.eventBus.off(event, callback);
  }

  public emitEvent(event: string, ...args: any[]) {
    this.eventBus.emit(event, ...args);
  }

  public showStartPage(type = PageStackType.NoHistory) {
    this.eventBus.emit(
      EmitEvent.ChangeScreen,
      new PageArgs('start-page', type)
    );
  }
}
