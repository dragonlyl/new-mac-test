import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
    },
    {
        path: '/video',
        name: 'UploadVideo',
        component: () => import('../views/UploadVideo.vue')
    },
    {
        path: '/form',
        name: 'Form',
        component: () => import('../views/Form.vue')
    },
    {
        path: '/slider',
        name: 'Slider',
        component: () => import(/* webpackChunkName: "Slider" */ '../views/Slider.vue')
    },
    {
        path: '/directive',
        name: 'Directive',
        component: () => import(/* webpackChunkName: "Slider" */ '../views/directive.vue')
    },
    // {
    //     path: '/components',
    //     name: 'Components',
    //     component: () => import('../views/MyCom.vue')
    // },
    {
        path: '/download',
        name: 'Download',
        component: () => import('../views/Download.vue')
    }, {
        path: '/directive1',
        name: 'Directive1',
        component: () => import('../views/directive1.vue')
    },
    {
        path: '/chen',
        name: 'Chen',
        component: () => import('../views/Chen.vue')
    },
    {
        path: '/rrweb',
        name: 'Rrweb',
        component: () => import('../views/rrweb.vue')
    },
    {
        path: '/rrweb-err',
        name: 'RrwebRrr',
        component: () => import('../views/errorRecord.vue')
    }
];

const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    window.sessionStorage.setItem('name', 111);
    // location.href = 'localhost:8089/#/form';
    const { path } = to;
    if (path === '/home') {
        next({ path: 'form' });
    } else {
        next();
    }
});
export default router;
