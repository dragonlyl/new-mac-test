// http.js
import axios from 'axios';
import config from '../config/index';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = config.baseUrl;
    // axios.defaults.baseURL = 'http://localhost:8089/'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://prod.xxx.com';
}

// token 去获取
axios.defaults.headers.common.Authorization = 'token' || '';

// 请求拦截器
axios.interceptors.request.use(
    // config => {
    //     token && (config.headers.Authorization = token)
    //     return config
    // },
    error => {
        return Promise.reject(error);
    });

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 响应拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        if (response.data.code === 511) {
            // 未授权调取授权接口
        } else if (response.data.code === 510) {
            // 未登录跳转登录页
        } else {
            return Promise.resolve(response);
        }
    } else {
        return Promise.reject(response);
    }
}, error => {
    // 我们可以在这里对异常状态作统一处理
    if (error.response && error.response.status) {
    // 处理请求失败的情况
    // 对不同返回码对相应处理
        return error.response;
    }
});

// get 请求
export function httpGet ({
    url,
    params = {}
}) {
    return axios.get(url, {
        params
    }).then((res) => {
        return res && res.data;
    });
}

// post请求
export function httpPost ({
    url,
    data = {},
    params = {}
}) {
    return axios({
        url,
        method: 'post',
        transformRequest: [function (data) {
            let ret = '';
            for (const it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }],
        // 发送的数据
        data,
        // url参数
        params

    }).then(res => {
        return res && res.data;
    });
}
