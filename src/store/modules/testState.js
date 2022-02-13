export default {
  namespaced: true,
  state: {
    test: 'hello',
  },
  mutations: {},
  getters: {
    getTest(state){
      return state.test;
    }, 
  },
  actions: {},
}