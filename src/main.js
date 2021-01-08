import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import 'animate.css'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world',
      follow: 'Follow Us',
      level: 'LEVEL: GOLD',
      book: 'BOOK',
      clients: 'CLIENTS',
      manager: 'MANAGER RESERVATION',
      profile: 'MY PROFILE',
      personalize: 'PERSONALIZE',
      support: 'SUPPORT',
      logout: 'LOG OUT'
    },
    
  },
  es: {
    message: {
      hello: 'hola mmundo',
      follow: 'Siguenos en',
      level: 'NIVEL: ORO',
      book: 'RESERVA',
      clients: 'CLIENTES',
      manager: 'GENERENTE DE RESERVACIONES',
      profile: 'MI PERFIL',
      personalize: 'PERSONALIZADO',
      support: 'AYUDA',
      logout: 'CERRAR SESIÓN'
    },
    
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


