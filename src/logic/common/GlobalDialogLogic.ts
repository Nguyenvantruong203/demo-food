import { ref } from 'vue';
import { GlobalEvent, EmitEvent } from '@/logic/common/GlobalEvent';
import type { DialogArgs } from '@/logic/common/Interaction';

export class GlobalDialogLogic {
  visible = ref(false);
  args = ref<DialogArgs | null>(null);

  constructor() {
    GlobalEvent.Instance.on(EmitEvent.ShowDialog, (args: DialogArgs) => {
      this.args.value = args;
      this.visible.value = true;
    });

    GlobalEvent.Instance.on(EmitEvent.HideDialog, () => {
      this.close();
    });
  }

  confirm() {
    this.args.value?.onConfirm?.();
    this.close();
  }

  close() {
    this.visible.value = false;
    this.args.value = null;
  }
}
