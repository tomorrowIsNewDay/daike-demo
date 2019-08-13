const state =  {user: null} 
 
const getters = {
    user(state) {
       if(state.user) return state.user     
       return JSON.parse(window.localStorage.getItem('user'))
    }  
}

const actions = {
    setUserInfo({commit}, info) {
        commit(setUser, info)
    }
}

const mutations = {
   setUser (state, user) {
       window.localStorage.setItem('user', JSON.stringify(user))
       state.user = user
   }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}