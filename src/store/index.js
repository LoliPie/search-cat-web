import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentEngineIndex: 1
  },
  mutations: {
    changeEngine(state, index) {
      state.currentEngineIndex = index
      console.log(state.currentEngineIndex)
    }
  },
  actions: {},
  modules: {}
})
