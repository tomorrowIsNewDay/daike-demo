/**
 * @author leeming
 * @description course
 */

const state =  {courses: null} 
 
const getters = {
    user(state) {
        return state.courses
    }  
}

const actions = {
    getcourse({commit}, params) {
        window._http('get','/api/getcourse',params).then((resp)=>{
            commit('GET_COURSE', resp.data)
        })
    },
    publish({commit}, params) {
        window._http('post', '/api/publish', params, {
            "Content-Type": "application/x-www-form-urlencoded"
          }).then(resp => {
            params.cb && params.cb()
        })
    }
}

const mutations = {
    GET_COURSE (state, data) {
       state.courses = data
   }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}