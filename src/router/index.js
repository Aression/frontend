import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Create from '@/components/Create'
import Read from '@/components/Read'
import Update from '@/components/Update'
import Del from '@/components/Del'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/Read',
    name: 'Read',
    component: Read
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },
  {
    path: '/Update',
    name: 'Update',
    component: Update
  },
  {
    path: '/Del',
    name: 'Del',
    component: Del
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },

  ]
})
