<template>
  <div class="tab">
    <cube-tab-bar :useTransition=false
                  :showSlider=true
                  v-model="selectedLabel"
                  :data="tabs"
                  ref="tabBar">
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide :loop=false
                  :auto-play=false
                  :show-dots=false
                  :initial-index="index"
                  ref="slide"
                  :options="slideOptions"
                  @scroll="onScroll"
                  @change="onChange">
        <cube-slide-item v-for="(tab, index) in tabs"
                         :key="index">
          <component ref="component"
                     :is="tab.component"
                     :data="tab.data" />
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initialIndex,
      // 为了实施派发滚动距离（onScroll 被回调）需要添加，listenScroll、probeType
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0 // 同时竖向滚动和横向滚动，添加阈值
      }
    }
  },
  methods: {
    onScroll(pos) {
        const tabBarWidth = this.$refs.tabBar.$el.clientWidth // tabbar 完整的 width
        const slideWidth = this.$refs.slide.slide.scrollerWidth // n 个 tab 页 width 总和
        const transform = -pos.x / slideWidth * tabBarWidth
        this.$refs.tabBar.setSliderTransform(transform)
    },
    onChange(current) {
      this.index = current
      const component = this.$refs.component[current]
      component.fetch && component.fetch()
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex(value => {
          return value.label === newVal
        })
      }
    }
  },
  mounted() {
    this.onChange(this.index)
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.tab {
  display: flex;
  flex-direction: column;
  height: 100%; // @todo

  >>> .cube-tab {
    padding: 10px 0;
  }

  .slide-wrapper {
    flex: 1;
    overflow: hidden;
  }
}
</style>
