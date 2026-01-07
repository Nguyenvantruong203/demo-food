<template>
  <button
    class="base-button"
    :class="[
      `bg-button-${type}`,
      { disabled }
    ]"
    :disabled="disabled"
    @click="onClick"
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
      default: 'primary', // primary | accent | neutral | muted | soft
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = () => {
      if (props.disabled) return;
      emit('click');
    };

    return { onClick };
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