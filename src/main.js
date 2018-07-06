import Vue from 'vue'
import app from './app1.vue'
import store from './store'

new Vue({
  el: '#app',
  components: {
    app,
  },
  template: '<app/>',
  store // 所有组件对象都多了一个$store属性
})