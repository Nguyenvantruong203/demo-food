import { IService } from './IService';
import { Splash } from '@/model/Splash';
import data from '@/dummy-data/SplashConfig.json';

export class SplashMock implements IService {
  GetConfig(): string {
    return JSON.stringify(data);
  }

  async getConfig(): Promise<Splash[]> {
    return data as Splash[];
  }
}
