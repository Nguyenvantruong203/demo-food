<template>
  <div class="start-page">
    <header class="start-page-header background-color text-blue">
      <span class="desk-label">卓番 :</span>
      <span class="desk-number">001</span>
    </header>

    <div class="splash-container">
      <ItemSplash v-for="item in logic.splashList" :key="item.id" :title="item.title" :content="item.content"
        :image="item.image" @select="logic.onSelectSplash(item)" />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, onActivated } from 'vue';
import { StartPageLogic } from '@/logic/page/StartPageLogic';
import ItemSplash from '@/component/ItemSplash.vue';

export default defineComponent({
  name: 'splash-page',
  components: { ItemSplash },
  setup() {
    const logic = reactive(new StartPageLogic());

    onActivated(() => {
      logic.activate();
    });

    return { logic };
  },
});
</script>

<style>
.start-page {
  width: var(--display-resolution-width);
  height: var(--display-resolution-height);
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}

.start-page-header {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-weight: 600;
}

.desk-label {
  font-size: 80px;
}

.desk-number {
  font-size: 120px;
}

.splash-container {
  flex: 1;
  padding: 40px 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  align-content: start;
}
</style>