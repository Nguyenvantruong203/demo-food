<template>
  <div class="start-page">
    <div class="start-page-layout">SPLASH</div>
  </div>
</template>

<script lang="ts">
import { StartPageLogic } from '@/logic/page/StartPageLogic';
import { defineComponent, onActivated } from 'vue';

export default defineComponent({
  name: 'splash-page',
  components: {},
  setup() {
    let logic = new StartPageLogic();
    onActivated(() => {
      logic.activate();
    });
    return {
      onSplashClick: () => {
        logic.onSplashClick();
      },
    };
  },
});
</script>

<style>
.start-page {
  width: var(--display-resolution-width);
  height: var(--display-resolution-height);
  position: relative;
  background-image: var(--common-background);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
