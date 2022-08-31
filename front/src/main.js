import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

library.add(faEye);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('fa', FontAwesomeIcon);
app.mount('#app');
