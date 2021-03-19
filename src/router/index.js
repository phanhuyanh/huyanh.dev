import VueRouter from 'vue-router'
const TypingSpeedTest = () => import('../components/TypingSpeedTest.vue')
const FbPixel = () => import('../components/FbPixel.vue')

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
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router