import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import {routes} from './router/index';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import DeleteDialog from './components/dialogs/DeleteDialog';
import RegisterTimeModal from './components/dialogs/RegisterTimeDialog';
import RegisterTimeSheetDialog from './components/dialogs/RegisterTimeSheetDialog';
import RegisterSalaryDialog from './components/dialogs/RegisterSalaryDialog';


Vue.component( 'delete-modal',DeleteDialog);
Vue.component( 'add-time-modal',RegisterTimeModal);
Vue.component('add-time-sheet',RegisterTimeSheetDialog);
Vue.component('add-salary', RegisterSalaryDialog);


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
