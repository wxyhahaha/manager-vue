import Vue from 'vue'
import Router from 'vue-router'

const Index = () =>import('../page/index')
const Home = () =>import('../page/home/index')
const Good = () =>import('../page/good/index')
const GoodDetail = () => import('../page/good/gooddetail')
const Order = () => import('@/page/order/index')
const Login = () =>import('@/page/login/index')
const Register =()=>import('@/page/register/index')
const Cartlist = ()=> import('@/page/cart/index')
const Percenter = () => import('@/page/Percenter/index')
Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/',
      name: 'Index',
      component:Index,
      redirect:'/home', 
      children:[
        {
          path: '/home',
          name: 'Home',
          component:Home,
        },
        {
          path: '/good',
          name: 'Good',
          component:Good,
        },
        {
          path: '/good/goodsdetali',
          name: 'GoodDetail',
          component:GoodDetail,
        },
        {
          path: '/order',
          name: 'Order',
          component:Order,
        },
        {
          path: '/cartlist',
          name: 'Cartlist',
          component:Cartlist,
        },
        {
          path: '/percenter',
          name: 'Percenter',
          component:Percenter,
        },
      ],
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    }
  ]
})
