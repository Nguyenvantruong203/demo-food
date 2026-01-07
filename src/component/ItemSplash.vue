<template>
    <div class="item-splash">
        <div class="splash-content">
            <img :src="image" alt="">
            <p class="splash-text">{{ title }}</p>

            <BaseButton type="soft" @click="onClick">
                注文を始める
            </BaseButton>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/component/common/BaseButton.vue';
export default defineComponent({
    name: 'ItemSplash',
    components: {
        BaseButton,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    emits: ['click'],
    setup(_, { emit }) {
        const onClick = () => {
            emit('click');
        };
        return {
            onClick,
        };
    },
});
</script>
<style scoped>
.item-splash {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D1E7DD;
    grid: 1 / 4;
    border-radius: 10px;
    margin: 10px;
    margin-top: 130px;
}
</style>