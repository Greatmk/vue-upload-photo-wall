// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'

// import store from './vuex/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(ElementUI)


// 注册全局过滤器
Vue.filter('datafmt',function(input,fmtstr){
  fmtstr = fmtstr?fmtstr:'YYYY:MM:DD'
  return moment(input).format(fmtstr)
})

// import {Button} from 'mint-ui'
// console.log(Button.name)


const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkActiveClass :'mui-active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});


new Vue({
  router,
  // store,
  render:h=>h(App),
  mounted() {
    // console.log(this);
  }
}).$mount('#app');

// Vue.component(Button.name, Button);



