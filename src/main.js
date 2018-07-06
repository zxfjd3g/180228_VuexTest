import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

// 创建vm对象
new Vue({
  el: '#app',
  /*render: function(createElement) {
    return createElement(App)  // '<App/>'
  },*/
  render: h=> h(App),
  store
})

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})