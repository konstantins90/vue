import { RouteRecordRaw, RouterHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Login from '../pages/Login.vue'
import store from '../store'

const isUserAuth = (to: any, from: any, next: any) => {
    if (!store.state.root.isLoggedIn === true) {
        next({ name: 'Login' })
    } else next()
}

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
    },
    {
        path: '/products',
        component: Products,
        name: 'Products',
    },
]

export default routes