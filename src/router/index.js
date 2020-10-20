import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Index.vue'),
        children: [
            {
                path: '',
                name: '首页',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/record',
                name: '记录',
                component: () => import('../views/Record.vue')
            },
            {
                path: '/login',
                component: () => import('../views/Login.vue'),
                name: 'Login',
                hidden: true
            }
        ]
    }

];

const router = new VueRouter({
    routes
});

export default router;
