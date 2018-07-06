import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import './base.css'

// 创建vm对象
new Vue({
  el: '#app',
  render: h => h(App),
  store
})