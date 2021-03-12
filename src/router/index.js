import VueRouter from 'vue-router'
const TypingSpeedTest = () => import('../components/TypingSpeedTest.vue')

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
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router