<!-- Author: Truong -->
<template>
  <div class="start-page">
    <div class="start-page-layout background-color text-blue">卓番 :
      001
    </div>
    <div class="splash-container">
      <ItemSplash v-for="(item, index) in logic.splashList" :key="index" :title="item.title" :content="item.content"
        :image="item.image" @click="logic.onSplashClick(item)" />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, onActivated } from 'vue';
import { StartPageLogic } from '@/logic/page/StartPageLogic';
import ItemSplash from '@/component/ItemSplash.vue';

export default defineComponent({
  name: 'splash-page',
  components: {
    ItemSplash,
  },
  setup() {
    const logic = reactive(new StartPageLogic());
    onActivated(() => {
      logic.activate();
    });
    return {
      logic,
    };
  },
});
</script>

<style>
.start-page {
  width: var(--display-resolution-width);
  height: var(--display-resolution-height);
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}

.start-page-layout {
  display: flex;
  align-items: center;
  font-size: 200px;
  user-select: none;
  font-weight: 600px;
  line-height: 18px;
  vertical-align: middle;
  justify-content: center;
  margin-top: 100px;
}

.splash-container {
  width: 250;
  height: 300;
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
