<template>
  <div id="app">
    <v-header :seller="seller" />
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header.vue'
import Tab from 'components/tab/tab'
import { getSeller } from 'api'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
export default {
  name: 'app',
  components: {
    VHeader,
    Tab
  },
  data() {
    return {
      seller: {}
    }
  },
  computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评论',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller({}).then(res => {
        this.seller = res
        console.log(this.seller)
      })
    }
  }
}
</script>

<style lang="stylus">
#app
  .tab-wrapper
      position: fixed
      top: 137px
      left: 0
      right: 0
      bottom: 0
</style>
