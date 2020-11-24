import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('./components/views/Home.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./components/login/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('./components/login/Registration.vue')
        },
        {
            path: '/viewMotel',
            name: 'viewMotel',
            component: () =>
                import ('./components/motel/ViewMotel.vue')
        },
        {
            path: '/post',
            name: 'post',
            component: () =>
                import ('./components/post/Post.vue')
        }
    ]
})