import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

