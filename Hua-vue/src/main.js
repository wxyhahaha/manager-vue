import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store/index'
import 'iview/dist/styles/iview.css'
import '@/assets/css/basecss.css'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    // error:'./static/error.jpg',
    loading:'./static/loading2.gif',
    preLoad:1
})
console.log(iView)
Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$axios = axios 
// //添加全局token
// Vue.prototype.$axios.defaults.headers['x-token'] = "my token";
Vue.prototype.$axios.defaults.withCredentials = true  //浏览器设置cookie
// Vue.prototype.$axios.defaults.crossDomain = true;
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})