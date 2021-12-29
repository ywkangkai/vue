import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app', //在public下的app文件中引用
  render: h => h(App),
})//.$mount('#app')
