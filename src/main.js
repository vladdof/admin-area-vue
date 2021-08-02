import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
// import 'materialize-css'
// import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: 'AIzaSyB8QbLAS-0S8w6ugKx99TYZKiagd-B7deQ',
  authDomain: 'vue--crm-d9367.firebaseapp.com',
  projectId: 'vue--crm-d9367',
  storageBucket: 'vue--crm-d9367.appspot.com',
  messagingSenderId: '945944053499',
  appId: '1:945944053499:web:f8e779125a55a020f2125e',
  measurementId: 'G-NZE3WTM7ZL'
}

let app

firebase.initializeApp(firebaseConfig)
// для локальных пользователей
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
