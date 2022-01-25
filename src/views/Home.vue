<template>
  <div class="flex w-full h-full">
    <!-- 사이드바 -->
    <side-menu :list="memoList" />
    <div class="flex flex-col w-full h-full">
      <!-- 툴바 -->
      <tool-bar @new-memo="newMemoTriger" />
      <!-- 메모장 -->
      <!-- 1 -->
      <!-- <memo-area :data="data" @changed-by-memo="changedBymemo" /> -->
      <!-- 2 -->
      <memo-area v-model:data="data" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import MemoArea from "../components/MemoArea.vue";
import ToolBar from "../components/ToolBar.vue";
import SideMenu from "../components/SideMenu.vue";

export default {
  components: {
    MemoArea,  
    ToolBar, 
    SideMenu,
  },
  setup(){
    const memoList = ref([]);

    const data = ref("change please");

    const changeData = () => {
      data.value = "changed!"
    };
    const changedBymemo = (e) => {
      data.value = e;
    };
    const showData = () => {
      alert(data.value);
    };
    const newMemoTriger = () => {
      memoList.value.push("새 메모가 푸시되었습니다");
    };

    return {
      memoList,
      data,
      changeData,
      changedBymemo,
      showData,
      newMemoTriger,
    };
  },
};
</script>
