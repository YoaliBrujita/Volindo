import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world'
    },
    follow: 'Follow Us'
  },
  es: {
    message: {
      hello: 'hola mmundo'
    },
    follow: 'Siguenos en'
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

Vue.config.productionTip = false


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')


