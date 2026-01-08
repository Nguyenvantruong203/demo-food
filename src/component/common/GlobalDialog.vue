<template>
  <div v-if="dialogVisible" class="dialog-mask">
    <div class="dialog">
      <h3>{{ dialogArgs?.title }}</h3>
      <p>{{ dialogArgs?.message }}</p>

      <div class="actions">
        <BaseButton @confirm="onConfirm">OK</BaseButton>
        <BaseButton type="muted" @confirm="onCancel">Cancel</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';
import { GlobalEvent } from '@/logic/common/GlobalEvent';

export default defineComponent({
  name: 'GlobalDialog',
  components: { BaseButton },
  setup() {
    const event = GlobalEvent.Instance;

    return {
      event,
      dialogVisible: event.dialogVisible,
      dialogArgs: event.dialogArgs,
      onConfirm: () => event.confirmDialog(),
      onCancel: () => event.closeDialog(),
    };
  },
});
</script>
