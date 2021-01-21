import {createRouter, createWebHistory} from 'vue-router'
import New from './views/New'
import Task from './views/Task'
import Tasks from './views/Tasks'
import TheNotFound from './components/TheNotFound'

 export const router =  createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/new', component: New },
    { path: '/task/:id', component: Task},
	{ path: '/', component: Tasks, name: 'home'},
	{ path: '/:notFound(.*)', component: TheNotFound 
  }],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})




