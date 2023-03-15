import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import router from './router'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'


Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
