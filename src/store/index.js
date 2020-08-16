import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: "niteroi"
  },
  mutations: {
    niteroi: state => state.location = 'niteroi',
    rio: state => state.location = 'rio',
    brasil: state => state.location = 'brasil'
  },
  actions: {
  },
  modules: {
  }
})
