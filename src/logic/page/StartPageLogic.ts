import { Splash } from '@/model/Splash';
import { ServiceIF } from '@/services/ServiceIF';
import { Navigation } from '../common/Navigation';

export class StartPageLogic {

  splashList: Splash[] = [];

  activate() {
    this.splashList = ServiceIF.getSplashList();
  }

  onSelectSplash(item: Splash) {
    console.log('SELECT SPLASH ID:', item.id);
     Navigation.goToDetail({ splashId: item.id });
  }
}
