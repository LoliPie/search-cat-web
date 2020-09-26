import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局注册 icon-font
import iconSvg from '@/components/IconSvg'
Vue.component('icon-svg', iconSvg)
console.log('注册成功')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
