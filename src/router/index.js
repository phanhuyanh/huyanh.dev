import VueRouter from 'vue-router'
const TypingSpeedTest = () => import('../components/TypingSpeedTest.vue')
const FbPixel = () => import('../components/FbPixel.vue')
const GGAnalytic = () => import('../components/GGAnalytic.vue')
const GGTagManager = () => import('../components/GGTagManager.vue')
const Calendly = () => import('../components/Calendly.vue')
const TouchEvent = () => import('../components/TouchEvent.vue')
const RoughNotation = () => import('../components/RoughNotation.vue')
const Particles = () => import('../components/Particles.vue')

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
  {
    path: '/rough-notation',
    name: 'rough-notation',
    component: RoughNotation
  },
  {
    path: '/particles',
    name: 'particles',
    component: Particles
  },
  ...landingPage
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router