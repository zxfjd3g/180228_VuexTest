/*
vuex核心管理对象模块: store
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 声明使用
Vue.use(Vuex)

// 相当于data的对象
const state = {
  count: 2
}

// 包含n个用于直接更新状态的方法
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

// 包含n个间接(触发mutaion调用)更新状态方法
const actions = {
  increment2 ({commit}) {
    commit('INCREMENT')
  },

  decrement ({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }

  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

// 包含n个基于state的getter计算属性
const getters = {
  evenOrOdd (state) {
    return state.count%2===0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})