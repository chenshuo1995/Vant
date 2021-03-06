import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant
import { Button,NavBar,Swipe, SwipeItem,Tabbar, TabbarItem,Tabs,Tab,Popup,Icon,Lazyload,Toast   } from 'vant';
Vue.use(Button).use(Swipe).use(SwipeItem).use(NavBar).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Popup).use(Icon).use(Lazyload).use(Toast)

import 'amfe-flexible'//字体自适应
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
