import { createApp } from 'vue';
import '../index.css';
import router from './router';
import store from './store';

import Index from './Index.vue';

createApp(Index).use(router).use(store).mount('body');
