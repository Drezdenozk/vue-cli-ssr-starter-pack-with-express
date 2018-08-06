import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import Default from './layouts/default.vue';
import NotFound from './layouts/not-found.vue';

Vue.component('default-layout', Default);
Vue.component('not-found-layout', NotFound);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
