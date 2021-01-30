// http.js
import axios from 'axios';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import config from '../config/index';
const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? config.baseUrl : 'http://prod.xxx.com',
    timeout: 10000,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        common: {
            Authorization: 'token' || ''
        }
    },
    // 这并不是允许跨域，是指跨域时候允不允许带允许cookie
    withCredentials: true,
    transformRequest: [(data) => {
        data = JSON.stringify(data);
        return data;
    }],
    validateStatus () {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true;
    },
    transformResponse: [(data) => {
        if (typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data);
        }
        return data;
    }]
});
const showStatus = (status) => {
    let message = '';
    switch (status) {
    case 400:
        message = '请求错误(400)';
        break;
    case 401:
        message = '未授权，请重新登录(401)';
        break;
    case 403:
        message = '拒绝访问(403)';
        break;
    case 404:
        message = '请求出错(404)';
        break;
    case 408:
        message = '请求超时(408)';
        break;
    case 500:
        message = '服务器错误(500)';
        break;
    case 501:
        message = '服务未实现(501)';
        break;
    case 502:
        message = '网络错误(502)';
        break;
    case 503:
        message = '服务不可用(503)';
        break;
    case 504:
        message = '网络超时(504)';
        break;
    case 505:
        message = 'HTTP版本不受支持(505)';
        break;
    default:
        message = `连接出错(${status})!`;
    }
    return `${message}，请检查网络或联系管理员！`;
};

// 请求拦截器
service.interceptors.request.use((config) => {
    return config;
}, (error) => {
    // 错误抛到业务代码
    error.data = {};
    error.data.msg = '服务器异常，请联系管理员！';
    return Promise.resolve(error);
});
// 响应拦截器
service.interceptors.response.use((response) => {
    const status = response.status;
    let msg = '';
    if (status < 200 || status >= 300) {
        // 处理http错误，抛到业务代码
        msg = showStatus(status);
        if (typeof response.data === 'string') {
            response.data = { msg };
        } else {
            response.data.msg = msg;
        }
    }
    return response;
}, (error) => {
    console.log(error, 'err');
    // 错误抛到业务代码
    error.data = {};
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！';
    return Promise.resolve(error);
});

// get 请求
export function httpGet ({
    url,
    params = {},
    headers = {}
}) {
    return service.get(url, {
        params,
        headers
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
    return service({
        url,
        method: 'post',
        // transformRequest: [function (data) {
        //     let ret = '';
        //     for (const it in data) {
        //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        //     }
        //     return ret;
        // }],
        // 发送的数据
        data,
        // url参数
        params

    }).then(res => {
        return res && res.data;
    });
}
