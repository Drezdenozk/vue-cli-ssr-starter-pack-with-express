import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

const pagePath = './pages/';
const pageName = '/index.vue';
const Home = require('./pages/home/index.vue').default;
const NotFound = require('./pages/404/index.vue').default;

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, // SYNC
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* webpackChunkName: "about" */
      component: () => import(`${pagePath}about${pageName}`),
    },
    {
      path: '/contacts',
      name: 'contacts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(`${pagePath}contacts${pageName}`),
    },
    {
      path: '*',
      name: '404',
      meta: { layout: 'not-found' },
      component: NotFound, // SYNC
    },
  ],
});
