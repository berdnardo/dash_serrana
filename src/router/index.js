import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeSerrana from '../locations/região_serrana/HomeSerrana.vue'
import HomeRelatorio from '../locations/relatorio/HomeRelatorio'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/',
      components: {
        serra: HomeSerrana,
        relatorio: HomeRelatorio       
      }
    }]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
