<!--@TODO 未手写-->
<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64"
             height="64"
             src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1895058483,1645381756&fm=173&app=49&f=JPEG?w=312&h=208&s=FE13208CC2113DC6308A23800300709E" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand">123</span>
          <span class="name">123</span>
        </div>
        <div class="description">{{2}}/{{3}}分钟送达</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';
.header {
  position:relative;
  overflow:hidden;
  color:$color-white;
}
</style>
