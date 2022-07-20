import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

// 数据持久化
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    // 保存token
    setToken (state, payload) {
      state.token = payload
    },
    // 删除token
    removeToken (state) {
      state.token = ''
    },
    getroles (state, payload) {
      state.getrolesList = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
