import { IService } from './IService';
import { Mock } from './Mock';

declare let SVS: IService;

export class ServiceIF {
  private static TIF: IService = typeof SVS == 'undefined' ? new Mock() : SVS;

  static enableMock(): void {
    this.TIF = new Mock();
  }

  static getConfig(): any {
    return JSON.parse(this.TIF.GetConfig());
  }
}
