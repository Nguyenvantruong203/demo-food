import { IService } from './IService';
import { Mock } from './Mock';
import type { Splash } from '@/model/Splash';

declare let SVS: IService;

export class ServiceIF {
  private static TIF: IService =
    typeof SVS === 'undefined' ? new Mock() : SVS;

  static enableMock(): void {
    this.TIF = new Mock();
  }

  static getConfig(): any {
    return JSON.parse(this.TIF.GetConfig());
  }

  static getSplashList(): Splash[] {
    return JSON.parse(this.TIF.GetSplashList()) as Splash[];
  }
}
