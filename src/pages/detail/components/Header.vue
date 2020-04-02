<template>
  <div>
    <router-link 
      tag="div" 
      to="/" 
      class="header-abs"
      v-show="showAbs">
      <i class="iconfont header-abs-back">&#xe624;</i>
    </router-link>

    <div 
      class="header-fixed"
      :style="opacityStyle" 
      v-show="!showAbs">
      <router-link to="/">
        <i class="iconfont header-fixed-back">&#xe624;</i>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs:true,
      opacityStyle:{
        //实现渐隐渐变的效果
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if ( top > 60) {
        let opacity = top / 140
        this.opacityStyle = opacity > 1 ? 1 : opacity
        this.showAbs =false
      } else {
        this.showAbs = true
      }
      
    }
  },
  activated () {
    //监听滑动事件
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated () {
    //解绑
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    background rgba(0, 0, 0, .8) 
    .header-abs-back
      font-size .4rem
      color #fff
      position relative
      left 0.2rem
  .header-fixed
    position fixed
    overflow hidden
    height .86rem
    z-index 2
    left 0
    top 0 
    right 0
    text-align center
    line-height .86rem
    font-size .3rem
    background $bgColor
    color #fff
    .header-fixed-back
      position absolute
      color #ffffff
      left 0
      top 0 
      width .64rem
      font-size .4rem
      text-align center
</style>