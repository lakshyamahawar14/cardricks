import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import vDrag from './directives/v-drag';
import router from './router';

const app = createApp(App);
app.directive('drag', vDrag);
app.use(router).mount('#app');
