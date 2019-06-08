import Vue from 'vue';
import App from './App.vue';
import {store} from './store/';
import {router} from './routes'

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
