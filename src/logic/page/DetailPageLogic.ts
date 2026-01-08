import type { Splash } from '@/model/Splash';
import { ServiceIF } from '@/services/ServiceIF';
import { DialogArgs, GlobalEvent } from '@/logic/common/GlobalEvent';

export class DetailPageLogic {
    data: Splash | null = null;

    activate() {
        const args = GlobalEvent.Instance.getCurrentPageArgs();
        const splashId = args?.Data?.splashId;

        if (!splashId) {
            this.data = null;
            return;
        }

        this.data = ServiceIF.getSplashList()
            .find(x => x.id === splashId) ?? null;
    }

    onClickBack() {
        GlobalEvent.Instance.showDialog(
            new DialogArgs({
                title: 'Confirm',
                message: 'Bạn có chắc muốn quay lại?',
                onConfirm: () => {
                    GlobalEvent.Instance.back();
                },
            })
        );
    }
}