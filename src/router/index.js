import VueRouter from 'vue-router'
const TypingSpeedTest = () => import('../components/TypingSpeedTest.vue')
const FbPixel = () => import('../components/FbPixel.vue')
const GGAnalytic = () => import('../components/GGAnalytic.vue')
const GGTagManager = () => import('../components/GGTagManager.vue')
const Calendly = () => import('../components/Calendly.vue')
const TouchEvent = () => import('../components/TouchEvent.vue')

import landingPage from './landing_page/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/typing-speed-test'
  },
  {
    path: '/typing-speed-test',
    name: 'typing-speed-test',
    component: TypingSpeedTest 
  },
  {
    path: '/learn-fb-pixel',
    name: 'learn-fb-pixel',
    component: FbPixel
  },
  {
    path: '/learn-gganalytic-UA',
    name: 'learn-gganalytic-UA',
    component: GGAnalytic
  },
  {
    path: '/learn-gg-tag-manager',
    name: 'learn-gg-tag-manager',
    component: GGTagManager
  },
  {
    path: '/calendly',
    name: 'calendly',
    component: Calendly
  },
  {
    path: '/touch-event',
    name: 'touch event',
    component: TouchEvent
  },
  ...landingPage
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router