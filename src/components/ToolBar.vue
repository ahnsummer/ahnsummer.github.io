<template>
  <!-- 툴바 -->
  <div class="flex-shrink-0 border border-black">
    <button @click="newMemo">새 메모</button>
  </div>
</template>

<script>
export default {
  emits: ["new-memo"],
  setup(props, { emit }){
    const newMemo = () => {
      emit("new-memo");
    }
    return {
      newMemo,
    }
  }
}
</script>

<style>

</style>