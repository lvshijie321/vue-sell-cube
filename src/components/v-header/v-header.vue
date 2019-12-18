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
          <span class="brand"></span>
          <span class="name">123</span>
        </div>
        <div class="description">{{2}}/{{3}}分钟送达</div>
      </div>

    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{1}}</span>
      <i class="icon-keyboard_arrow_right"></i>
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
  position: relative;
  overflow: hidden;
  color: $color-white;

  .content-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 12px 18px 24px;

    .avatar {
      flex: 0 0 64px;
      width: 64px;
      margin-right: 16px;

      img {
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;
      color: red;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: $fontsize-large;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: $fontsize-small;
      }
    }
  }
}
</style>
