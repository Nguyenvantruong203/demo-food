import { IService } from './IService';
import splashData from '@/dummy-data/SplashConfig.json';

export class Mock implements IService {

  GetConfig(): string {
    return JSON.stringify({
      env: 'mock',
    });
  }

  GetSplashList(): string {
    return JSON.stringify(splashData);
  }
}
