<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button
        @click="fetchCurrency"
        class="btn waves-effect waves-light btn-small"
      >
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading"/>

    <div v-else class="row">
      <HomeBill
        :rates="currency.rates"
      />
      <HomeCurrency
        :rates="currency.rates"
        :date="currency.date"
      />
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'

export default {
  name: 'home',
  data: () => ({
    loading: true,
    currency: null
  }),
  components: {
    HomeBill,
    HomeCurrency
  },
  created () {
    this.fetchCurrency()
  },
  methods: {
    async fetchCurrency () {
      this.loading = true

      try {
        this.currency = await this.$store.dispatch('fetchCurrency')
      } catch (error) {
        console.error('Error fetching currency:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
