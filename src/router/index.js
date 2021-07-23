import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/1234', // 别名，通过多个名都可进行访问。
    name: 'Home',
    component: Home,
    meta: {
      test: true
    },
    children: [
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          test: true
        }
      }
    ]
  },
  // { path: '/1234', redirect: '/' }, // 重定向，即用redirect属性（写重定向路径）代替componennt属性。
  {
    path: '/:UserId',
    name: 'User',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]


const router = new VueRouter({
  mode: 'history',
  routes,
  
})

router.beforeEach((to, from, next) => {
  /* must call `next` */
  console.log(to.path.startsWith('/123'));
  console.log(to.meta.test);
  console.log(router); // 相当于挂载到了Vue实例的属性上
  next()
});


export default router
