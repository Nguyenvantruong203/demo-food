import { GlobalEvent, EmitEvent } from '@/logic/common/GlobalEvent';
export class DialogArgs {
  title = '';
  message = '';
  onConfirm?: () => void;

  constructor(init?: Partial<DialogArgs>) {
    Object.assign(this, init);
  }
}

export class Interaction {
  static showDialog(args: DialogArgs) {
    GlobalEvent.Instance.emitEvent(EmitEvent.ShowDialog, args);
  }

  static hideDialog() {
    GlobalEvent.Instance.emitEvent(EmitEvent.HideDialog);
  }
}