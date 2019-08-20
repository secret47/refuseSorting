import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

import WXrequest from './utils/request'
Vue.prototype.$http = WXrequest

const app = new Vue(App)
app.$mount()
