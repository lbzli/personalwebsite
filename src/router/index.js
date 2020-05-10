import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import About from '../components/About/AboutMe'
import Login from '../components/Login'
import Register from '../components/Register'

const routes = [
    { path: '/', component: Home},
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]

const router = new VueRouter({ routes })

export default router