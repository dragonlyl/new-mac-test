// api.js
import { httpGet, httpPost } from './http'
export const getUser = (params = {}) => httpGet({ url: 'users/getUser', params })
// export const getUser = ({ params, headers = {} }) => httpGet({ url: 'users/getUser', params, headers })
export const saveUser = (data) => {
    return httpPost({
        url: 'users/save',
        data
    })
}

/**
 *### api.js
import Vue from 'vue'
import { post, get, patch, put, del } from './index'
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.prototype.$del = del
const projectInfo = '/parking-lot/list-near'
export const projectInfoApi = function (json) {
 return Vue.prototype.$post(`${projectInfo}`, json)
}
这种达到的效果跟你上面的没有差别， 但是如果有一个接口baseurl不同，我在.vue文件里面也可以直接这样写
this.$get('https://*****************.com/mng-api/api/admin/association/post).then((res) => {
 console.log(res)
 })
vue 添加实例属性可以了解一下
 */
