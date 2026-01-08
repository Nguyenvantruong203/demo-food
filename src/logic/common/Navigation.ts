import { GlobalEvent, EmitEvent, PageArgs } from '@/logic/common/GlobalEvent';
import { PageStackType } from '@/model/PageStack';

export class Navigation {
  static changePage(
    name: string,
    type: PageStackType = PageStackType.NoHistory,
    data: any = null
  ) {
    GlobalEvent.Instance.emitEvent(
      EmitEvent.ChangeScreen,
      new PageArgs(name, type, data)
    );
  }

  static goToStart() {
    this.changePage('start-page', PageStackType.NoHistory);
  }

  static goToDetail(data: { splashId: number }) {
    this.changePage('detail-page', PageStackType.NoHistory, data);
  }

  static back() {
    this.changePage('start-page', PageStackType.Back);
  }
}
