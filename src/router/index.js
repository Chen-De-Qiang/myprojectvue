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
import HomePage2st from '../components/2st/HomePage.vue'
import bianyiyuanli from '../components/BianYi/bianyiyuanli.vue'
import ByContainer from '../components/BianYi/ByContainer.vue'

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
      path: '/HomePage2st',
      name: 'HomePage2st',
      component: HomePage2st,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/bianyiyuanli',
      name: 'bianyiyuanli',
      component: bianyiyuanli,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/ByContainer',
      name: 'ByContainer',
      component: ByContainer,
      meta: {
        requireAuth: true
      }
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
