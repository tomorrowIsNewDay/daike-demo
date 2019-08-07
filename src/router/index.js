import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 编程时路由 传参配对
// Router.push({name:'', params:{}})
// Router.push({path:'', query: {}})

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: ()=>import('@/views/login/index')
        },
        {
            path: '/home',
            name: 'home',
            component: ()=>import('@/views/home/index'),
            children: [
                // {
                //     path: '/home',
                //     redirect: '/home/my'
                // },
                // 代课
                {
                    path: 'substitute',
                    name: 'substitute',
                    component: ()=>import('@/views/home/substitute')
                },
                // 我的个人中心
                {
                    path: 'my',
                    name: 'my',
                    component: ()=>import('@/views/home/my')
                },
                // 课程中心
                {
                    path: 'course',
                    name: 'course',
                    component: ()=>import('@/views/home/course')
                },
                // 发布课程
                {
                    path: 'publish', 
                    name: 'publish',
                    component: ()=>import('@/views/home/publish')
                }
            ]
        }

    ]
})