<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
        :side=true
        :data="goods"
        :options="scrollOptions"
        v-if="goods.length">
        <template #bar="{labels,current}">
          <cube-scroll-nav-bar
            #default="{txt}"
            direction="vertical"
            :labels="labels"
            :txts="barTxts"
            :current="current">
            <div class="text">
              <support-ico
                v-if="txt.type>=1"
                :size=3
                :type="txt.type"></support-ico>
              <span>{{txt.name}}</span>
              <span class="num" v-if="txt.count">
                <bubble :num="txt.count"></bubble>
              </span>
            </div>
          </cube-scroll-nav-bar>
        </template>
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="good.name">
          <ul>
            <li
              v-for="(food) in good.foods"
              :key="food.name"
              class="food-item">
              <div class="icon">
                <img width="57" height="57" :src="food.icon"/>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-control-wrapper">
                  <cart-control @add="onAdd" :food="food"></cart-control><!--@todo cart-control -->
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <div class="shop-cart-wrapper">
    <!--@todo-->
    </div>
  </div>
</template>

<script>
  import { getGoods } from 'api'
  import SupportIco from 'components/support-ico/support-ico'
  import CartControl from 'components/cart-control/cart-control'
  export default {
    components: {
      SupportIco,
      CartControl
    },
    name: 'goods',
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        goods: [],
        scrollOptions: {
          click: false,
          directionLockThreshold: 0
        }
      }
    },
    computed: {
      barTxts() {
        let ret = []
        this.goods.forEach((good) => {
          const { type, name, foods } = good
          let count = 0
          foods.forEach((food) => {
            count += food.count || 0
          })
          ret.push({
            type,
            name,
            count
          })
        })
        return ret
      }
    },
    methods: {
      fetch() {
        if (!this.fetched) {
          this.fetched = true
          getGoods({
            id: 1
          }).then((goods) => {
            this.goods = goods
          })
        }
      }
    },
    mounted() {
      this.fetch()
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .goods
    position relative
    text-align left
    height 100%
    .scroll-nav-wrapper
      position absolute
      width 100%
      top 0
      left 0
      bottom 48px
    >>> .cube-scroll-nav-bar
      width: 80px
      white-space normal
      overflow hidden
    >>> .cube-scroll-nav-bar-item
      padding 0 10px
      display flex
      align-items center
      height 56px
      line-height 14px
      font-size $fontsize-small
      background $color-background-ssss
      .text
        flex 1
        position relative
      .num
        position: absolute
        right: -8px
        top: -10px
      .support-ico
        display: inline-block
        vertical-align: top
        margin-right: 4px
    >>> .cube-scroll-nav-bar-item_active
      background $color-white
      color $color-dark-grey
    >>> .cube-scroll-nav-panel-title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid $color-col-line
      font-size $fontsize-small
      color $color-grey
      background $color-background-ssss
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      position relative
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
        img
          height auto
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size $fontsize-medium
          color $color-dark-grey
        .extra, .desc
          line-height 10px
          font-size $fontsize-small-s
          color $color-light-grey
        .desc
          line-height: 12px
          margin-bottom: 8px
        .extra
          .count
            margin-right: 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 10px
            font-size $fontsize-medium
            color $color-red
      .cart-control-wrapper
        position absolute
        right 0
        bottom 12px
    .shop-cart-wrapper
      position absolute
      left 0
      bottom 0
      width 100%
      height 48px
      z-index: 50
</style>
