import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
//import VueAnalytics from 'vue-analytics';



Vue.config.productionTip = false

// Configuration VueAnalytics
//Vue.use(VueAnalytics, {
//  id: 'G-DVZX2HEFKV',
//  router
//});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
