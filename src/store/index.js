/**
 * @author leeming
 * @description demo 使用 vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import course from './modules/course'

Vue.use(Vuex)

export default  new Vuex.Store({
    modules: {
        user,
        course
    },
    strict: process.env.NODE_ENV !== 'production'
})