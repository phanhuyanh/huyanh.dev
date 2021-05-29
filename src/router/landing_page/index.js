const LandingPage = () => import('../../components/LandingPage.vue')
const MNTN = () => import('../../landing_page/MNTN.vue')
const Covid = () => import('../../landing_page/Covid.vue')

export default [
  {
  path: '/landing-page',
  name: 'landing-page',
  component: LandingPage
  },
  {
    path: '/landing-page/mntn',
    name: 'mntn',
    component: MNTN
  },
  {
    path: '/landing-page/covid',
    name: 'covid',
    component: Covid
  }
]