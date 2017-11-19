// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
// import IconSvg from '@/components/Icon-svg/index.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.component('icon-svg', IconSvg)

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 页面的标题的设置
  document.title = to.name
  next();
  // if (store.getters.token) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   } else {
  //     if (store.getters.roles.length === 0) {
  //       store.dispatch('GetInfo').then(res => {
  //         const roles = res.data.role
  //         store.dispatch('GenerateRoutes', { roles }).then(() => {
  //           router.addRoutes(store.getters.addRouters)
  //           next({ ...to })
  //         })
  //       })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next('/login')
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
