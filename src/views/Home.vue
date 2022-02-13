<template>
  <frame :isTerminalOnly="isTerminalOnly" />
</template>

<script>
import { ref } from "vue";
import Frame from "../components/Frame.vue";
export default{
  components: {
    Frame,
  },

  setup() {
    const isTerminalOnly = ref(true);

    return {
      isTerminalOnly
    }
  }
}
</script>
