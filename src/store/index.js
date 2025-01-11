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
      // const API_KEY = process.env.VUE_APP_FIXER
      // const res = await fetch(`https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${API_KEY}`)
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        const data = await response.json()

        return {
          rates: {
            USD: data.rates.USD,
            EUR: data.rates.EUR,
            RUB: data.rates.RUB
          },
          date: data.date
        }
      } catch (error) {
        console.error('Ошибка при получении данных о валюте:', error)
      }
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
