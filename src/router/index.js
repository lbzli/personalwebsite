import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import About from '../components/About/AboutMe'
import Login from '../components/Login'

const routes = [
    {path:'/home',component:Home},
    {path:'/about',component:About},
    {path:'/login',component:Login}
]

const router = new VueRouter({routes})

export default router