import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/Appindex'
import login2st from '@/components/login'
import Home from '@/components/home/home'
import LibraryIndex from '@/components/library/LibraryIndex'
import PersonalCenter from '@/components/personal/PersonalCenter.vue'
import Jotter from '@/components/jotter/jotter.vue'
import Login1st from '@/components/1st/login-1st'
import VersionControlPage from '@/components/VersionControlPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VersionControlPage',
      component: VersionControlPage
    },
    {
      path: '/Login1st',
      name: 'Login1st',
      component: Login1st
    },
    {
      path: '/login2st',
      name: 'login2st',
      component: login2st
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问 ,替换主页APP
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/LibraryIndex',
          name: 'LibraryIndex',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin',
          name: 'admin',
          component: PersonalCenter,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/Jotter',
          name: 'Jotter',
          component: Jotter,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
