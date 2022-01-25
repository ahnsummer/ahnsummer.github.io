<template>
  <!-- 메모장 --> 
      <div class="w-full h-full border border-black">{{ data }}</div>
      <button @click="changeData">change (memo area)</button>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: "hello",
    },
  },

  setup(props, { emit }) {
    const changeData = () => {
      // emit("change-by-memo", "changed by memo area"); // 1
      emit("update:data", "changed by memo area"); // 2
    };

    return {
      changeData,
    };
  },
};
</script>

<style>

</style>