


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)


// axios
import axios from "./axios.js"
Vue.prototype.$http = axios

// Theme Configurations
import '../themeConfig.js'

// Auth0 Plugin
import AuthPlugin from "./plugins/auth";
Vue.use(AuthPlugin);


// ACL
import acl from './acl/acl'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// i18n
import i18n from './i18n/i18n'


// Vuexy Admin Filters
import './filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);


// Tour
import VueTour from 'vue-tour'
Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')


// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        key: 'YOUR_API_KEY',
        libraries: 'places', // This is required if you use the Auto complete plug-in
    },
})

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// Feather font icon
require('./assets/css/iconfont.css')


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

store.subscribe((mutations) => {
  console.log(mutations)
    switch (mutations.type) {
      case 'auth/SET_AUTH':
        if (mutations.payload) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${mutations.payload.token}`
          localStorage.setItem('userCredentials', JSON.stringify(mutations.payload))
        } else {
          axios.defaults.headers.common['Authorization'] = null
          localStorage.removeItem('userCredentials')
        }

        break;

      default:
        break;
    }
})

Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://e-learning.com/api/'
axios.defaults.baseURL = 'https://backend.e-learning21.my.id/api'

store.commit('auth/SET_AUTH', JSON.parse(localStorage.getItem('userCredentials')))

new Vue({
  router,
  store,
  i18n,
  acl,
  render: h => h(App)
}).$mount('#app')
