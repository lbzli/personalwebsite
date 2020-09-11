import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import About from '../components/About/AboutMe'
import Login from '../components/Login'
import Register from '../components/Register'
import Post from '../components/Post/Post'
import editPost from '../components/Post/editPost'
import createPost from '../components/Post/createPost'
import article from '../components/myPost'
import uploadicon from '../components/Common/uploadicon'

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/post/create', component: createPost },
  { path: '/post/:id', component: Post},
  { path: '/post/:id/edit', component: editPost},
  { path: '/article', component: article},
  { path: '/uploadicon', component: uploadicon}
]

const router = new VueRouter({ routes })

export default router