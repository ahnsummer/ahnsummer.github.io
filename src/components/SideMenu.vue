<template>
   <!-- 사이드메뉴 -->
    <div class="flex-shrink-0 border border-black">
      <div v-for="(item, index) in list" :key="index">
        {{item}}
      </div>
    </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style>

</style>