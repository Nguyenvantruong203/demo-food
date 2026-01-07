import { SplashMock } from './SplashMock';
import { Splash } from '@/model/Splash';

export class SplashService {
  private source = new SplashMock();

  async getList(): Promise<Splash[]> {
    return this.source.getConfig();
  }
}