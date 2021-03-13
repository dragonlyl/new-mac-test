import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import '@/assets/style/style.scss';
import VueLazyload from 'vue-lazyload';

import modules from '../modules';
Vue.use(modules, {
    components: ['MyButton']
});
Vue.use(VueLazyload, {
});
Vue.use(ElementUI);
Vue.config.productionTip = false;

// Vue.use(Antd);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
