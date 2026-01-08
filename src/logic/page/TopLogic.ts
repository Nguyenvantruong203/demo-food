import { EmitEvent, GlobalEvent, PageArgs } from '@/logic/common/GlobalEvent';
import { PageStack, PageStackType } from '@/model/PageStack';
import { computed, ComputedRef } from 'vue';

export class TopLogic {
  public currentPageName: ComputedRef<string>;

  constructor() {
    this.currentPageName = computed(
      () => PageStack.Instance.currentPageName.value
    );

    this.registerEvents();
  }

  private registerEvents(): void {
    GlobalEvent.Instance.on(
      EmitEvent.ChangeScreen,
      (page: PageArgs) => {
        this.handleChangeScreen(page);
      }
    );
  }

  private handleChangeScreen(page: PageArgs): void {
    PageStack.Instance.manageStack(page.Name, page.Type);

    if (PageStack.Instance.currentPageName.value !== page.Name) {
      PageStack.Instance.changeScreen(page.Name);
    }
  }
}
