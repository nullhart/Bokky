import Vue from 'vue'
import Vuex from 'vuex'
const VueMaterial = require('vue-material');
Vue.use(VueMaterial)
require('vue-material/dist/vue-material.css')
import modules from './modules'

Vue.use(Vuex)

Vue.material.registerTheme('default', {
  primary: 'light-blue',
  accent: 'deep-orange',
  warn: 'deep-orange',
  background: 'white'
})

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
