/**
 * @author leeming
 * @description demo 使用 observable
 */
import Vue from 'vue'

 const state = Vue.observable( {user: {}} )

 const mutations = {
    setUser(user) {
        window.localStorage.setItem('user', JSON.stringify(user))
        state.user = user
    }
}

export default {
    state,
    mutations
}