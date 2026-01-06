import { BaseMain } from './BaseMain';

class Main extends BaseMain {
  protected requireBusinessCSS(): void {
    super.requireBusinessCSS();

    require('@/assets/css/base-style.css');
  }

  protected requireBusinessLogic(): void {
    super.requireBusinessLogic();
  }

  protected requireBusinessAudio(): void {
    super.requireBusinessAudio();
  }
}

const main = new Main();
main.setup();
