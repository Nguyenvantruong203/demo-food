import type { Splash } from '@/model/Splash';
import { ServiceIF } from '@/services/ServiceIF';
import { EmitEvent, GlobalEvent, PageArgs } from '@/logic/common/GlobalEvent';
import { PageStackType } from '@/model/PageStack';

export class DetailPageLogic {

    data: Splash | null = null;

    activate(args?: PageArgs) {
        const splashId = args?.Data?.splashId;
        if (!splashId) {
            this.data = null;
            return;
        }

        const list = ServiceIF.getSplashList();
        this.data = list.find(x => x.id === splashId) ?? null;
    }

    onClickBack() {
        GlobalEvent.Instance.emitEvent(
            EmitEvent.ChangeScreen,
            new PageArgs('start-page', PageStackType.NoHistory)
        );
    }
}
