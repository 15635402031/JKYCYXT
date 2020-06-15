/**
 * Vuex 容器
 */

import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate' // 引入第三方插件 解决数据持久化问题

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage // 默认持久化所有state
  })],
  state: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }

})
