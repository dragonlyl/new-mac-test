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
    components: ['MyButton', 'MySelector']
});
Vue.use(VueLazyload, {
});
Vue.use(ElementUI);
window.onerror = function (message, source, line, column, error) {
    console.log(message, source, line, column, error, 'on error');
    uploadErr({ lineno: line, colno: column, error: error, message: message, filename: source });
};

// Vue.config.errorHandler = (err, vm, info) => {
//     // Vue源码得知，直接在errorHandler抛出错误会被Vue的try...catch捕获
//     // [奇技淫巧-获取JS所有error对象中的行、列](https://www.jianshu.com/p/d9639fe67866)
//     setTimeout(() => {
//         throw err;
//     });
//     console.log(err, vm, info, 'error handler');
//     // console.log(err.name, err.stack, err.stack.exception, err.message);
// };
function uploadErr ({ lineno, colno, error: { stack }, message, filename }) {
    const str = window.btoa(JSON.stringify({ lineno, colno, stack, message, filename }));
    console.log(lineno, colno, stack, message, filename, '=====');
    console.log(window.atob(str), 'str');
    const frontIp = 'http://localhost:3000/test/error';
    new Image().src = `${frontIp}?info=${str}`;
}
// Vue.config.warnHandler = (e) => {
//     console.log(e, '=====warn');
// };
// function uploadErr ({ lineno, colno, error: { stack }, message, filename }) {
//     const str = window.btoa(
//         JSON.stringify({ lineno, colno, error: { stack }, message, filename }));
//     const frontIp = 'http://localhost:3000/test/error';
//     new Image().src = `${frontIp}?info=${str}`;
// }
// Vue.config.renderError = (e) => {
//     console.log(e, '=====render');
// };
// Vue.config.errorCaptured = (e) => {
//     console.log(e, '=====errorCaptured');
// };
window.addEventListener('error', (e) => {
    console.log(e, 'window error');
});

// window.addEventListener('unhandledrejection', (e) => {
//     console.log(e, 'unhandledrejection');
// });
// Vue.use(Antd);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
