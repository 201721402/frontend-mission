import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(Vuex).use(store).use(router)
  .mount('#app');
