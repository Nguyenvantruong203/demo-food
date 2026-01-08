<template>
  <div
    class="item-splash"
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
    @pointercancel="onPointerCancel"
  >
    <div class="splash-content">
      <img :src="image" alt="" />
      <p class="splash-text">{{ title }}</p>

      <BaseButton type="soft" @confirm="onConfirm">
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
  components: { BaseButton },
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
  },
  emits: ['select'],
  setup(_, { emit }) {
    const onPointerDown = () => {
      // UI chỉ forward event, không xử lý
    };

    const onPointerUp = () => {
      emit('select');
    };

    const onPointerCancel = () => {
      // reset nếu cần
    };

    const onConfirm = () => {
      emit('select');
    };

    return {
      onPointerDown,
      onPointerUp,
      onPointerCancel,
      onConfirm,
    };
  },
});
</script>

<style scoped>
.item-splash {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1e7dd;
  border-radius: 10px;
  margin: 10px;
  margin-top: 130px;
}
</style>