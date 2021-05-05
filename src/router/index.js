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
