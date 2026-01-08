<!-- Author: Truong -->
<template>
  <div v-if="logic.visible" class="dialog-mask">
    <div class="dialog">
      <h3>{{ logic.args?.value?.title }}</h3>
      <p>{{ logic.args?.value?.message }}</p>

      <div class="actions" v-if="logic.args?.value">
        <BaseButton @confirm="confirm">
          OK
        </BaseButton>

        <BaseButton type="muted" @confirm="close">
          Cancel
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';
import { GlobalDialogLogic } from '@/logic/common/GlobalDialogLogic';

export default defineComponent({
  name: 'GlobalDialog',
  components: { BaseButton },
  setup() {
    const logic = new GlobalDialogLogic();
    const confirm = logic.confirm.bind(logic);
    const close = logic.close.bind(logic);
    return { logic, confirm, close };
  },
});
</script>
