import mitt from 'mitt';
import { ref, Ref } from 'vue';
import { PageStackType } from '@/model/PageStack';

export enum EmitEvent {
  ChangeScreen = 'change-screen',
  ShowDialog = 'show-dialog',
  HideDialog = 'hide-dialog',
  ConfirmDialog = 'confirm-dialog',
}

export class PageArgs {
  Name = '';
  Type: PageStackType = PageStackType.NoHistory;
  Data: any = null;
  Seconds = -1;
  IsForceClose = false;

  constructor(
    name: string,
    type: PageStackType,
    data: any = null,
    seconds = -1,
    isForceClose = false
  ) {
    this.Name = name;
    this.Type = type;
    this.Data = data;
    this.Seconds = seconds;
    this.IsForceClose = isForceClose;
  }
}

export class DialogArgs {
  title = '';
  message = '';
  onConfirm?: () => void;

  constructor(init?: Partial<DialogArgs>) {
    Object.assign(this, init);
  }
}

export class GlobalEvent {
  public static Instance: GlobalEvent;

  private readonly eventBus: any;
  // PAGE 
  private currentPageArgs: PageArgs | null = null;

  // DIALOG STATE 
  public dialogVisible: Ref<boolean> = ref(false);
  public dialogArgs: Ref<DialogArgs | null> = ref(null);

  constructor() {
    this.eventBus = mitt();

    // Dialog event binding 
    this.eventBus.on(EmitEvent.ShowDialog, (args: DialogArgs) => {
      this.dialogArgs.value = args;
      this.dialogVisible.value = true;
    });

    this.eventBus.on(EmitEvent.HideDialog, () => {
      this.dialogVisible.value = false;
      this.dialogArgs.value = null;
    });

    this.eventBus.on(EmitEvent.ConfirmDialog, () => {
      this.dialogArgs.value?.onConfirm?.();
      this.dialogVisible.value = false;
      this.dialogArgs.value = null;
    });
  }

  public static init() {
    if (!this.Instance) {
      this.Instance = new GlobalEvent();
    }
  }

  public on(event: string, callback: Function): void {
    this.eventBus.on(event, callback);
  }

  public off(event?: string, callback?: Function): void {
    this.eventBus.off(event, callback);
  }

  // NAVIGATION

  private emitChangeScreen(args: PageArgs) {
    this.currentPageArgs = args;
    this.eventBus.emit(EmitEvent.ChangeScreen, args);
  }

  public getCurrentPageArgs(): PageArgs | null {
    return this.currentPageArgs;
  }

  public goToStart() {
    this.emitChangeScreen(
      new PageArgs('start-page', PageStackType.NoHistory)
    );
  }

  public goToDetail(data: { splashId: number }) {
    this.emitChangeScreen(
      new PageArgs('detail-page', PageStackType.NoHistory, data)
    );
  }

  public back() {
    this.emitChangeScreen(
      new PageArgs('start-page', PageStackType.Back)
    );
  }

  // DIALOG 

  public showDialog(args: DialogArgs) {
    this.eventBus.emit(EmitEvent.ShowDialog, args);
  }

  public confirmDialog() {
    this.eventBus.emit(EmitEvent.ConfirmDialog);
  }

  public closeDialog() {
    this.eventBus.emit(EmitEvent.HideDialog);
  }
}
