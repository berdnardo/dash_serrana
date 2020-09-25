import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: "serra"
  },
  mutations: {
    serra: state => state.location = 'serra',
    relatorio: state => state.location = 'relatorio'
  },
  actions: {
  },
  modules: {
  }
})
