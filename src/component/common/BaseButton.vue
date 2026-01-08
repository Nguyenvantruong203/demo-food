<template>
  <button
    class="base-button"
    :class="[
      `bg-button-${type}`,
      { disabled }
    ]"
    :disabled="disabled"
    @pointerup="onPointerUp"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['confirm'],
  setup(props, { emit }) {
    const onPointerUp = () => {
      if (props.disabled) return;
      emit('confirm');
    };

    return { onPointerUp };
  },
});
</script>

<style>
.base-button {
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.base-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>