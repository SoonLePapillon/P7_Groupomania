import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

library.add(fas);
library.add(far);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('fa', FontAwesomeIcon);
app.mount('#app');
