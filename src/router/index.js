import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeNiteroi from '../locations/niteroi/HomeNiteroi.vue'
import HomeRio from '../locations/rio_de_janeiro/HomeRio.vue'
import HomeBrasil from '../locations/brasil/HomeBrasil.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/',
      components: {
        niteroi: HomeNiteroi,
        rio: HomeRio,
        brasil: HomeBrasil
      }
    }]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
