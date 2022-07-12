import Vue from 'vue'
import App from './App.vue'

//引入全域元件
import TypeNav from '@/components/TypeNav'
//註冊全域元件，參數(全域元件的名字,哪一個元件)
Vue.component(TypeNav.name, TypeNav)

//引入路由
import router from '@/router'
//引入倉庫
import store from '@/store'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //註冊路由
  router,
  //註冊倉庫:元件實例上會增加＄store屬性
  store
}).$mount('#app')
