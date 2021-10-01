import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
Vue.use(Vuex);
// 通过请求获取权限
function getUserAuthMenu () {
    return new Promise((resolve, reject) => {
        resolve({
            list: [{
                path: '/components',
                name: 'Components',
                component: () => import('../views/MyCom.vue')
            }],
            name: 'xxx'
        });
    });
}
function getMenu () {
    return new Promise((resolve, reject) => {
        getUserAuthMenu().then(res => {
            // console.log(res, 'res');

            // if (res.code === 200) {
            //     const datas = res.data;
            resolve(res.list);
            // }
        });
    });
}
export default new Vuex.Store({
    state: {
        routerType: '',
        // 菜单路由
        meunList: []
    },
    mutations: {
        SET_ROUTER_TYPE (state, type) {
            state.routerType = type;
        },
        SET_ROUTER_MENULIST (state, list) {
            // 静态路由 +  动态路由  合并  完整路由
            const array = [].concat(list);
            state.meunList = array;
            // console.log(router.options.routes, 'options');
            router.options.routes = array;
            // console.log(router.options.routes, 'options');
            router.addRoutes([...array]);
        }
    },
    actions: {
        setMenuList ({ commit, state }) {
            return new Promise((resolve, reject) => {
                getMenu().then(res => {
                    commit('SET_ROUTER_TYPE', '');
                    commit('SET_ROUTER_MENULIST', res);
                    resolve(res);
                });
            });
        }

    },
    modules: {
    }
});

