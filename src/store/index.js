import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    fetchCurrency: async () => {
      const API_KEY = process.env.VUE_APP_FIXER
      const res = await fetch(`https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${API_KEY}`)
      return await res.json()
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    info
  }
})
