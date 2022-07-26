import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "@/components/common/toast";
import Vant,{Lazyload} from 'vant';
import 'vant/lib/index.css';


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(toast)

Vue.use(Vant);
Vue.use(Lazyload,{
  loading:require('assets/imgs/detail/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
