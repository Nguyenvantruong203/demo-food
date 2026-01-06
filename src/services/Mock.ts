import { IService } from './IService';

export class Mock implements IService {
  constructor() {
  }

  GetConfig(): string {
    return '';
  }
}
