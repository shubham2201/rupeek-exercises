import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
