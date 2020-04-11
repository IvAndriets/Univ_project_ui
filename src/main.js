import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import {routes} from './router/index';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import DeleteModal from './components/dialogs/DeleteModal';
import AddTimeModal from './components/dialogs/AddTimeModal';

Vue.component( 'delete-modal',DeleteModal);
Vue.component( 'add-time-modal',AddTimeModal);


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter(
  {
    routes: routes,
  }
);

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});
