import { SplashService } from '@/services/SplashService';
import { RuntimeStore } from '@/logic/common/RuntimeStore';
import type { Splash } from '@/model/Splash';
import { EmitEvent, GlobalEvent, PageArgs } from '@/logic/common/GlobalEvent';
import { PageStackType } from '@/model/PageStack';

export class DetailPageLogic {
    private service = new SplashService();

    data: Splash | null = null;

    async activate() {
        const splashId = RuntimeStore.currentSplashId;
        if (!splashId) {
            this.data = null;
            return;
        }

        const list = await this.service.getList();
        this.data = list.find(x => x.id === splashId) ?? null;
    }

    onClickBack() {
        GlobalEvent.Instance.emitEvent(
            EmitEvent.ChangeScreen,
            new PageArgs('start-page', PageStackType.NoHistory)
        );
    }
}
