/**
 * @author leeming
 * @data 2019/8/5 下午7:59:30
 * @description 封装aixios为vue插件
 */

import api from './api'

const install = Vue=>{
    if(install.installed) return

    install.installed = true

    Object.defineProperty(Vue.prototype, '$http', {
        enumerable: true,
        configurable: true,
        get(){
            return (method,url,data,headers)=>api({method, url, data, headers})
        }
    })
}

export default install