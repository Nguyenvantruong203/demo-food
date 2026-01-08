<template>
  <div
    ref="el"
    class="base-button"
    :class="[
      `bg-button-${type}`,
      { disabled, pressed }
    ]"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"

    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @touchmove="onTouchMove"
    @touchcancel="onTouchCancel"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
    const el = ref<HTMLElement | null>(null);
    const pressed = ref(false);
    const active = ref(false);

    const isInside = (x: number, y: number) => {
      if (!el.value) return false;
      const rect = el.value.getBoundingClientRect();
      return (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      );
    };

    /* ========= MOUSE ========= */

    const onMouseDown = () => {
      if (props.disabled) return;
      pressed.value = true;
      active.value = true;
    };

    const onMouseUp = () => {
      if (!active.value || !pressed.value) return;
      pressed.value = false;
      active.value = false;
      emit('confirm');
    };

    const onMouseMove = () => {
      // giữ để đủ 6 action
    };

    const onMouseEnter = () => {
      if (!active.value) return;
      pressed.value = true;
    };

    const onMouseLeave = () => {
      pressed.value = false;
    };

    /* ========= TOUCH ========= */

    const onTouchStart = () => {
      if (props.disabled) return;
      pressed.value = true;
      active.value = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!active.value) return;
      const t = e.touches[0];
      pressed.value = isInside(t.clientX, t.clientY);
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!active.value) return;
      const t = e.changedTouches[0];
      const valid = isInside(t.clientX, t.clientY);

      pressed.value = false;
      active.value = false;

      if (valid) {
        emit('confirm');
      }
    };

    const onTouchCancel = () => {
      pressed.value = false;
      active.value = false;
    };

    return {
      el,
      pressed,
      onMouseDown,
      onMouseUp,
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onTouchCancel,
    };
  },
});
</script>

<style>
.base-button {
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.base-button.pressed {
  transform: scale(0.97);
  opacity: 0.85;
}

.base-button.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
