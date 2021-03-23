const LandingPage = () => import('../../components/LandingPage.vue')
const MNTN = () => import('../../components/MNTN.vue')

export default {
  path: '/landing-page',
  name: 'landing-page',
  component: LandingPage,
  children: [
    {
      path: 'mntn',
      name: 'mntn',
      component: MNTN
    }
  ]
}