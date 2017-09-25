import Vue from 'vue'
import Router from 'vue-router'
import CountryQuery from '@/components/CountryQuery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: CountryQuery
    }
  ]
})
