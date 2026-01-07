import { Splash } from '@/model/Splash';
import { SplashService } from '@/services/SplashService';
import { EmitEvent, GlobalEvent, PageArgs } from '../common/GlobalEvent';
import { PageStackType } from '@/model/PageStack';
import { RuntimeStore } from '../common/RuntimeStore';

export class StartPageLogic {
  private service = new SplashService();

  splashList: Splash[] = [];
  currentIndex = 0;

  async activate() {
    this.splashList = await this.service.getList();
  }

  get current(): Splash | null {
    return this.splashList[this.currentIndex] ?? null;
  }

  get title(): string {
    return this.current?.title ?? '';
  }

  get content(): string {
    return this.current?.content ?? '';
  }

  get image(): string {
    return this.current?.image ?? '';
  }

  onSplashClick = (item: Splash) => {
    console.log('CLICK ID:', item.id);

    RuntimeStore.currentSplashId = item.id;

    GlobalEvent.Instance.emitEvent(
      EmitEvent.ChangeScreen,
      new PageArgs('detail-page', PageStackType.NoHistory)
    );
  };

}
