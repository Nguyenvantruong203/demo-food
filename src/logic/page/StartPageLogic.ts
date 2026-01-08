import { Splash } from '@/model/Splash';
import { ServiceIF } from '@/services/ServiceIF';
import { GlobalEvent } from '@/logic/common/GlobalEvent';

export class StartPageLogic {
  splashList: Splash[] = [];

  activate() {
    this.splashList = ServiceIF.getSplashList();
  }

  onSelectSplash(item: Splash) {
    GlobalEvent.Instance.goToDetail({ splashId: item.id });
  }
}
