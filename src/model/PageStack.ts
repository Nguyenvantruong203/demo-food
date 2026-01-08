import { ref, Ref } from 'vue';

export enum PageStackType {
  New = 'new',
  SingleTop = 'single-top',
  NoHistory = 'no-history',
  Back = 'back',
}

export class PageStack {
  public static Instance: PageStack;

  public readonly currentPageName: Ref<string>;
  public pageStack: Ref<string[]>;

  constructor() {
    this.currentPageName = ref(this.startPageName);
    this.pageStack = ref([]);
  }

  public static init() {
    this.Instance = new PageStack();
  }

  public clearStack(): void {
    this.pageStack.value.length = 0;
  }

  public manageStack(newPageName: string, type: PageStackType): void {
    switch (type) {
      case PageStackType.SingleTop: {
        const index = this.pageStack.value.findIndex(
          (n) => n === newPageName
        );
        if (index !== -1) {
          this.pageStack.value.splice(index);
        }
        break;
      }
      case PageStackType.New:
        this.pageStack.value.push(this.currentPageName.value);
        break;
      case PageStackType.NoHistory:
      case PageStackType.Back:
      default:
        break;
    }
  }

  public changeScreen(newPageName: string) {
    this.currentPageName.value = newPageName;
  }

  public get startPageName(): string {
    return 'start-page';
  }
}
