<template>
    <div class="detail-page" v-if="logic.data">
        <div class="detail-card">
            <h1 class="detail-title">{{ logic.data.title }}</h1>

            <div class="detail-image-wrapper">
                <img :src="logic.data.image" alt="detail image" />
            </div>

            <p class="detail-content">
                {{ logic.data.content }}
            </p>

            <div class="detail-action">
                <BaseButton type="soft" @click="logic.onClickBack">
                    Back
                </BaseButton>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import BaseButton from '@/component/common/BaseButton.vue';
import { DetailPageLogic } from '@/logic/page/DetailPageLogic';

export default defineComponent({
    name: 'detail-page',
    components: {
        BaseButton,
    },
    setup() {
        const logic = reactive(new DetailPageLogic());

        onMounted(() => {
            logic.activate();
        });

        return {
            logic,
        };
    },
});
</script>
<style>
.detail-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.detail-card {
    width: 600px;
    max-width: 90%;
    padding: 32px;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.detail-title {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
}

.detail-image-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.detail-image-wrapper img {
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 8px;
}

.detail-content {
    font-size: 16px;
    line-height: 1.6;
    color: #444;
    text-align: center;
}

.detail-action {
    display: flex;
    justify-content: center;
    margin-top: 12px;
}
</style>