const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    // 首页
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home')
    // component: () => import(/* webpackPrefetch:true, webpackChunkName: "home" */ '@/pages/home')
  }
]

export default routes;