import { createStore } from 'vuex';
import testState from './modules/testState';

export default createStore({
  state: {
    login: true,
    darkmode: false,
  }, // 웹 애플리케이션의 상태를 저장  ex, 로그인여부
  getters: {
    getLogin(state){
      return state.login;
    }
  },

  mutations: {
    setLogin(state, payload) { // payload : 전송되는 데이터를 명명하는....어떤값..
      state.login = payload;
    },
    setDarkmode(state, payload) {
      state.darkmode = payload;
    }
  },

  actions: {
    fetchLoginStatus({state, commit, dispatch}, payload) {
      setTimeout(() => {
        commit("setLogin", payload);
      }, 1000);
    }
  },

  modules: {
    testState: testState,
  },
});