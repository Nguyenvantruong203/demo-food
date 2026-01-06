<template>
  <div class="top-main">
    <keep-alive>
      <component :is="currentPageName" :key="currentPageName" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TopLogic } from '@/logic/page/TopLogic';
import StartPage from '@/page/StartPage.vue';

export default defineComponent({
  name: 'top-page',
  components: {
    StartPage,
  },
  setup() {
    let logic = new TopLogic();
    return {
      currentPageName: logic.currentPageName,
    };
  },
});
</script>

<style>
.top-main {
  position: relative;
  width: var(--display-resolution-width);
  height: var(--display-resolution-height);
  background-color: #fff;
}
</style>
