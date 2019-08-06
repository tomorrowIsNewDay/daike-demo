import axios from 'axios'
import qs from 'qs'

export const http = (method, url, data, headers) => {
    if(!method) {
        console.error(method, 'no method')
        return
    }
    
    if(!url) {
        console.error(url, 'no url')
        return
    }
    // 获取 本地token
    let tokenObj = JSON.parse( window.localStorage.getItem('token') )
    // 没有token 回登陆页
    // if(tokenObj == null) {
    //     window.location.href = '/'
    //     return
    // }
    // 将token加入请求头
    headers = {
        ...headers,
        // ['my-token']: tokenObj.token
    }
    // 处理一下头部的content-type
    if(!headers['Content-Type']) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    if(headers['Content-Type'] === 'application/x-www-form-urlencoded' && (typeof data) !== 'string') {
        data = qs.stringify(data)
    }
    if( method === 'get' || method === 'GET' ) {
        if(data) {
            if( typeof data !== 'string' ) {
                data = qs.stringify(data)
            }
            url = url + '?' + data + '&_t=' + new Date().getTime()
        }
    }

    let req = axios( {method, url, data, headers} )
    return req
}

// 添加拦截器
axios.interceptors.request.use(config => {

    return config
},error=>{

    return Promise.reject(error)
})


axios.interceptors.response.use(res=>{

    return res
},error=>{

    return Promise.reject(error)
})