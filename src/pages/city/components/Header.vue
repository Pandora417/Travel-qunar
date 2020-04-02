<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <i class="iconfont header-back">&#xe624;</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props:{
    
  }
}
  // 1rem = html font-size =50px
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'

  .header
    overflow hidden
    height .86rem
    position relative
    text-align center
    line-height .86rem
    font-size .3rem
    background $bgColor
    color #fff
    .header-back
      color #ffffff
      position absolute
      left 0
      top 0 
      width .64rem
      font-size .4rem
      text-align center
 </style>