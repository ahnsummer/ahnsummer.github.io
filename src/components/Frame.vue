<template>
  <!-- <div>안녕</div>
  <input type="number" class="border border-black" /> + 1<br/>
  2<br/> -->
  <!-- {{ isTerminalOnly }} -->
  {{ login }}
  {{ test }}
</template>
<script>
import { useStore } from 'vuex';
export default {
  /**
   * 컴포넌트는 13살 어린이고 프롭스는 밥이다.
   * 13살 어린이는 반찬투정이 아주 심해 먹고싶은것만 먹어
   * 그래서 '고기'로 만든 '제육볶음'만 먹어
   * props: {
   *  제육볶음: 고기
   * }
   * 
   * 엄마는 '고기'로 만든 '제육볶음'을 해줘야 해
   * Mom.vue에서는
   * <템플릿>
   *  <Baby :제육볶음="엄마표제육볶음">
   * <템플릿 닫는태그>
   * <스크립트>
   *  export default {
   *    setup() {
   *      const 엄마표제육볶음 = ref(A);여기서 A는 '고기'형식임
   * 
   *      return {
   *        엄마표제육볶음
   *      }
   *    }
   *  }
   * <스크립트 닫는태그>
   */
  props: {
    isTerminalOnly: Boolean,
  },
  setup() {
    /**
     * watch는 특정 '반응성 데이터'(a)의 변화를 감지하여 콜백(b)을 실행한다.
     * const b = (to, from) => {
     *  //to: 데이터가 변한 후의 값
     *  //from: 데이터가 변하기 전 값
     * }
     * watch(a, b);
     * 
     * const a = ref(10);
     * a.value = 20 // 이 때 watch가 실행, to = 20, from = 10
     */
    /**
     * computed는 다른 '반응성 데이터'들을 이용하여 계산된 값을 만들어낸다.
     * 즉, 아래 예제에서 sum의 값은 a의 값 + b의 값이 되는데,
     * 만약 a나 b의 값 중 하나라도 변화가 있을 경우 'calculate'가
     * 다시 실행이 되어 sum의 값이 업데이트 된다.
     * 
     * const calculate = () => {
     *  return a.value + b.value;
     * }
     * 
     * const sum = computed(calculate);
     * 
     */

    const store = useStore();
    const login = store.getters.getLogin;
    const test = store.getters["testState/getTest"];
    store.commit("setLogin", true);
    store.dispatch("fetchLoginStatus", false)

    return {
      login,
      test,
    }
  }
};
</script>