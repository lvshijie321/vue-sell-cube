<template>
  <div id="app">
    <v-header :seller="seller" />
    <!-- <div class="tab-wrapper"> -->
    <tab :tabs="tabs"></tab>
    <!-- </div> -->
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header.vue'
import Tab from 'components/tab/tab'
import { getSeller } from 'api'
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
          // component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评论',
          // component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          // component: Seller,
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
