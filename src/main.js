import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import router from './routes'
import mitt from 'mitt';
import store from './store'
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";

const emitter = mitt();
const app = createApp(App)

//vuex
app.use(store);
app.use(Antd);
app.config.globalProperties.emitter = emitter;
app.use(router)

app.mount('#app')
