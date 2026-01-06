import { EmitEvent, GlobalEvent, PageArgs } from '@/logic/common/GlobalEvent';
import { PageStack, PageStackType } from '@/model/PageStack';
import { computed, ComputedRef } from 'vue';

export class TopLogic {
  public currentPageName: ComputedRef<string>;

  constructor() {
    this.currentPageName = computed(() => {
      return PageStack.Instance.currentPageName.value;
    });
    this.registerEvents();
  }

  private registerEvents(): void {
    const globalEvent = GlobalEvent.Instance;

    globalEvent.on(EmitEvent.ChangeScreen, (page: PageArgs) => {
      this.handleChangeScreen(page.Name, page.Type);
    });
  }

  private handleChangeScreen(name: string, type: PageStackType): void {
    PageStack.Instance.manageStack(name, type);

    if (PageStack.Instance.currentPageName.value != name) {
      PageStack.Instance.changeScreen(name);
    } else {
      // do nothing
    }
  }
}
