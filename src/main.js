import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Projects from './projects.vue'
import Contact from './contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

