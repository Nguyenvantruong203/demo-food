import { Splash } from '@/model/Splash';
import { ServiceIF } from '@/services/ServiceIF';
import { EmitEvent, GlobalEvent, PageArgs } from '../common/GlobalEvent';
import { PageStackType } from '@/model/PageStack';

export class StartPageLogic {

  splashList: Splash[] = [];

  activate() {
    this.splashList = ServiceIF.getSplashList();
  }

  onSelectSplash(item: Splash) {
    console.log('SELECT SPLASH ID:', item.id);

    GlobalEvent.Instance.emitEvent(
      EmitEvent.ChangeScreen,
      new PageArgs(
        'detail-page',
        PageStackType.NoHistory,
        {
          splashId: item.id,
        }
      )
    );
  }
}
