import type { Splash } from '@/model/Splash';
import { ServiceIF } from '@/services/ServiceIF';
import { PageArgs } from '@/logic/common/GlobalEvent';
import { Navigation } from '../common/Navigation';
import { DialogArgs, Interaction } from '../common/Interaction';

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
        Interaction.showDialog(
            new DialogArgs({
                title: 'Confirm',
                message: 'Bạn có chắc muốn quay lại?',
                onConfirm: () => {
                    Navigation.back();
                },
            })
        );
    }
}