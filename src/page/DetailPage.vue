<template>
    <div class="detail-page" v-if="logic.data">
        <div class="detail-card">
            <h1 class="detail-title">{{ logic.data.title }}</h1>

            <div class="detail-image-wrapper">
                <img :src="logic.data.image" />
            </div>

            <p class="detail-content">
                {{ logic.data.content }}
            </p>

            <div class="detail-action">
                <BaseButton type="soft" @confirm="logic.onClickBack">
                    Back
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onActivated } from 'vue';
import BaseButton from '@/component/common/BaseButton.vue';
import { DetailPageLogic } from '@/logic/page/DetailPageLogic';
import type { PageArgs } from '@/logic/common/GlobalEvent';

export default defineComponent({
    name: 'detail-page',
    components: { BaseButton },

    props: {
        pageArgs: {
            type: Object as () => PageArgs,
            required: false,
        },
    },

    setup(props) {
        const logic = reactive(new DetailPageLogic());

        onActivated(() => {
            logic.activate(props.pageArgs);
        });

        return { logic };
    }
});
</script>
